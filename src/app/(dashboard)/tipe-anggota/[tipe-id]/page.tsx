import { Button } from '@/components/ui/button';
import Link from 'next/link';

const TambahTipeAnggota = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-col gap-1 hidden md:flex lg:flex px-4 md:px-8">
        <h1 className="text-2xl font-bold">Tambah Tipe Anggota</h1>
        <p className="text-sm text-muted-foreground">Tambah Tipe</p>
      </div>
    </div>
  );
};

export default TambahTipeAnggota;
