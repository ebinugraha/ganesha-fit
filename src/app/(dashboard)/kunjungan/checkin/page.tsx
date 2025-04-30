const CheckInPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-4">
        <div className="flex-col gap-1 hidden md:flex lg:flex">
          <h1 className="text-2xl font-bold">Check-In</h1>
          <p className="text-sm text-muted-foreground">Check-In Anggota</p>
        </div>
      </div>
      <div className="px-4 md:px-8 flex">
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default CheckInPage;
