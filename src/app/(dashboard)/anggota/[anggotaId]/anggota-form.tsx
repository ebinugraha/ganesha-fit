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
import { Anggota, Keanggotaan, TipeKeanggotaan } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { startTransition, useEffect, useState } from 'react';
import { toast } from 'sonner';

// Konstanta untuk URL API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Tipe untuk props komponen
type AnggotaFormProps = {
  anggota:
    | (Anggota & {
        keanggotaan:
          | (Keanggotaan & {
              tipeKeanggotaan: TipeKeanggotaan;
            })
          | null;
      })
    | null;
};

// Skema validasi form menggunakan Zod
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

// Tipe untuk nilai form
type FormValues = z.infer<typeof formSchema>;

export const AnggotaForm = ({ anggota }: AnggotaFormProps) => {
  const router = useRouter();
  const [tipeAnggota, setTipeAnggota] = useState<TipeKeanggotaan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk mengambil data tipe anggota
  const fetchTipeAnggota = async () => {
    try {
      const response = await fetch(`${API_URL}/tipeAnggota`);

      if (!response.ok) {
        throw new Error('Gagal mengambil data tipe anggota');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      toast.error('Gagal mengambil data tipe anggota');
      return [];
    }
  };

  // Menginisialisasi nilai default form
  const getDefaultValues = (): Partial<FormValues> => {
    if (anggota) {
      return {
        nama: anggota.nama,
        email: anggota.email,
        jenisKelamin: anggota.jenisKelamin,
        alamat: anggota.alamat,
        tanggalLahir: anggota.tanggalLahir ?? undefined,
        noTelepon: anggota.noTelepon,
        fotoProfil: anggota.fotoProfil,
        tipeKeanggotaanId: anggota.keanggotaan?.tipeKeanggotaanId,
        tanggalMulai: anggota.keanggotaan?.tanggalMulai,
      };
    }

    return {
      nama: '',
      email: '',
      jenisKelamin: undefined,
      alamat: '',
      tanggalLahir: undefined,
      noTelepon: '',
      fotoProfil: '',
      tipeKeanggotaanId: '',
      tanggalMulai: new Date(),
    };
  };

  // Inisialisasi form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(),
  });

  // Mengambil data tipe anggota saat komponen dimuat
  useEffect(() => {
    const getTipeAnggota = async () => {
      setIsLoading(true);
      const data = await fetchTipeAnggota();
      setTipeAnggota(data);
      setIsLoading(false);
    };

    getTipeAnggota();
  }, []);

  // Fungsi untuk mengirim data form
  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      if (anggota) {
        // Update anggota yang sudah ada
        await toast.promise(
          fetch(`${API_URL}/anggota?id=${anggota.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }),
          {
            loading: 'Mengubah data anggota...',
            success: () => {
              router.push('/anggota');
              return 'Berhasil mengubah data anggota';
            },
            error: 'Gagal mengubah data anggota',
          }
        );
      } else {
        // Membuat anggota baru
        await toast.promise(
          fetch(`${API_URL}/anggota`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }),
          {
            loading: 'Menambah data anggota...',
            success: () => {
              router.push('/anggota');
              return 'Berhasil menambah data anggota';
            },
            error: 'Gagal menambah data anggota',
          }
        );
      }
    } catch (error) {
      toast.error('Terjadi kesalahan', {
        description: 'Gagal menyimpan data anggota',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Render form
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full">
      <Card className="w-full p-4 md:p-6 lg:p-8">
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
                    <Input
                      type="text"
                      placeholder="Nama Anggota"
                      className="input"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan nama lengkap anggota contoh: John Doe, Niki, dll.
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* Email */}
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
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormDescription>Masukkan email anggota</FormDescription>
                </FormItem>
              )}
            />

            {/* Jenis Kelamin */}
            <FormField
              control={form.control}
              name="jenisKelamin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Kelamin</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
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
                  <FormDescription>Pilih jenis kelamin anggota</FormDescription>
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
                      type="tel"
                      placeholder="No Telepon Anggota"
                      className="input"
                      {...field}
                      value={field.value || ''}
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
                          variant="outline"
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
                    <PopoverContent className="p-0 w-auto" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={(date) => date > new Date()}
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
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormDescription>
                    Masukkan alamat lengkap anggota
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* Tipe Keanggotaan */}
            <FormField
              control={form.control}
              name="tipeKeanggotaanId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipe Keanggotaan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                    disabled={isLoading || tipeAnggota.length === 0}
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
                  <FormDescription>
                    Pilih tipe keanggotaan untuk anggota ini
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* Tombol Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto"
            >
              {isLoading
                ? 'Memproses...'
                : anggota
                ? 'Perbarui Anggota'
                : 'Tambah Anggota'}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
