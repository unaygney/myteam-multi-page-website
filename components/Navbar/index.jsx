"use client";
import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Logo from "./logo.svg";
import Link from "next/link";
import BgImage from "./bg-image.svg";
import { NAV_LINKS } from "./constant";
import clsx from "clsx";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <header className="bg-[#014E56]  ">
      <div className="container mx-auto flex justify-between md:justify-start items-center px-6 md:px-0 lg:py-[77px] py-12">
        <Link href={"/"}>
          <Logo />
        </Link>
        {/* nav for desktop */}
        <nav className=" ml-12 lg:ml-20 gap-10 hidden md:flex md:items-center text-white">
          {NAV_LINKS.map((link) => (
            <Link
              className="text-lg font-semibold leading-7 "
              key={link.id}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <Link
          className=" items-center justify-center w-[153px] h-[48px] rounded-3xl text-white border-white border-2 ml-auto hidden md:inline-flex "
          href={"contact"}
        >
          Contact Us
        </Link>

        <button className="md:hidden">
          <Hamburger
            size={20}
            color="white"
            toggled={isOpen}
            toggle={setOpen}
          />
        </button>
      </div>

      {/* Hamburger Menu */}
      <div
        className={clsx(
          "absolute top-0  right-0 bottom-0 flex transition-all overflow-y-hidden md:hidden z-10   ",
          {
            "left-0 flex ": isOpen,
          },
          { "left-[100%]   ": !isOpen }
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className="flex-1 bg-black opacity-50 "
        >
          overlay
        </div>
        <div className="w-[70%] bg-[#2C6269] text-white relative">
          <div className="flex flex-col px-6 py-14">
            <button className="ml-auto ">
              <Hamburger
                size={20}
                color="white"
                toggled={isOpen}
                toggle={setOpen}
              />
            </button>
            <nav className="px-6 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  className="text-lg font-semibold leading-7 "
                  key={link.id}
                  href={link.path}
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                className="inline-flex items-center justify-center w-[159px] h-[48px] rounded-3xl text-white border-white border-2 mt-3"
                href={"contact"}
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="absolute right-0 bottom-0">
            <BgImage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
