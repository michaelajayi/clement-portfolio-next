import Image from "next/image";
import React, { useEffect, useLayoutEffect } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import menuCloseIcon from "../../../public/icons/close-icon.svg";

interface MobileMenuProps {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenu = ({ showMobileMenu, toggleMobileMenu }: MobileMenuProps) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [showMobileMenu]);

  const mobileMenu = [
    {
      title: "About",
      id: "aboutMe",
    },
    {
      title: "Work",
      id: "selectedWorks",
    },
    {
      title: "Contact",
      id: "contactMe",
    },
  ];

  const onTogggleCloseButton = () => {
    toggleMobileMenu();
  };

  return (
    <div
      className={`fixed top-0 left-0 transition-all duration-300 w-screen h-screen overflow-x-hidden overflow-y-hidden bg-black ${
        showMobileMenu ? "opacity-100 z-50" : "opacity-0 -z-10"
      }`}
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full h-full absolute top-0 left-0 px-5 py-5'>
          <Image
            src={menuCloseIcon}
            alt='side'
            priority
            className='cursor-pointer w-[28px] lg:w-auto pt-[5rem]'
            width={80}
            onClick={onTogggleCloseButton}
          />
        </div>
        <div className='flex flex-col space-y-10'>
          {mobileMenu.map((menu, index) => (
            <ReactScrollLink
              to={menu.id}
              smooth={true}
              duration={500}
              key={index}
              className='font-staatliches text-white text-[96px] leading-[92.04px] cursor-pointer text-center z-50'
              onClick={onTogggleCloseButton}
            >
              {menu.title}
            </ReactScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
