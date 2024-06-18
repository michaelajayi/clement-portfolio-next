"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menuCloseIcon from "../../../public/icons/close-icon.svg";
import menuShowIcon from "../../../public/icons/side.svg";
import MobileMenu from "./MobileMenu";

import { Link as ReactScrollLink } from "react-scroll";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className='min-h-auto min-w-screen w-screen flex justify-center items-center py-0 lg:py-0'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center lg:px-[8rem] py-5 space-y-0 md:space-y-0 px-5'>
        <Link href='/'>
          {showMobileMenu ? (
            <Image
              src={menuCloseIcon}
              alt='side'
              priority
              className='cursor-pointer w-[28px] lg:w-auto'
              width={80}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          ) : (
            <Image
              src={menuShowIcon}
              alt='side'
              priority
              className='cursor-pointer w-[28px] lg:w-auto'
              width={80}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          )}
        </Link>
        {/* buttons */}

        {showMobileMenu ? (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            toggleMobileMenu={() => setShowMobileMenu(false)}
          />
        ) : (
          <DesktopMenu />
        )}
      </div>
    </div>
  );
};

export default Navbar;
