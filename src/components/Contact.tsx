import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Forms/Select";
import TextField from "./Forms/TextField";
import { Calendar } from "./ui/Calendar";
import { cn } from "~/lib/utils";
import { format } from "date-fns";
import { Button } from "./ui/Button";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import TextArea from "./Forms/TextArea";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();

  const { mutate: createSubmission, isLoading } =
    api.formSubmission.create.useMutation({
      onSuccess: (data) => {
        void router.push("/formConfirmation?i=" + data.id);
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const [formData, setFormData] = React.useState<{
    name: string;
    email: string;
    phone: string;
    date: Date | undefined;
    time: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    date: undefined,
    time: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const timeSlotsWeekDays = [
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
  const timeSlotsSaturdays = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, date, time, message } = formData;
    const errors = {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    };
    if (!name) {
      errors.name = "Por favor ingresa tu nombre";
    }
    if (!email) {
      errors.email = "Por favor ingresa tu correo electrónico";
    }
    if (!phone) {
      errors.phone = "Por favor ingresa tu teléfono";
    }
    if (!date) {
      errors.date = "Elige una fecha";
    }
    if (!time) {
      errors.time = "Elige una hora";
    }
    if (!message) {
      errors.message = "Por favor ingresa un mensaje";
    }
    setErrorMessage(errors);
    if (
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.date &&
      !errors.time &&
      !errors.message
    ) {
      createSubmission(formData);
    }
  };

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
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="flex flex-col gap-2 md:col-span-2">
          <h2 className="text-3xl font-semibold">Haz tu reservación</h2>
          <p className="text-sm font-light">
            Te proveeremos de la mejor consultoría dental.
          </p>
        </div>
        <TextField
          id="name"
          type="text"
          label="Nombre"
          isRequired
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          placeholder="Nombre"
          validationState={!!formData.name ? "valid" : "invalid"}
          errorMessage={errorMessage.name}
        />
        <TextField
          id="email"
          type="email"
          label="Correo electrónico"
          isRequired
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          placeholder="Correo electrónico"
          validationState={!!formData.email ? "valid" : "invalid"}
          errorMessage={errorMessage.email}
        />
        <TextField
          id="phone"
          type="tel"
          label="Teléfono"
          isRequired
          value={formData.phone}
          onChange={(value) =>
            setFormData({
              ...formData,
              phone: value.replace(/[^+\d]|(?!^)\+/g, ""),
            })
          }
          placeholder="Teléfono"
          validationState={!!formData.phone ? "valid" : "invalid"}
          errorMessage={errorMessage.phone}
          maxLength={13}
          minLength={10}
        />
        <div className="flex gap-2">
          <div className="relative flex w-full flex-col">
            <label htmlFor="calendar" className="sr-only">
              Fecha
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "relative z-10 border-0 bg-white p-2 text-left font-normal focus:outline-none focus:ring-2 focus:ring-sky-600",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  {formData.date ? (
                    format(formData.date, "dd/MM/yyyy")
                  ) : (
                    <span>Fecha</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) =>
                    setFormData({
                      ...formData,
                      date: date,
                    })
                  }
                  disabled={(date) =>
                    date < new Date() ||
                    date >
                      new Date(new Date().setDate(new Date().getDate() + 30)) ||
                    date.getDay() === 0
                  }
                  initialFocus
                  weekStartsOn={1}
                  locale={{
                    code: "es-MX",
                    localize: {
                      month: (m: number) => {
                        switch (m) {
                          case 0:
                            return "Enero";
                          case 1:
                            return "Febrero";
                          case 2:
                            return "Marzo";
                          case 3:
                            return "Abril";
                          case 4:
                            return "Mayo";
                          case 5:
                            return "Junio";
                          case 6:
                            return "Julio";
                          case 7:
                            return "Agosto";
                          case 8:
                            return "Septiembre";
                          case 9:
                            return "Octubre";
                          case 10:
                            return "Noviembre";
                          case 11:
                            return "Diciembre";
                        }
                      },
                      day: (d) => {
                        switch (d) {
                          case 0:
                            return "Dom";
                          case 1:
                            return "Lun";
                          case 2:
                            return "Mar";
                          case 3:
                            return "Mie";
                          case 4:
                            return "Jue";
                          case 5:
                            return "Vie";
                          case 6:
                            return "Sab";
                        }
                      },
                      ordinalNumber: (n: number) => n,
                      era: (e: number) => e,
                      quarter: (q: number) => q,
                      dayPeriod: (dp: number) => dp,
                    },
                    formatLong: {
                      date: () => "dd/MM/yyyy",
                      time: () => "",
                      dateTime: () => "",
                    },
                  }}
                />
              </PopoverContent>
            </Popover>
            {errorMessage.date && (
              <>
                <div className="absolute -bottom-1.5 ml-2 mt-1 rounded-b-md bg-rose-200 px-2 text-xs text-rose-700">
                  {errorMessage.date}
                </div>
                <div className="mb-2.5" />
              </>
            )}
          </div>
          <div className="relative flex w-full flex-col">
            <label htmlFor="time" className="sr-only">
              Hora
            </label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, time: value })
              }
            >
              <SelectTrigger
                className="relative z-10 w-full border-0 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
                disabled={
                  !formData.date || new Date(formData.date).getDay() === 0
                }
              >
                <SelectValue placeholder="Hora" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {new Date(formData.date!).getDay() === 6
                    ? timeSlotsSaturdays.map((timeSlot) => (
                        <SelectItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))
                    : timeSlotsWeekDays.map((timeSlot) => (
                        <SelectItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errorMessage.time && (
              <>
                <div className="absolute -bottom-1.5 ml-2 mt-1 rounded-b-md bg-rose-200 px-2 text-xs text-rose-700">
                  {errorMessage.time}
                </div>
                <div className="mb-2.5" />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <TextArea
            id="message"
            label="Mensaje"
            isRequired
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            placeholder="¿Cómo podemos ayudarte?"
            validationState={!!formData.message ? "valid" : "invalid"}
            errorMessage={errorMessage.message}
            rows={5}
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <button
            type="submit"
            className="max-w-fit rounded-md bg-[#213361] p-2 px-14 text-white"
            disabled={isLoading}
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
