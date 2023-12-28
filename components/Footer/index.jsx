import Link from "next/link";
import React from "react";
import Logo from "./logo.svg";
import SocialLink from "./social-links.svg";

function Footer() {
  return (
    <footer className="bg-[#002529] mt-auto  ">
      <div className="container mx-auto px-6 py-[66px] md:px-0 text-white ">
        <div className="flex flex-col gap-6  items-center md:items-start md:flex-row md:justify-between lg:justify-start lg:gap-[125px]  ">
          <div className="flex flex-col gap-6 items-center  ">
            <Link className="" href={"/"}>
              <Logo />
            </Link>
            <div className="flex gap-6 ">
              <Link className="text-[15px] font-semibold leading-6" href={"/"}>
                home
              </Link>
              <Link
                className="text-[15px] font-semibold leading-6"
                href={"about"}
              >
                about
              </Link>
            </div>

            <div className="hidden md:block md:mt-[33px] lg:hidden">
              <SocialLink />
            </div>
          </div>

          <div className="md:flex md:flex-col ">
            <address className="text-[15px] text-white leading-6 font-semibold text-opacity-60 text-center md:text-end lg:text-start">
              987 Hillcrest Lane <br />
              Irvine, CA <br />
              California 92714 <br />
              Call Us : 949-833-7432 <br />
            </address>
            <p className="text-[15px] text-white leading-6 font-semibold text-opacity-60 hidden md:block mt-[33px] lg:hidden">
              Copyright 2020. All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center mt-4 md:hidden lg:ml-auto lg:flex lg:items-end lg:justify-between  lg:mt-0  lg:gap-[50px] ">
            <SocialLink />
            <p className="text-[15px] text-white leading-6 font-semibold text-opacity-60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
