"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import side from "../../../public/icons/side.svg";

import { Link as ReactScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="min-h-auto min-w-screen w-screen flex justify-center items-center py-5 lg:py-0">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center lg:px-[8rem] py-5 space-y-5 md:space-y-0 px-5">
        <Link href="/">
          <Image
            src={side}
            alt="side"
            priority
            className="cursor-pointer w-[28px] lg:w-auto"
            width={80}
          />
        </Link>
        {/* buttons */}
        <div className="justify-between items-center space-x-5 hidden lg:flex">
          <ReactScrollLink to="selectedWorks" smooth={true} duration={500}>
            <p className="font-roboto text-white text-[24px] font-medium rounded-[32px] border border-white px-12 py-2 border-opacity-[.8] cursor-pointer uppercase">
              work
            </p>
          </ReactScrollLink>
          <ReactScrollLink to="contactMe" smooth={true} duration={500}>
            <p className="font-roboto text-white text-[24px] font-medium rounded-[32px] border border-white px-12 py-2 border-opacity-[.8] cursor-pointer uppercase">
              contact
            </p>
          </ReactScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
