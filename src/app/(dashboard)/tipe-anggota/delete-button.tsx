'use client';

import { startTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    startTransition(() => {
      toast.promise(
        fetch(`/api/tipeAnggota?id=${id}`, {
          method: 'DELETE',
        }),
        {
          loading: 'Menghapus...',
          success: () => {
            router.refresh();
            return 'Berhasil menghapus data';
          },
          error: 'Gagal menghapus data',
        }
      );
    });
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-between px-2"
      onClick={handleDelete}
    >
      Delete
      <Trash className="text-red-400 size-4" />
    </Button>
  );
}
