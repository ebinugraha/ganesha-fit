import { Anggota, Keanggotaan, TipeKeanggotaan } from '@prisma/client';
import { CardAnggota } from './card-anggota';

type CardViewProps = {
  anggota:
    | (Anggota & {
        keanggotaan:
          | (Keanggotaan & { tipeKeanggotaan: TipeKeanggotaan })
          | null;
      })[];
};

export const CardView = ({ anggota }: CardViewProps) => {
  return (
    <div className="grid w-full md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-6">
      {anggota.map((item) => (
        <CardAnggota key={item.id} anggota={item} />
      ))}
    </div>
  );
};
