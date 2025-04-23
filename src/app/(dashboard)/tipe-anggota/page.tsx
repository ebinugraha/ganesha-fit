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
import {
  Calendar,
  Clock,
  DoorOpen,
  Dumbbell,
  Key,
  KeyRound,
  MoreHorizontal,
  ShowerHead,
  UserPlus,
} from 'lucide-react';
import { prisma } from '../../../lib/prisma';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useEffect } from 'react';

const AnggotaPage = async () => {
  // get all data from prisma
  const data = await prisma.tipeKeanggotaan.findMany({});

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Tipe anggota</h1>
          <p className="text-sm text-muted-foreground">
            Halaman ini berisi Tipe anggota
          </p>
        </div>
        <Button size={'sm'} className="flex gap-2 w-full md:w-auto" asChild>
          <Link href={'tipe-anggota/tambah'}>
            Tambah Tipe Anggota <UserPlus />
          </Link>
        </Button>
      </div>

      {/* section card anggota */}

      <div className="md:grid grid-cols-3 gap-4 px-8">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>
              <div className="flex w-full items-center justify-between">
                <Badge variant={'default'}>Aktif</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size={'icon'} variant={'ghost'}>
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardDescription>
            <Separator className="my-2" />
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              VIP
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            {/* durasi */}
            <div className="flex gap-2 font-medium w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  Durasi
                </div>
                <span className="font-bold">5 hari</span>
              </div>
            </div>
            {/* akses kelas */}
            <div className="flex gap-2 font-medium w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <DoorOpen className="size-4" />
                  Akses Kelas
                </div>
                <span className="font-bold">Tidak</span>
              </div>
            </div>
            {/* akses loker */}
            <div className="flex gap-2 font-medium w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <KeyRound className="size-4" />
                  Loker
                </div>
                <span className="font-bold">Ya</span>
              </div>
            </div>
            {/* akses sauna */}
            <div className="flex gap-2 font-medium w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShowerHead className="size-4" />
                  Sauna
                </div>
                <span className="font-bold">Tidak</span>
              </div>
            </div>
            {/* akses fasilitas */}
            <div className="flex gap-2 font-medium w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="size-4" />
                  Fasilitas
                </div>
                <span className="font-bold">Ya</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AnggotaPage;
