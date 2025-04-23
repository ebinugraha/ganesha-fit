import Image from 'next/image';

const MarketingPage = () => {
  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 p-12">
          <div>
            <h1 className="text-center font-semibold text-primary mb-2 text-3xl">
              Bangun Versi Terbaik Dirimu Bersama Ganesha Fit
            </h1>
            <h1 className="text-center font-bold text-slate-700">
              Mulai perjalanan sehatmu hari ini bersama komunitas yang suportif
              dan pelatih berpengalaman.
            </h1>
          </div>
        </div>
      </section>

      <section className="relative pb-25">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 px-16">
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 mb-9">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-slate-900 max-lg:text-center">
                    Lorem, Ipsum
                  </p>
                  <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam ea fugit cum doloremque placeat voluptatem
                    officiis eaque.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src={'/firstbento.jpg'}
                      alt="Phone screen"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-lg lg:rounded-l-[2rem]" />
            </div>

            {/* second bento */}

            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-slate-900 max-lg:text-center">
                    Lorem, Ipsum
                  </p>
                  <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam ea fugit cum doloremque placeat voluptatem
                    officiis eaque.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs rounded-xl m-4"
                    src={'/fourthbento.jpg'}
                    alt="Bento box "
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-lg max-lg:rounded-t-[2rem]" />
            </div>

            {/* third bento */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px bg-white rounded-lg " />
              <div className="relative overflow-hidden flex flex-col  h-full rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-slate-900 max-lg:text-center">
                    Lorem, Ipsum
                  </p>
                  <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam ea fugit cum doloremque placeat voluptatem
                    officiis eaque.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs rounded-xl m-4"
                    src={'/secondbento.jpg'}
                    alt="Bento box "
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-lg" />
            </div>

            {/* fourth bento */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 mb-9">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-slate-900 max-lg:text-center">
                    Lorem, Ipsum
                  </p>
                  <p className="mt-2 max-w-lg text-sm/7 text-gray-600 max-lg:text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam ea fugit cum doloremque placeat voluptatem
                    officiis eaque.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <Image
                    className="size-full object-cover object-top rounded-2xl"
                    src={'/thirdbento.jpg'}
                    alt="Phone screen"
                    fill
                  />
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-lg lg:rounded-r-[2rem]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingPage;
