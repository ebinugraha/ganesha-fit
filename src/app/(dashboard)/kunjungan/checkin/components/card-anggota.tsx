import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Anggota, Keanggotaan, TipeKeanggotaan } from '@prisma/client';
import Image from 'next/image';

type CardAnggotaProps = {
  anggota:
    | Anggota & {
        keanggotaan:
          | (Keanggotaan & { tipeKeanggotaan: TipeKeanggotaan })
          | null;
      };
};

export const CardAnggota = ({ anggota }: CardAnggotaProps) => {
  const hariIni = new Date();

  const selisih =
    (anggota.keanggotaan?.tanggalBerakhir?.getTime() ?? 0) - hariIni.getTime();
  const sisaHari = Math.ceil(selisih / (1000 * 60 * 60 * 24));

  return (
    <Card className="flex w-full">
      <div className="flex justify-center">
        <div className="w-32 rounded-2xl overflow-hidden">
          <Image
            src={
              anggota.fotoProfil ? anggota.fotoProfil : '/imagePlaceHolder.png'
            }
            alt="Foto Profil"
            width={128}
            height={128}
          />
        </div>
      </div>
      <Separator />
      <div className="px-6 flex flex-col">
        <span className="font-bold text-sm">{anggota.nama}</span>
        <span className="text-sm">{anggota.nomorAnggota}</span>
        <span className="text-sm">{sisaHari} Hari Lagi</span>
        <span className="text-sm">
          {anggota.keanggotaan?.tipeKeanggotaan?.nama}
        </span>
      </div>
      <Separator />
      <div className="w-full flex px-5">
        <Button className="w-full">
          <span>Check In</span>
        </Button>
      </div>
    </Card>
  );
};
