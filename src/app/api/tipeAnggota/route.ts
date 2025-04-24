'use server';

import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/prisma';
import { z } from 'zod';

// nama: string;
//     deskripsi: string | null;
//     harga: number;
//     durasiHari: number;
//     aksesKelas: boolean;
//     aksesPelatih: boolean;
//     aksesLoker: boolean;
//     aksesSauna: boolean;
//     aksesFasilitas: string | null;
//     id: string;
//     createdAt: Date;
//     updatedAt: Date;

const tipeAnggotaSchema = z.object({
  nama: z.string().min(1).max(255),
  deskripsi: z.string().min(1).max(255).nullable(),
  harga: z.number().min(0),
  durasiHari: z.number().min(1),
  aksesKelas: z.boolean(),
  aksesPelatih: z.boolean(),
  aksesLoker: z.boolean(),
  aksesSauna: z.boolean(),
  aksesFasilitas: z.boolean(),
  isActive: z.boolean(),
});

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const tipeKunjunganData = await db.tipeKeanggotaan.findMany({});

    return NextResponse.json({ data: tipeKunjunganData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { userId } = await auth();
    const url = new URL(request.url);

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const id = url.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ message: 'Id is required' }, { status: 400 });
    }

    const tipeAnggota = await db.tipeKeanggotaan.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Tipe Anggota berhasil dihapus' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();
    const url = new URL(request.url);

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const id = url.searchParams.get('id');
    if (!id) {
      return NextResponse.json({ message: 'Id is required' }, { status: 400 });
    }

    const body = await request.json();

    const validationResult = tipeAnggotaSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid data', errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { ...data } = validationResult.data;
    const tipeAnggota = await db.tipeKeanggotaan.update({
      where: { id },
      data: {
        ...data,
      },
    });

    return NextResponse.json(
      { data: tipeAnggota, message: 'Berhasil diperbarui' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validationResult = tipeAnggotaSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { message: 'Invalid data', errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { ...data } = validationResult.data;

    const tipeAnggota = await db.tipeKeanggotaan.create({
      data: {
        ...data,
      },
    });

    return NextResponse.json(
      { data: tipeAnggota, message: 'Berhasil dibuat' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error,
      },
      { status: 500 }
    );
  }
}
