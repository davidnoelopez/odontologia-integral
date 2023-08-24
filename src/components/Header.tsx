import React from "react";
import Navbar from "./Navbar";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdSchedule, MdOutlinePhoneInTalk } from "react-icons/md";

const Header = () => {
  return (
    <div id="header" className="w-full justify-center px-6 py-4">
      <div className="mx-auto my-4 hidden justify-center gap-8 md:flex">
        <div className="flex items-center">
          <FaMapMarkedAlt className="h-6 w-6 text-[#213361]" />
          <p className="ml-2 text-sm font-light text-gray-500">
            Río Pánuco 2155-A, Roma, Monterrey
          </p>
        </div>
        <div className="flex items-center">
          <MdSchedule className="h-6 w-6 text-[#213361]" />
          <p className="ml-2 text-sm font-light text-gray-500">
            Lun-Vie 9:00 - 19:00 | Sáb 10:00 - 16:00
          </p>
        </div>
        <div className="flex items-center">
          <MdOutlinePhoneInTalk className="h-6 w-6 text-[#213361]" />
          <p className="ml-2 text-sm font-light text-gray-500">+528110534579</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
