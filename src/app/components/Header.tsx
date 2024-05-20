"use client";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import asterisks from "../../../public/icons/asterisks.svg";
import clementMendie from "../../../public/images/clement-mendie.svg";

const Header = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      const imageElement = image as HTMLImageElement;

      imageElement.addEventListener("mousemove", (e) => {
        gsap.to(imageElement, {
          x: e.clientX / 50,
          y: e.clientY / 50,
          filter: "grayscale(0%)",
          duration: 0.5,
          ease: "power4.out",
        });
      });

      imageElement.addEventListener("mouseleave", () => {
        gsap.to(imageElement, {
          x: 0,
          y: 0,
          filter: "grayscale(100%)",
          duration: 0.5,
          ease: "power4.out",
        });
      });
    }
  }, []);

  const portfolioLinks = [
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/clement-mendie/",
    },
    {
      title: "Email",
      link: "mailto:clement@gmail.com",
    },
    {
      title: "Behance",
      link: "https://www.behance.net/clementmendie",
    },
  ];

  return (
    <div className="w-full relative flex flex-col-reverse space-y-5 lg:space-y-0">
      <Image
        src={asterisks}
        priority
        alt="asterisks"
        className="absolute transform top-0 lg:top-5 right-0 animate-slowSpin hover:animate-halt cursor-pointer w-[153px] h-[153px] lg:w-auto lg:h-auto"
      />

      <div className="w-full lg:w-[30%] h-auto lg:h-[35%] lg:absolute bottom-0 right-0 flex flex-col space-y-5 items-end lg:items-start px-5">
        <div className="flex space-x-3 items-center w-full justify-end lg:justify-start pr-10 lg:pr-0">
          <div className="h-[1.033px] w-[33.046px] bg-white"></div>
          <p className="font-roboto text-[16px] lg:text-[19.963px] text-white leading-normal">
            Let&apos;s talk
          </p>
        </div>
        <div className="flex flex-col space-y-5 justify-center pl-3">
          {portfolioLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="font-roboto text-white text-[28.387px] lg:text-[40.185px] lg:leading-[40.185px] leading-[28.387px] uppercase hover:leading-[55px] hover:text-[55px] underline lg:no-underline hover:underline transition-all"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[18%] flex justify-center items-center"></div>

      <div className="w-full flex justify-start items-start pt-0 lg:pt-20 pb-0 lg:pb-10 space-x-0 lg:space-x-20 px-5 lg:px-[8rem]">
        <Image
          ref={imageRef}
          src={clementMendie}
          alt="clement mendie"
          priority
          className="cursor-circle hidden lg:block"
          style={{ filter: "grayscale(100%)" }}
        />
        <p className="font-staatliches text-white text-[64px] lg:text-[148px] lg:w-1/3 lg:leading-[148px] leading-[60px] w-[65%]">
          I&apos;m Clement Mendie
        </p>
      </div>
    </div>
  );
};

export default Header;
