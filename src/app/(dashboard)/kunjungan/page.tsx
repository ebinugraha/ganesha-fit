import { Button } from '@/components/ui/button';
import { db } from '@/lib/prisma';
import Link from 'next/link';
import { CheckInCheckOutData, columnsKunjungan } from './components/columns';
import { format } from 'date-fns';
import { DataTable } from '../anggota/data-table';
import { Card } from '@/components/ui/card';
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';

const Kunjungan = async () => {
  const checkInCheckOutData = await db.checkInCheckOut.findMany({
    include: {
      anggota: true,
    },
  });

  // export type CheckInCheckOutData = {
  //   no: number;
  //   noAnggota: string;
  //   nama: string;
  //   status: string;
  //   waktuCheckin: string;
  //   waktuCheckout: string;
  //   catatan: string;
  // };

  let no = 1;

  const formattedData: CheckInCheckOutData[] = checkInCheckOutData.map(
    (item) => ({
      no: no++,
      noAnggota: item.anggota.nomorAnggota,
      nama: item.anggota.nama,
      status: !!item.waktuCheckOut,
      waktuCheckin: item.waktuCheckIn
        ? format(item.waktuCheckIn, 'yyyy-MM-dd')
        : 'N/A',
      waktuCheckout: item.waktuCheckOut
        ? format(item.waktuCheckOut, 'yyyy-MM-dd')
        : 'N/A',
      catatan: item.catatan,
    })
  );

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Kunjungan</h1>
          <p className="text-sm text-muted-foreground">
            Checkin dan Checkout Anggota
          </p>
        </div>
        <div className="flex gap-2">
          <Button size={'sm'} asChild>
            <Link
              href={'/kunjungan/checkin'}
              className="flex items-center gap-2"
            >
              CheckIn
              <ArrowLeftToLine />
            </Link>
          </Button>
          <Button size={'sm'} asChild>
            <Link href={'/kunjungan/checkout'}>
              Checkout
              <ArrowRightFromLine />
            </Link>
          </Button>
        </div>
      </div>
      <div className="px-4 md:px-8 flex">
        <div className="w-full">
          <DataTable columns={columnsKunjungan} data={formattedData} />
        </div>
      </div>
    </div>
  );
};

export default Kunjungan;
