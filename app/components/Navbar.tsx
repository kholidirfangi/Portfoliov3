"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const list = [
    {
      nav: "About",
      href: "#about",
    },
    {
      nav: "Services",
      href: "#services",
    },
    {
      nav: "Projects",
      href: "#projects",
    },
    {
      nav: "Blog",
      href: "#blog",
    },
    {
      nav: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="relative">
      <div className="flex flex-col md:flex-row bg-blue-400 w-full md:w-auto md:rounded-full py-5 md:py-3 fixed top-0 md:top-5 left-1/2 -translate-x-1/2 shadow-md shadow-blue-200 px-5 z-10">
        <div className="flex justify-between items-center">
          <Image
            src="/logoku.png"
            width={35}
            height={35}
            alt="logo"
            className="md:hidden"
          />
          {isOpen ? (
            <X onClick={handleOpenMenu} className="md:hidden text-white" />
          ) : (
            <Menu onClick={handleOpenMenu} className="md:hidden text-white" />
          )}
        </div>

        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-10 justify-start items-center px-5`}
        >
          <Image
            src="/logoku.png"
            width={35}
            height={35}
            alt="logo"
            className="hidden md:block"
          />
          {list.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-white border-b-transparent border-b-2 hover:border-b-white transition-colors duration-300"
            >
              {item.nav}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
