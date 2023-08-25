import React from "react";
import Navbar from "./Navbar";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdSchedule, MdOutlinePhoneInTalk } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-40 w-full justify-center pb-6">
      <div className="mx-auto mb-3 hidden justify-center gap-8 bg-white/80 py-2 backdrop-blur-xl md:flex">
        <div className="flex items-center">
          <FaMapMarkedAlt className="h-6 w-6 text-[#213361]" />
          <Link
            className="ml-2 text-sm font-light text-[#1370B5]"
            href="https://goo.gl/maps/UiwWhaeBfo5ntx8u7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Río Pánuco 2155-A, Roma, Monterrey
          </Link>
        </div>
        <div className="flex items-center">
          <MdSchedule className="h-6 w-6 text-[#213361]" />
          <p className="ml-2 text-sm font-light text-[#1370B5]">
            Lun-Vie 9:00 - 19:00 | Sáb 10:00 - 16:00
          </p>
        </div>
        <div className="flex items-center">
          <MdOutlinePhoneInTalk className="h-6 w-6 text-[#213361]" />
          <Link
            className="ml-2 text-sm font-light text-[#1370B5]"
            href="tel:+528110534579"
          >
            +528110534579
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
