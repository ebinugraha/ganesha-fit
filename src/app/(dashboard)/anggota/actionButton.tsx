'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const ActionButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleEdit = () => {
    // logic to edit the item
    router.push(`/anggota/${id}`);
  };

  const handleDelete = () => {
    // Logic to delete the item
    toast.promise(
      fetch(`/api/anggota?id=${id}`, {
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
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal className="text-muted-foreground size-4" />
        {/* <Button
          className="w-full justify-center px-2"
          variant="ghost"
          size="icon"
        >
        </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild onClick={handleEdit}>
          <div className="flex items-center gap-2">
            <Pencil className="text-yellow-400" />
            <span>Edit</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={handleDelete}>
          <div className="flex items-center gap-2">
            <Trash className="text-red-400" />
            <span>Delete</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
