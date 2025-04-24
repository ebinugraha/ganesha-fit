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
  Pencil,
  ShowerHead,
  Trash,
  UserPlus,
} from 'lucide-react';
import { db } from '../../../lib/prisma';
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
import { startTransition, useEffect } from 'react';
import { TipeKeanggotaan } from '@prisma/client';
import { toast } from 'sonner';
import { DeleteButton } from './delete-button';

async function getData() {
  try {
    // Ambil data dari Prisma (di server)
    const data: TipeKeanggotaan[] = await db.tipeKeanggotaan.findMany({});
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

const AnggotaPage = async () => {
  // get all data from prisma
  const data = await getData();

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
        {data.map((item) => (
          <Card className="@container/card" key={item.id}>
            <CardHeader>
              <CardDescription>
                <div className="flex w-full items-center justify-between">
                  <Badge variant={item.isActive ? 'default' : 'destructive'}>
                    {item.isActive ? 'Aktif' : 'Tidak Aktif'}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={'icon'} variant={'ghost'}>
                        <MoreHorizontal />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Menu</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        asChild
                        className="flex justify-between cursor-pointer"
                      >
                        <Button
                          className="w-full justify-between px-2 flex gap-2"
                          variant={'ghost'}
                          asChild
                        >
                          <Link href={`/tipe-anggota/${item.id}`}>
                            Edit
                            <Pencil className="text-yellow-400" />
                          </Link>
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="flex justify-between cursor-pointer"
                      >
                        <DeleteButton id={item.id} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardDescription>
              <Separator className="my-2" />
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-2xl text-slate-700">
                {item.nama}
              </CardTitle>
              <span className="font-light text-sm">{item.deskripsi}</span>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              {/* durasi */}
              <div className="flex gap-2 font-medium w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    Durasi
                  </div>
                  <span className="font-bold">{item.durasiHari} hari</span>
                </div>
              </div>
              {/* akses kelas */}
              <div className="flex gap-2 font-medium w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DoorOpen className="size-4" />
                    Akses Kelas
                  </div>
                  <span className="font-bold">
                    {item.aksesKelas ? 'Ya' : 'Tidak'}
                  </span>
                </div>
              </div>
              {/* akses loker */}
              <div className="flex gap-2 font-medium w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <KeyRound className="size-4" />
                    Loker
                  </div>
                  <span className="font-bold">
                    {' '}
                    {item.aksesLoker ? 'Ya' : 'Tidak'}
                  </span>
                </div>
              </div>
              {/* akses sauna */}
              <div className="flex gap-2 font-medium w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShowerHead className="size-4" />
                    Sauna
                  </div>
                  <span className="font-bold">
                    {' '}
                    {item.aksesSauna ? 'Ya' : 'Tidak'}
                  </span>
                </div>
              </div>
              {/* akses fasilitas */}
              <div className="flex gap-2 font-medium w-full">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="size-4" />
                    Fasilitas
                  </div>
                  <span className="font-bold">
                    {item.aksesFasilitas ? 'Ya' : 'Tidak'}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex w-full items-center justify-end">
                <span className="font-bold py-2">Rp. {item.harga}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnggotaPage;
