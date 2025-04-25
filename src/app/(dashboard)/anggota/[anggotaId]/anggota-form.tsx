'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Anggota, TipeKeanggotaan } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, CalendarX2Icon } from 'lucide-react';
import { startTransition, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface AnggotaFormProps {
  anggota: Anggota | null;
}

const formSchema = z.object({
  nama: z
    .string()
    .min(2, { message: 'Nama harus diisi minimal 2 karakter' })
    .max(255),
  email: z
    .string()
    .email({ message: 'Email tidak valid' })
    .optional()
    .nullable(),
  jenisKelamin: z.enum(['LAKI_LAKI', 'PEREMPUAN']),
  alamat: z.string().min(1).max(255).nullable(),
  tanggalLahir: z.date({ message: 'Tanggal lahir tidak valid' }),
  noTelepon: z.string().optional().nullable(),
  fotoProfil: z.string().optional().nullable(),
  tipeKeanggotaanId: z.string({ required_error: 'Pilih tipe keanggotaan' }),
  tanggalMulai: z
    .date()
    .default(() => new Date())
    .optional(),
});

export const AnggotaForm = ({ anggota }: AnggotaFormProps) => {
  const router = useRouter();
  const [tipeAnggota, setTipeAnggota] = useState<TipeKeanggotaan[]>([]);

  useEffect(() => {
    const fetchTipeAnggota = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tipeAnggota`
        );

        if (!response.ok) {
          toast.error('Gagal mengambil data tipe anggota');
        }

        const data = await response.json();

        console.log(data);

        setTipeAnggota(data.data);
      } catch (error) {
        toast.error('Gagal mengambil data tipe anggota');
      }
    };

    fetchTipeAnggota();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      email: '',
      jenisKelamin: undefined,
      alamat: '',
      tanggalLahir: undefined,
      noTelepon: '',
      fotoProfil: '',
      tipeKeanggotaanId: '',
      tanggalMulai: new Date(),
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      startTransition(() => {
        toast.promise(
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/anggota`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }),
          {
            loading: 'Menambah...',
            success: () => {
              router.push('/anggota');
              return 'Berhasil menambah data';
            },
            error: 'Gagal Menambah',
          }
        );
      });
    } catch (error) {
      toast.error('Tipe Anggota gagal di buat', {
        description: 'Tipe Anggota gagal di buat',
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full">
      <Card className="w-full p-4 md:p-6 lg:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nama Anggota"
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan nama lengkap anggota contoh: john doe, niki, dll..
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Anggota"
                      className="input"
                      {...field}
                      value={field.value || ''} // Ensure value is always a string
                    />
                  </FormControl>
                  <FormDescription>Masukkan email anggota</FormDescription>
                </FormItem>
              )}
            />

            {/* Jenissss kelaminnnnnn */}
            <FormField
              control={form.control}
              name="jenisKelamin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Kelamin</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value} // Ensure value is always a string
                    // Ensure value is always a string
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Jenis Kelamin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Jenis kelamin</SelectLabel>
                        <SelectItem value="LAKI_LAKI">Laki-laki</SelectItem>
                        <SelectItem value="PEREMPUAN">Perempuan</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Pilih jenis kelamin anggota (Laki-laki, Perempuan)
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* No Telepon */}

            <FormField
              control={form.control}
              name="noTelepon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No Telepon</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="No Telepon Anggota"
                      className="input"
                      {...field}
                      value={field.value || ''} // Ensure value is always a string
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan no telepon contoh: 08xxxxxxxxx
                  </FormDescription>
                </FormItem>
              )}
            />
            {/* Tanggal Lahir */}
            <FormField
              control={form.control}
              name="tanggalLahir"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full text-left pl-3',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? format(field.value, 'dd/MM/yyyy')
                            : 'Pilih Tanggal Lahir'}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 w-full" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Pilih tanggal lahir anggota</FormDescription>
                </FormItem>
              )}
            />

            {/* Alamat */}

            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Alamat Anggota"
                      {...field}
                      value={field.value || ''} // Ensure value is always a string
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Tipe keanggotaan menggunakan select */}

            <FormField
              control={form.control}
              name="tipeKeanggotaanId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipe Keanggotaan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value} // Ensure value is always a string
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Tipe Keanggotaan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipe keanggotaan</SelectLabel>
                        {tipeAnggota.map((tipe) => (
                          <SelectItem key={tipe.id} value={tipe.id}>
                            {tipe.nama}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
          {/* Namaaa anggotaaa */}
        </Form>
      </Card>
    </div>
  );
};
