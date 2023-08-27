import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "#home", current: true },
  { name: "Servicios", href: "#services", current: false },
  { name: "Acerca De", href: "#about", current: false },
  { name: "Contacto", href: "#", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="px-6 pt-4 md:pt-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl rounded-full border border-gray-200 bg-gray-100 px-2 shadow-md md:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="relative inset-y-0 left-0 flex items-center pr-2 md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-500/50">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start md:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-5 w-auto"
                    src="/logo.svg"
                    alt="Odongologia Integral"
                    width={100}
                    height={21}
                    quality={100}
                  />
                </div>
                <div className="hidden w-full content-center md:block md:px-6 lg:ml-6 lg:px-8">
                  <div className="flex place-content-between gap-0">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-normal text-black hover:bg-gray-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <button
                  type="button"
                  className="relative flex items-center gap-2 rounded-full bg-[#213361] px-4 py-2 text-sm text-white hover:bg-[#314e98] focus:outline-none xs:px-4"
                >
                  <span className="block">Haz tu cita</span>
                  <CalendarDaysIcon className=" h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="relative hidden rounded-full bg-white p-1 text-[#213361]  hover:bg-gray-300 focus:outline-none md:block"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Enviar correo</span>
                  <EnvelopeIcon className="m-1 h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="absolute z-50 w-40 max-w-sm rounded-lg bg-white/80 backdrop-blur-md md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-400 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
