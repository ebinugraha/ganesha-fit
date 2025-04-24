import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TipeAnggotaForm } from './tipe-anggota-form';
import { db } from '@/lib/prisma';

interface TambahTipeAnggotaProps {
  params: Promise<{ tipeId: string }>;
}

const TambahTipeAnggota = async ({ params }: TambahTipeAnggotaProps) => {
  const { tipeId } = await params;

  // Fetch data based on tipeId if needed
  const tipeAnggotaData = await db.tipeKeanggotaan.findUnique({
    where: { id: tipeId },
  });

  const title = tipeAnggotaData ? 'Edit Tipe Anggota' : 'Tambah Tipe Anggota';
  const subtitle = tipeAnggotaData
    ? 'Edit tipe anggota yang sudah ada'
    : 'Tambah tipe anggota baru';

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-col gap-1 hidden md:flex lg:flex px-4 md:px-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <TipeAnggotaForm tipeAnggotaData={tipeAnggotaData} />
      </div>
    </div>
  );
};

export default TambahTipeAnggota;
