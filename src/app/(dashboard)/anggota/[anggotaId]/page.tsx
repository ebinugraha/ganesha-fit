import { AnggotaForm } from './anggota-form';

const DetailAnggotaPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="flex-col gap-1 hidden md:flex lg:flex px-4 md:px-8">
        <h1 className="text-2xl font-bold">Tambah Anggota</h1>
        <p className="text-sm text-muted-foreground">Tambah anggota gym</p>
      </div>
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        {/* <TipeAnggotaForm tipeAnggotaData={tipeAnggotaData} /> */}
        <AnggotaForm anggota={null} />
      </div>
    </div>
  );
};

export default DetailAnggotaPage;
