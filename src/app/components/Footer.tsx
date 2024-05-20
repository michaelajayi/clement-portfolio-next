import Image from "next/image";
import React from "react";
import cursorPointer from "../../../public/icons/cursor-pointer.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "E-mail",
      link: "clement@gmail.com",
    },
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/clement-stephen",
    },
    {
      title: "Behance",
      link: "https://behance.com/clement-stephen",
    },
  ];
  return (
    <div
      className='w-screen overflow-x-hidden flex justify-center items-center bg-black py-10 lg:py-20'
      id='contactMe'
    >
      <div className='w-full h-auto px-5 lg:px-[8rem] flex flex-col space-y-10 lg:space-y-20'>
        <p className='font-staatliches text-white text-[54px] lg:text-[165px] leading-[145px] uppercase'>
          How To Reach Me
        </p>
        <div className='flex flex-col lg:flex-row lg:space-x-[10rem] lg:items-center relative space-y-8 lg:space-y-0'>
          <p className='font-roboto text-white text-opacity-[.70] text-[16px] lg:text-[24px] leading-[155%]'>
            Let&apos;s work together
          </p>
          <div className='flex space-x-8 lg:space-x-20'>
            {footerLinks.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className='font-roboto text-[21.997px] lg:text-[40.185px] leading-[101.602%] uppercase text-white hover:scale-[1.3]  transition-all duration-200'
              >
                {link.title}
              </a>
            ))}
          </div>
          <Image
            src={cursorPointer}
            alt='cursor pointer'
            className='absolute top-10 lg:top-0 left-0 lg:right-[10rem] h-[42.02px] lg:h-fit'
          />
        </div>

        <div className='w-full h-1px border border-white border-opacity-[.70]'></div>

        <div className='w-full flex justify-between items-center'>
          <p className='font-roboto text-white text-opacity-[.70] text-[15.14px] lg:text-[18px] leading-normal'>
            &copy; Clement Mendie. All rights reserved
          </p>
          <p className='font-roboto text-white text-opacity-[.70] text-[15.14px] lg:text-[18px] leading-normal'>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
