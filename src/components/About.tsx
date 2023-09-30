import Image from "next/image";
import Link from "next/link";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="block w-full bg-[url('/mobile-banner-left.png')] bg-cover pb-8 pt-20 sm:bg-[url('/services-banner.png')]"
    >
      <div className="inset-0 mt-10 grid h-auto w-full items-start justify-center bg-gradient-to-b from-white/80 to-white/50">
        <div className="mx-6 flex flex-col items-center justify-center gap-4 sm:mx-0">
          <div className="flex max-w-lg flex-col gap-2 rounded-md p-2 text-center">
            <h2 className="text-sm font-bold text-gray-600">
              ACERCA DE NOSOTROS
            </h2>
            <h1 className="text-4xl font-bold text-black">
              Dedicación que causa sonrisas
            </h1>
            <div className="flex justify-center">
              <MdOutlineHealthAndSafety className="h-10 w-10 text-[#1370B5]" />
            </div>
          </div>
          <div className="flex flex-col-reverse justify-center gap-6 px-4 sm:grid sm:grid-cols-2 md:px-12">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                className="max-h-96 w-auto"
                src="/portrait.png"
                width={486}
                height={676}
                alt="Dr. David López"
                quality={100}
              />
            </div>
            <div className="flex max-w-sm flex-col justify-center gap-2">
              <h2 className="text-center text-2xl font-bold text-black">
                Dr. David E. López
              </h2>
              <p className="text-md text-justify font-normal text-gray-600 sm:text-sm">
                Con más de 35 años de experiencia, el destacado doctor David
                Emeterio López se especializa en odontología y ofrece un enfoque
                integral para todo tipo de cuidado dental ya que cuenta con
                especialistas de cada área.
              </p>
              <p className="text-md text-justify font-normal text-gray-600 sm:text-sm">
                Su compromiso con la odontología basada en la última tecnología
                y evidencia asegura soluciones efectivas junto a su equipo.
              </p>
              <p className="text-md text-justify font-normal text-gray-600 sm:text-sm">
                Confía en la experiencia del Dr. López para preservar y realzar
                tu sonrisa en cada consulta.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full items-center justify-center">
          <p className="text-md flex gap-1 text-justify font-light text-gray-500 sm:text-sm">
            <span>No dudes en contactarnos para ayuda oportuna.</span>
            <Link
              href="#contact"
              className="text-[#1370B5] hover:text-[#314e98]"
            >
              Consulta aquí
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
