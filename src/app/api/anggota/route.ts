import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { JenisKelamin } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const anggotaSchema = z.object({
  nama: z.string().min(1).max(255),
  email: z.string().email().optional().nullable(),
  jenisKelamin: z.enum(['LAKI_LAKI', 'PEREMPUAN']),
  alamat: z.string().min(1).max(255).nullable(),
  tanggalLahir: z.string().optional().nullable(),
  noTelepon: z.string().optional().nullable(),
  fotoProfil: z.string().optional().nullable(),
  tipeKeanggotaanId: z
    .string()
    .uuid({ message: 'Tipe keanggotaan tidak valid' }),
  tanggalMulai: z.string().optional().nullable(),
  durasi: z.number().optional(),

  // nama: z.string().min(2, { message: "Nama harus diisi minimal 2 karakter" }),
  // email: z.string().email({ message: "Format email tidak valid" }).optional().nullable(),
  // jenisKelamin: z.enum(["LAKI_LAKI", "PEREMPUAN"]),
  // alamat: z.string().optional().nullable(),
  // tanggalLahir: z.string().optional().nullable(),
  // noTelepon: z.string().optional().nullable(),
  // fotoProfil: z.string().optional().nullable(),
  // tipeKeanggotaanId: z.string().uuid({ message: "Tipe keanggotaan tidak valid" }),
  // tanggalMulai: z.string().optional(),
  // durasi: z.number().optional(), // Durasi dalam hari
});

const anggotaUpdateSchema = z.object({
  statusKeanggotaan: z
    .enum(['AKTIF', 'TIDAK_AKTIF', 'SUSPENDED', 'HABIS'])
    .optional(),
});

export async function POST(request: NextRequest) {
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

    const body = await request.json();

    const resultValidation = anggotaSchema.safeParse(body);

    if (!resultValidation.success) {
      return NextResponse.json(
        { message: 'Invalid data', errors: resultValidation.error.errors },
        { status: 400 }
      );
    }

    const petugas = await db.petugas.findFirst({
      where: {
        clerkId: userId,
      },
    });

    // membuat nomor anggota unik
    const tahun = new Date().getFullYear();

    const jumlahAnggotaTahunIni = await db.anggota.count({
      where: {
        nomorAnggota: {
          startsWith: `GYM-${tahun}`,
        },
      },
    });

    const nomorUrut = String(jumlahAnggotaTahunIni + 1).padStart(5, '0');
    const nomorAnggota = `GYM-${tahun}-${nomorUrut}`;

    const data = resultValidation.data;

    const result = await db.$transaction(async (tx) => {
      const anggota = await tx.anggota.create({
        data: {
          nomorAnggota,
          nama: data.nama,
          email: data.email,
          jenisKelamin: data.jenisKelamin,
          alamat: data.alamat,
          fotoProfil: data.fotoProfil,
          tanggalLahir: data.tanggalLahir ? new Date(data.tanggalLahir) : null,
          statusKeanggotaan: 'AKTIF',
        },
      });

      const tanggalMulai = data.tanggalMulai
        ? new Date(data.tanggalMulai)
        : new Date();

      let durasi = data.durasi;

      if (!durasi) {
        const tipeKeanggota = await tx.tipeKeanggotaan.findUnique({
          where: {
            id: data.tipeKeanggotaanId,
          },
          select: { durasiHari: true },
        });

        if (!tipeKeanggota) {
          throw new Error('Tipe keanggotaan tidak ditemukan');
        }

        durasi = tipeKeanggota?.durasiHari;
      }

      // menghitung tanggal berakhir
      const tanggalBerakhir = new Date(tanggalMulai);
      tanggalBerakhir.setDate(tanggalBerakhir.getDate() + durasi);

      const keanggotaan = await tx.keanggotaan.create({
        data: {
          anggotaId: anggota.id,
          tipeKeanggotaanId: data.tipeKeanggotaanId,
          tanggalMulai,
          tanggalBerakhir,
        },
      });

      // membuat invoice
      const nomorInvoice = `INV-${tahun}${String(
        new Date().getMonth() + 1
      ).padStart(2, '0')}${String(new Date().getDate()).padStart(
        2,
        '0'
      )}-${nomorUrut}`;

      const tipeKeanggotaan = await tx.tipeKeanggotaan.findUnique({
        where: {
          id: data.tipeKeanggotaanId,
        },
      });

      await tx.pembayaran.create({
        data: {
          nomorInvoice,
          anggotaId: anggota.id,
          petugasId: petugas?.id,
          jumlahPembayaran: tipeKeanggotaan?.harga || 0,
          metodePembayaran: 'TUNAI',
          statusPembayaran: 'BERHASIL',
          tipePembayaran: 'KEANGGOTAAN_BARU',
          keterangan: `Pembayaran keanggotaan baru untuk ${anggota.nama}`,
        },
      });

      return { anggota, keanggotaan };
    });

    return NextResponse.json(
      {
        message: 'Anggota berhasil ditambahkan',
        data: result,
      },
      {
        status: 201,
      }
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
