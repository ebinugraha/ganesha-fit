import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TipeAnggotaForm } from './tipe-anggota-form';

interface TambahTipeAnggotaProps {
  params: Promise<{ tipeId: string }>;
}

const TambahTipeAnggota = async ({ params }: TambahTipeAnggotaProps) => {
  const { tipeId } = await params;

  // Fetch data based on tipeId if needed

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-col gap-1 hidden md:flex lg:flex px-4 md:px-8">
        <h1 className="text-2xl font-bold">Tambah Tipe Anggota</h1>
        <p className="text-sm text-muted-foreground">Tambah Tipe</p>
      </div>
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <TipeAnggotaForm tipeAnggotaData={null} />
      </div>
    </div>
  );
};

export default TambahTipeAnggota;
