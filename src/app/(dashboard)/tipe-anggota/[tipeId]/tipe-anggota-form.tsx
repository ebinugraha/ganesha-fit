'use client';

import { z } from 'zod';
import { TipeKeanggotaan } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { axiosInstance } from '@/lib/axios';
import { toast } from 'sonner';

interface TipeAnggotaFormProps {
  tipeAnggotaData: TipeKeanggotaan | null;
}

const formSchema = z.object({
  nama: z.string().min(1, { message: 'Nama harus di isi' }),
  deskripsi: z.string().nullable(),
  harga: z.coerce.number().min(0),
  durasiHari: z.coerce.number().min(1),
  aksesKelas: z.boolean(),
  aksesPelatih: z.boolean(),
  aksesLoker: z.boolean(),
  aksesSauna: z.boolean(),
  aksesFasilitas: z.boolean().nullable(),
  isActive: z.boolean(),
});

export const TipeAnggotaForm = ({ tipeAnggotaData }: TipeAnggotaFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      harga: 0,
      deskripsi: null,
      durasiHari: 0,
      aksesKelas: false,
      aksesPelatih: false,
      aksesLoker: false,
      aksesSauna: false,
      aksesFasilitas: null,
      isActive: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tipeAnggota`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        toast.success('Tipe Anggota berhasil di buat', {
          description: 'Tipe Anggota berhasil di buat',
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error('Tipe Anggota gagal di buat', {
        description: 'Tipe Anggota gagal di buat',
      });
    }
  }

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full ">
      <Card className="w-full p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Nama */}
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nama tipe keanggotaan (contoh: VIP, Reguler, dll..)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* harga input form*/}
            <FormField
              control={form.control}
              name="harga"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Harga</FormLabel>
                  <FormControl>
                    <Input placeholder="Rp. " {...field} type="number" />
                  </FormControl>
                  <FormDescription>
                    Harga nama dari tipe anggota
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Deskripsi input form */}
            <FormField
              control={form.control}
              name="deskripsi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukan deskripsi"
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormDescription>Deskripsi dari tipe anggota</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* durasiHari input form*/}
            <FormField
              control={form.control}
              name="durasiHari"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Durasi Hari</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukan durasi"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormDescription>Durasi dari tipe anggota</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col md:grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="aksesFasilitas"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Akses Fasilitas</FormLabel>
                      <FormDescription>
                        Apakah anggota ini memiliki akses fasilitas?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              {/* aksesKelas checkbox */}
              <FormField
                control={form.control}
                name="aksesKelas"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Akses Kelas</FormLabel>
                      <FormDescription>
                        Apakah anggota ini memiliki akses kelas?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              {/* aksesPelatih checkbox */}
              <FormField
                control={form.control}
                name="aksesPelatih"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Akses Pelatih</FormLabel>
                      <FormDescription>
                        Apakah anggota ini memiliki akses pelatih?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              {/* aksesLoker checkbox */}
              <FormField
                control={form.control}
                name="aksesLoker"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Akses Loker</FormLabel>
                      <FormDescription>
                        Apakah anggota ini memiliki akses loker?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              {/* aksesSauna checkbox */}
              <FormField
                control={form.control}
                name="aksesSauna"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Akses Sauna</FormLabel>
                      <FormDescription>
                        Apakah anggota ini memiliki akses sauna?
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              {/* isActive checkbox */}
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Tipe Aktif</FormLabel>
                      <FormDescription>Apakah tipe ini aktif?</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
