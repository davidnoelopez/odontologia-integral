import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdSchedule } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="relative py-8">
      <div className="absolute top-0 -z-50 h-1/2 w-full bg-[#2A7EBC]" />
      <div className="absolute top-1/2 -z-50 h-1/2 w-full bg-[#213361]" />
      <div
        id="contact-header"
        className="mx-auto flex max-w-sm flex-col gap-2 rounded-md p-2 pb-8 text-start text-white md:mx-24 md:max-w-lg lg:mx-32"
      >
        <h2 className="my-2 text-sm font-normal">¿Necesitas una consulta?</h2>
        <h1 className="my-2 text-4xl font-semibold">
          Reserva tu espacio, nosotros nos encargamos del resto
        </h1>
        <div className="">
          <p className="my-2 flex flex-col gap-1 text-sm">
            <span>Obtén tu cotización o llama:</span>
            <Link className="w-fit" href="tel:+528110534579">
              <span className="flex items-center gap-2 text-2xl font-bold">
                <MdOutlinePhoneInTalk className="h-6 w-6" />
                +52 811-053-4579
              </span>
            </Link>
          </p>
        </div>
      </div>
      <form
        id="contact-form"
        className="mx-12 grid max-w-2xl grid-cols-1 items-center gap-4 bg-gray-100 p-4 py-8 text-start text-black md:mx-auto md:grid-cols-2"
      >
        <div className="flex flex-col gap-2 md:col-span-2">
          <h2 className="text-3xl font-semibold">Haz tu reservación</h2>
          <p className="text-sm font-light">
            Te proveeremos de la mejor consultoría dental.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="rounded-md bg-white p-2"
            placeholder="Nombre"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            className="rounded-md bg-white p-2"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="sr-only">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            className="rounded-md bg-white p-2"
            placeholder="Teléfono"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="sr-only">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            className="rounded-md bg-white p-2"
            placeholder="Asunto"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <textarea
            id="message"
            className="resize-none rounded-md bg-white p-2"
            placeholder="Mensaje"
            rows={5}
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <button
            type="submit"
            className="max-w-fit rounded-md bg-[#213361] p-2 px-14 text-white"
          >
            Enviar
          </button>
        </div>
      </form>

      <div
        id="contact-info"
        className="text mx-12 grid max-w-2xl grid-cols-1 items-center gap-4 p-4 py-8 text-white sm:grid-cols-2 md:mx-auto"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            className="h-auto w-32"
            src="/logo-white.png"
            alt="Odontología Integral"
            width={400}
            height={86}
          />
          <div className="my-2 flex w-full gap-1">
            <div className="h-0.5 w-0.5 bg-white" />
            <div className="h-0.5 w-full bg-white" />
            <div className="h-0.5 w-0.5 bg-white" />
          </div>
          <p className="text-sm font-light">
            Hemos extraído más de 14mil muelas, hecho más de 8mil limpiezas
            dentales y tratado con cientos de pacientes que se quedan contentos
            y respaldan nuestro trabajo.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="flex h-9 w-full items-center justify-center">
            <span className="text-md font-light">Contacto</span>
          </p>
          <div className="my-2 flex w-full gap-1">
            <div className="h-0.5 w-0.5 bg-white" />
            <div className="h-0.5 w-full bg-white" />
            <div className="h-0.5 w-0.5 bg-white" />
          </div>
          <div className="flex content-start">
            <FaMapMarkedAlt className="h-6 w-6 text-white" />
            <Link
              className="ml-2 text-sm font-light text-white"
              href="https://goo.gl/maps/UiwWhaeBfo5ntx8u7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Río Pánuco 2155-A, Roma, Monterrey
            </Link>
          </div>
          <div className="flex items-center">
            <MdOutlinePhoneInTalk className="h-6 w-6 text-white" />
            <Link
              className="ml-2 text-sm font-light text-white"
              href="tel:+528110534579"
            >
              +528110534579
            </Link>
          </div>
          <Link
            href={`mailto:citas@odontologiaintegral.info`}
            target="_blank"
            className="flex items-center"
          >
            <EnvelopeIcon className="h-6 w-6 text-white" />
            <p className="ml-2 text-sm font-light text-white">
              citas@odontologiaintegral.info
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
