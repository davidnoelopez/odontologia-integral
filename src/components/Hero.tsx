import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative block w-full pt-24 md:pt-36">
      <div className="inset-0 -z-10 hidden sm:block">
        <Image
          className="w-full rounded-3xl"
          src="/banner-1.png"
          width={920}
          height={484}
          alt="Banner Odontologia Integral"
          quality={100}
        />
      </div>
      <div className="inset-0 -z-10 block h-[480px] overflow-hidden sm:hidden">
        <Image
          className="w-full rounded-3xl"
          src="/mobil-banner.png"
          width={640}
          height={1280}
          alt="Banner Odontologia Integral"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 grid h-auto w-full grid-cols-1 place-content-center bg-transparent pt-24 sm:grid-cols-2 md:pt-36">
        <div className="mx-6 flex flex-col items-center justify-center gap-4 sm:mx-0 sm:ml-8">
          <div className="flex max-w-sm flex-col gap-2 rounded-md p-2 backdrop-blur-sm">
            <h2 className="text-sm font-bold text-[#1370B5]">
              Bienvenido a nuestro consultorio digital
            </h2>
            <h1 className="text-4xl font-bold text-black">
              Nos importa tu bienestar bucal
            </h1>
            <p className="text-md font-light text-gray-500">
              Tenemos más de 35 años quitando excusas para sonreír, haciendo que
              cada momento se exprese sin malos entendidos
            </p>
            <div className="flex w-full items-center justify-between space-x-6 text-sm font-semibold">
              <button className="rounded-lg bg-[#1370B5] px-4 py-2 text-white shadow-lg hover:bg-[#2c5d82] sm:w-full">
                Acerca de nosotros
              </button>
              <button className="rounded-lg bg-white px-4 py-2 text-[#1370B5] shadow-lg hover:bg-slate-200 sm:w-full">
                Tratamientos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
