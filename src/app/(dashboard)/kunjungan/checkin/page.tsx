import { Card } from '@/components/ui/card';
import { db } from '@/lib/prisma';
import { CardView } from './components/card-view';

const CheckInPage = async () => {
  // Todo get data anggota yang belum check in pakai prisma
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);
  const akhirHari = new Date();
  akhirHari.setHours(23, 59, 59, 999);

  const sudahCheckin = await db.checkInCheckOut.findMany({
    where: {
      waktuCheckIn: {
        gte: hariIni,
        lte: akhirHari,
      },
    },
    select: {
      anggotaId: true,
    },
  });

  const idSudahCheckIn = sudahCheckin.map((item) => item.anggotaId);

  const dataAnggota = await db.anggota.findMany({
    where: {
      id: {
        notIn: idSudahCheckIn,
      },
    },
    include: {
      keanggotaan: {
        include: {
          tipeKeanggotaan: true,
        },
      },
    },
    orderBy: {
      nomorAnggota: 'asc',
    },
  });

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Check-In</h1>
          <p className="text-sm text-muted-foreground">Check-In Anggota</p>
        </div>
      </div>
      {/* Tambahkan search anggota berdasarkan nama  */}
      <div className="px-4 md:px-8 flex">
        <CardView anggota={dataAnggota} />
      </div>
    </div>
  );
};

export default CheckInPage;
