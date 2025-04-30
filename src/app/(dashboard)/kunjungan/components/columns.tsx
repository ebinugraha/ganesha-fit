'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CheckInCheckOutData = {
  no: number;
  noAnggota: string;
  nama: string;
  status: boolean;
  waktuCheckin: string;
  waktuCheckout: string;
  catatan: string | null;
};

export const columnsKunjungan: ColumnDef<CheckInCheckOutData>[] = [
  {
    accessorKey: 'no',
    header: 'No',
  },
  {
    accessorKey: 'noAnggota',
    header: 'No Anggota',
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      return <Badge>{status}</Badge>;
    },
  },
  {
    accessorKey: 'waktuCheckin',
    header: 'Waktu Checkin',
  },
  {
    accessorKey: 'waktuCheckout',
    header: 'Waktu Checkout',
  },
];
