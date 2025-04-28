import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Kunjungan = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Kunjungan</h1>
          <p className="text-sm text-muted-foreground">
            Checkin dan Checkout Anggota
          </p>
        </div>
        <Button size={'sm'} className="flex gap-2 w-full md:w-auto" asChild>
          <Link href={'/anggota/tambah'} className="flex items-center gap-2">
            Tambah anggota
            {/* Tambah Anggota <UserPlus /> */}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Kunjungan;
