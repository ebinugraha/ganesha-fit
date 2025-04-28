'use client';

import { Badge } from '@/components/ui/badge';
import { Anggota } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { ActionButton } from './actionButton';

export type AnggotaColumn = {
  no: number;
  id: string;
  nomorAnggota: string;
  nama: string;
  tanggalMulai: string;
  tanggalBerakhir: string;
  statusKeanggotaan: string;
};

export const columns: ColumnDef<AnggotaColumn>[] = [
  {
    accessorKey: 'no',
    header: 'No',
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'nomorAnggota',
    header: 'Nomor Anggota',
  },
  {
    accessorKey: 'tanggalMulai',
    header: 'Tanggal Mulai',
  },
  {
    accessorKey: 'tanggalBerakhir',
    header: 'Tanggal Berakhir',
  },
  {
    accessorKey: 'statusKeanggotaan',
    header: 'Status Keanggotaan',
    cell: ({ row }) => {
      const status = row.original.statusKeanggotaan;
      return (
        <Badge
          variant={
            status === 'AKTIF'
              ? 'default'
              : status === 'TIDAK_AKTIF'
              ? 'destructive'
              : 'outline'
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'Aksi',
    cell: ({ row }) => {
      const id = row.original.id;

      return <ActionButton id={id} />;
    },
  },
];
