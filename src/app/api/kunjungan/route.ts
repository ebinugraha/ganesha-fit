import { auth } from '@clerk/nextjs/server';

import { db } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const checkinSchema = z.object({
  anggotaId: z.string().uuid({ message: 'Id anggota tidak valid' }),
  catatan: z.string().optional().nullable(),
});

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        {
          status: 401,
        }
      );
    }

    const url = new URL(request.url);

    const anggotaId = url.searchParams.get('anggotaId');
    const tanggal = url.searchParams.get('tanggal');
    const limit = url.searchParams.get('limit')
      ? parseInt(url.searchParams.get('limit')!)
      : 10;
    const page = url.searchParams.get('page')
      ? parseInt(url.searchParams.get('page')!)
      : 1;
    const skip = (page - 1) * limit;

    const query: Record<string, string | Record<string, Date>> = {};

    if (anggotaId) {
      query.anggotaId = anggotaId;
    }

    if (tanggal) {
      const date = new Date(tanggal);
      const startOfDay = new Date(date.setHours(0, 0, 0, 0));
      const endOfDay = new Date(date.setHours(23, 59, 59, 999));

      query.tanggal = {
        gte: startOfDay,
        lte: endOfDay,
      };
    }

    const [kunjungan, totalCount] = await Promise.all([
      db.checkInCheckOut.findMany({
        where: query,
        include: {
          anggota: {
            select: {
              nama: true,
              nomorAnggota: true,
              fotoProfil: true,
            },
          },
          petugas: {
            select: {
              nama: true,
            },
          },
        },
        orderBy: {
          waktuCheckIn: 'desc',
        },
        take: limit,
        skip,
      }),
      db.checkInCheckOut.count({
        where: query,
      }),
    ]);

    return NextResponse.json({
      data: kunjungan,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Internal Server Error',
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 400 });
    }

    const body = await request.json();

    const validationResult = checkinSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { anggotaId, catatan } = validationResult.data;

    const anggota = await db.anggota.findUnique({
      where: { id: anggotaId },
      include: {
        keanggotaan: true,
      },
    });

    if (!anggota) {
      return NextResponse.json(
        { error: 'Anggota tidak ditemukan' },
        { status: 402 }
      );
    }

    if (anggota.statusKeanggotaan === 'TIDAK_AKTIF') {
      return NextResponse.json(
        { error: 'Anggota tidak aktif' },
        { status: 402 }
      );
    }

    if (
      anggota.keanggotaan &&
      anggota.keanggotaan.tanggalBerakhir < new Date()
    ) {
      await db.anggota.update({
        where: { id: anggotaId },
        data: {
          statusKeanggotaan: 'HABIS',
        },
      });

      return NextResponse.json(
        { error: 'Anggota telah habis' },
        { status: 402 }
      );
    }

    // memeriksa apakah anggota sudah checkin
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingCheckin = await db.checkInCheckOut.findFirst({
      where: {
        anggotaId,
        waktuCheckIn: {
          gte: today,
        },
        waktuCheckOut: null,
      },
    });

    if (existingCheckin) {
      return NextResponse.json(
        { error: 'Anggota sudah checkin' },
        { status: 402 }
      );
    }

    const petugas = await db.petugas.findFirst({
      where: {
        clerkId: userId,
      },
    });

    const checkIn = await db.checkInCheckOut.create({
      data: {
        anggotaId,
        catatan,
        petugasId: petugas?.id,
      },
    });

    return NextResponse.json({ message: 'Check-in berhasil' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH() {}
