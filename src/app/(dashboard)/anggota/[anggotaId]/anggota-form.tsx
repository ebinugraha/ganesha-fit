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
import { zodResolver } from '@hookform/resolvers/zod';
import { Anggota } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  tanggalLahir: z.string().optional().nullable(),
  noTelepon: z.string().optional().nullable(),
  fotoProfil: z.string().optional().nullable(),
  tipeKeanggotaanId: z.string({ required_error: 'Pilih tipe keanggotaan' }),
  tanggalMulai: z.date(),
});

export const AnggotaForm = ({ anggota }: AnggotaFormProps) => {
  const router = useRouter();

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

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 w-full">
      <Card className="w-full p-4 md:p-6 lg:p-8">
        <Form {...form}>
          {/* Namaaa anggotaaa */}
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
                        className={`w-full pl-3 text-left font-normal ${
                          !field.value && 'text-muted-foreground'
                        }`}
                        variant="outline"
                      >
                        {field.value ? (
                          new Date(field.value).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          })
                        ) : (
                          <span>DD/MM/YYYY</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </Form>
      </Card>
    </div>
  );
};
