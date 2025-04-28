import { db } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { JenisKelamin } from '@prisma/client';
import { error } from 'console';
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
});

const anggotaUpdateSchema = z.object({
  nama: z.string().min(2).max(255),
  email: z.string().email().optional().nullable(),
  alamat: z.string().min(2).max(200).nullable(),
  jenisKelamin: z.enum([JenisKelamin.LAKI_LAKI, JenisKelamin.PEREMPUAN]),
  tanggalLahir: z.string().optional().nullable(),
  noTelepon: z.string().nullable().optional(),
  fotoProfil: z.string().nullable().optional(),
  tipeKeanggotaanId: z
    .string()
    .uuid({ message: 'Tipe keanggotaan tidak valid' }),
  tanggalMulai: z.string().optional().nullable(),
  durasi: z.number().optional(),
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

      const nomorUrutInvoice = await tx.pembayaran.count({
        where: {
          nomorInvoice: {
            startsWith: 'INV-',
          },
        },
      });

      const formatNomorUrutInvoice = String(nomorUrutInvoice + 1).padStart(
        5,
        '0'
      );

      // membuat invoice
      const nomorInvoice = `INV-${tahun}${String(
        new Date().getMonth() + 1
      ).padStart(2, '0')}${String(new Date().getDate()).padStart(
        2,
        '0'
      )}-${formatNomorUrutInvoice}`;

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

export async function PATCH(request: NextRequest) {
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
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id not found' }, { status: 400 });
    }

    const body = await request.json();

    const validationResult = anggotaUpdateSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid data : ' + validationResult.error.errors[0].message,
        },
        {
          status: 400,
        }
      );
    }

    const data = validationResult.data;

    // total anggota
    const totalAnggota = await db.anggota.count({
      where: {
        nomorAnggota: {
          startsWith: 'GYM-',
        },
      },
    });

    const result = await db.$transaction(async (tx) => {
      // TODO : update anggota
      const anggota = await tx.anggota.update({
        data: {
          nama: data.nama,
          email: data.email,
          jenisKelamin: data.jenisKelamin,
          alamat: data.alamat,
          fotoProfil: data.fotoProfil,
          tanggalLahir: data.tanggalLahir ? new Date(data.tanggalLahir) : null,
        },
        where: {
          id,
        },
      });

      // TODO : cek ke anggotaan
      const keanggotaanLama = await tx.keanggotaan.findFirst({
        where: {
          anggotaId: anggota.id,
        },
      });

      if (!keanggotaanLama) {
        throw new Error('Anggota tidak memiliki keanggotaan');
      }

      // TODO : cek jika tipe keanggotaan berubah
      if (keanggotaanLama.tipeKeanggotaanId !== data.tipeKeanggotaanId) {
        console.log('tipe keanggotaan berubahhh');
        const keanggotaanUpdate = await tx.keanggotaan.update({
          data: {
            tipeKeanggotaanId: data.tipeKeanggotaanId,
            tanggalMulai: data.tanggalMulai
              ? new Date(data.tanggalMulai)
              : new Date(),
          },
          where: {
            anggotaId: id,
          },
        });

        const tipeKeanggotaan = await tx.tipeKeanggotaan.findUnique({
          where: {
            id: data.tipeKeanggotaanId,
          },
        });

        // // membuat no invoice
        const tahun = new Date().getFullYear();

        const nomorUrutInvoice = await tx.pembayaran.count({
          where: {
            nomorInvoice: {
              startsWith: 'INV-',
            },
          },
        });

        const formatNomorUrutInvoice = String(nomorUrutInvoice + 1).padStart(
          5,
          '0'
        );

        const nomorInvoice = `INV-${tahun}${String(
          new Date().getMonth() + 1
        ).padStart(2, '0')}${String(new Date().getDate()).padStart(
          2,
          '0'
        )}-${formatNomorUrutInvoice}`;

        console.log('nomor invoice', nomorInvoice);

        await tx.pembayaran.create({
          data: {
            nomorInvoice: nomorInvoice,
            anggotaId: anggota.id,
            jumlahPembayaran: tipeKeanggotaan?.harga || 0,
            metodePembayaran: 'TUNAI',
            statusPembayaran: 'BERHASIL',
            tipePembayaran: 'LAINNYA',
            keterangan: `Pembayaran Ubah tipe anggota untuk ${anggota.nama}`,
          },
        });

        return { anggota };
      }
    });

    return NextResponse.json(
      {
        message: 'Anggota berhasil diupdate',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something bad happen to me',
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
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
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          error: 'Id anggota tidak ditemukan',
        },
        {
          status: 400,
        }
      );
    }

    // cek jika anggota ada
    const anggota = await db.anggota.findUnique({
      where: {
        id,
      },
    });

    if (!anggota) {
      return NextResponse.json(
        {
          error: 'Anggota tidak ditemukan',
        },

        {
          status: 404,
        }
      );
    }

    // hapus anggota
    await db.anggota.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: 'Anggota berhasil dihapus',
      },
      {
        status: 200,
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
