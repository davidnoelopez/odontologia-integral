import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdSchedule } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Forms/Select";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
    message: "",
  });

  let timeSlotsWeekDays = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ];
  let timeSlotsSaturdays = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
  ];

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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value.replace(/\D/, ""),
              })
            }
            maxLength={13}
            minLength={10}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="sr-only">
            Tratamiento
          </label>
          <input
            id="subject"
            type="text"
            className="rounded-md bg-white p-2"
            placeholder="Tratamiento"
            value={formData.treatment}
            onChange={(e) =>
              setFormData({ ...formData, treatment: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="sr-only">
            Fecha
          </label>
          <input
            id="date"
            type="date"
            className="rounded-md bg-white p-2"
            placeholder="Fecha"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, time: "", date: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="sr-only">
            Hora
          </label>
          <Select>
            <SelectTrigger
              className="w-full bg-white"
              disabled={
                !formData.date || new Date(formData.date).getDay() === 6
              }
            >
              <SelectValue placeholder="Hora" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {new Date(formData.date!).getDay() === 5
                ? timeSlotsSaturdays.map((timeSlot) => (
                    <SelectItem
                      key={timeSlot}
                      value={timeSlot}
                      disabled={timeSlot === "10:00"}
                    >
                      {timeSlot}
                    </SelectItem>
                  ))
                : timeSlotsWeekDays.map((timeSlot) => (
                    <SelectItem
                      key={timeSlot}
                      value={timeSlot}
                      disabled={timeSlot === "10:00"}
                    >
                      {timeSlot}
                    </SelectItem>
                  ))}
            </SelectContent>
          </Select>
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
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
