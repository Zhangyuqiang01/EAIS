"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { navLinks, menuItem1, menuItem2 } from "../constants/constants";
import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id);
  };

 
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="w-full  z-10 bg-gray-200 fixed">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/EAIS.svg"
            alt="EAIS"
            width={128}
            height={18}
            className="object-contain"
          />
        </Link>

 
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins font-normal cursor-pointer text-[16px] text-black relative mx-4"
              onMouseEnter={() => handleMouseEnter(nav.id)} 
              onMouseLeave={handleMouseLeave} 
            >
              <span className="cursor-pointer hover:text-green-400">
                {nav.title}
              </span>

              {activeDropdown === nav.id && (
                <ul className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg">
                  {nav.id === "services" &&
                    menuItem1.map((item) => (
                      <li
                        key={item.title}
                        className="p-2 hover:shadow-lg"
                      >
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                  {nav.id === "resources" &&
                    menuItem2.map((item) => (
                      <li key={item.title} className="p-2 hover:bg-gray-100">
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

      
        <CustomButton
          title="Get a Demo"
          btnType="button"
          containerStyles="text-primary-green bg-white rounded-full min-w-[130px]"
        />
        
      </nav>
    </header>
  );
};

export default Navbar;
