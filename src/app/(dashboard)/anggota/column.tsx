import { Anggota } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Anggota>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'tanggalDaftar',
    header: 'Tanggal Daftar',
  },
  {
    accessorKey: 'statusKeanggotaan',
    header: 'Status',
  },
];
