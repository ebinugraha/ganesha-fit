import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// menggunakan koneksi yang sudah ada atau yang baru
export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

// dalam mode depelopment, simpan koneksi di globalThis
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
