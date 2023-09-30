import Image from "next/image";
import Link from "next/link";
import { MdOutlineHealthAndSafety } from "react-icons/md";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Limpieza Dental",
    description:
      "Eliminación de placa dentobacteriana y sarro con ultrasonido, no causa daño al esmalte del diente, previniendo enfermedades de la encía y el mal aliento.",
    image: "/limpieza-dental.png",
  },
  {
    title: "Rellenos de Resina",
    description:
      "Eliminación de caries (enfermedad del diente) colocando materiales a base de resinas, dejando una pieza estéticamente  sana y funcional.",
    image: "/resina.png",
  },
  {
    title: "Endodoncia dental",
    description:
      " Eliminación de la pulpa dental (nervio) eliminando todo dolor y dejando la pieza dental funcionando.",
    image: "/endodoncia.png",
  },
  {
    title: "Poste Dental",
    description:
      "Soporte dental colocado en la parte interna del diente tratado con endodoncia, para fortalecer el tejido dental haciendo más funcional la pieza dental.",
    image: "/poste-dental.png",
  },
  {
    title: "Corona de Metal ó Porcelana",
    description:
      "Es una pieza de materiales resistentes hecha para cubrir el diente tratado con endodoncia y poste, dando función y estética al diente.",
    image: "/corona.png",
  },
  {
    title: "Corona Zirconia",
    description:
      "Pieza altamente estética, diseñada para cubrir dientes con tratamiento de endodoncia, hecha con materiales de dureza comparable al diente natural.",
    image: "/corona.png",
  },
];

const ServiceCard = ({ title, description, image }: Service) => {
  return (
    <div className="flex max-w-xs flex-col items-center justify-center gap-2 rounded-lg p-2 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          className="rounded-full shadow-md"
          src={image}
          width={100}
          height={100}
          alt={title}
          quality={100}
        />
        <h3 className="text-center text-2xl font-bold text-black">{title}</h3>
      </div>
      <p className="text-md text-center font-normal text-gray-600 sm:text-sm">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="block w-full bg-[url('/mobile-banner-left.png')] bg-cover pt-20 sm:bg-[url('/services-banner.png')]"
    >
      <div className="inset-0 mt-10 grid h-auto w-full items-start justify-center bg-gradient-to-b from-white/80 to-white/50">
        <div className="mx-6 flex flex-col items-center justify-center gap-4 sm:mx-0">
          <div className="flex max-w-lg flex-col gap-2 rounded-md p-2 text-center">
            <h2 className="text-sm font-bold text-gray-600">
              NUESTROS SERVICIOS
            </h2>
            <h1 className="text-4xl font-bold text-black">
              Cuidamos de toda tu familia
            </h1>
            <div className="flex justify-center">
              <MdOutlineHealthAndSafety className="h-10 w-10 text-[#1370B5]" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 justify-center gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:px-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex w-full items-center justify-center">
          <Link
            className="w-auto rounded-lg bg-[#213361] px-4 py-2 text-white shadow-lg hover:bg-[#314e98]"
            href={"#contact"}
          >
            Reserva tu espacio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
