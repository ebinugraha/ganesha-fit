import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// menggunakan koneksi yang sudah ada atau yang baru
export const db = globalThis.prisma || new PrismaClient({});

// dalam mode depelopment, simpan koneksi di globalThis
if (process.env.NODE_ENV !== 'production') global.prisma = db;
