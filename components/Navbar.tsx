"use client";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { navLinks, menuItem1, menuItem2 } from "../constants/constants";
import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverNav, setHoverNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (id: string) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full z-10 bg-gray-200 fixed">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
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
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="font-poppins font-normal cursor-pointer text-[16px] text-black relative mx-4"
              onMouseEnter={() => (index < 2 ? handleMouseEnter(nav.id) : null)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-EAIS-green flex items-center">
                {nav.title}
                {(nav.id === "services" || nav.id === "resources") && (
                  <span
                    className={`ml-1 transition-transform duration-300 ease-in-out inline-block ${hoverNav === nav.id ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <Image
                      src={`/Arrowdown.svg`}
                      alt="arrow-down"
                      width={16}
                      height={16}
                    />
                  </span>
                )}
              </span>

              {activeDropdown === nav.id && index < 2 && (
                <ul
                  className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg grid grid-cols-2 gap-2 left-1/2 -translate-x-1/2 whitespace-nowrap w-96"
                  onMouseEnter={() => handleMouseEnter(nav.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {nav.id === "services" &&
                    menuItem1.map((item) => (
                      <li key={item.title} className="p-2 hover:shadow-lg text-sm">
                        <Link href={item.href} className="block py-2">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  {nav.id === "resources" &&
                    menuItem2.map((item) => (
                      <li key={item.title} className="p-2 hover:bg-gray-100 text-sm">
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="sm:hidden text-black font-poppins"
        >
          Menu
        </button>

        {menuOpen && (
          <ul className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg flex flex-col w-72 left-1/2 -translate-x-1/2 whitespace-nowrap">
            {navLinks.map((nav) => (
              <li key={nav.id} className="p-2 hover:shadow-lg text-sm">
                <Link href={`/${nav.id}`} className="block py-2">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <CustomButton
          title="Get a Demo"
          btnType="button"
          containerStyles="text-EAIS-green bg-white rounded-full min-w-[130px] hidden sm:block"
        />
      </nav>
    </header>
  );
};

export default Navbar;
