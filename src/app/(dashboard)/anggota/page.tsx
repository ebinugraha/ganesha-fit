// di halaman ini berisi tentang seluruh anggota dari gym
// bisa menambah anggota dan lain lain

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconTrendingUp } from '@tabler/icons-react';
import { UserPlus } from 'lucide-react';
import { DataTable } from './data-table';
import { columns } from './column';
import { prisma } from '../../../lib/prisma';

const AnggotaPage = async () => {
  const data = await prisma.anggota.findMany({});

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Anggota</h1>
          <p className="text-sm text-muted-foreground">
            Halaman ini berisi tentang seluruh anggota dari gym
          </p>
        </div>
        <Button size={'sm'} className="flex gap-2 w-full md:w-auto">
          Tambah Pengunjung <UserPlus />
        </Button>
      </div>

      {/* Section card anggota */}
      {/* berisi total_anggota, anggota_aktif, anggota_tidak_aktif */}
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Anggota</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              120
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending anggota bulan ini <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Anggota 6 bulan terakhir
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Anggota Aktif</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              62
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending anggota aktif bulan ini{' '}
              <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Anggota Aktif 6 bulan terakhir
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Section table anggota */}
      <div className="flex px-4 md:px-6 w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AnggotaPage;
