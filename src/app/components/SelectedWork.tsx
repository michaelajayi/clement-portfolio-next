"use client";
import React, { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";

import fastdom from "fastdom";

const SelectedWork = () => {
  const selectedWorks = [
    {
      number: "01",
      title: "Motopay",
      link: "https://motopayng.com",
    },
    {
      number: "02",
      title: "Don Álvaro Wine",
      link: "https://dwellar.com",
    },
    {
      number: "03",
      title: "Leonardo",
      link: "https://leonardobysujimoto.com",
    },
    {
      number: "04",
      title: "BridgingSpace",
      link: "https://bridgingspace.co",
    },
  ];

  const videoSrc = "/videos/designer.mp4";
  const [itemsRef, setItemsRef] = useState<
    {
      divRef: React.RefObject<HTMLDivElement>;
      videoContainerRef: React.RefObject<HTMLDivElement>;
      videoRef: React.RefObject<HTMLVideoElement>;
    }[]
  >(() =>
    Array(selectedWorks.length)
      .fill(null)
      .map(() => ({
        divRef: React.createRef(),
        videoContainerRef: React.createRef(),
        videoRef: React.createRef(),
      }))
  );

  const handleHover = (index: number, isHovered: boolean) => {
    fastdom.mutate(() => {
      const itemRef = itemsRef[index];
      const videoContainerRef = itemRef?.videoContainerRef.current;
      const videoRef = itemRef?.videoRef.current;

      const tl = gsap.timeline({ paused: true });

      if (isHovered && videoContainerRef && videoRef) {
        videoRef.play();
        tl.to(videoContainerRef, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        })
          .to(videoRef, {
            autoAlpha: 1,
            duration: 0.1,
            ease: "power2.out",
          })
          .play();
      } else if (videoContainerRef && videoRef) {
        requestAnimationFrame(() => videoRef.pause);
        tl.to(videoRef, { autoAlpha: 0, duration: 0.1, ease: "power2.in" })
          .to(videoContainerRef, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.in",
          })
          .play();
      }
    });
  };

  return (
    <div
      className="w-full h-auto bg-black flex justify-center items-center py-[10rem]"
      id="selectedWorks"
    >
      <div className="w-full h-auto px-[8rem] flex flex-col space-y-[12rem]">
        <p className="font-staatliches text-white text-[165px] leading-[144px]">
          Selected Works
        </p>
        <div className="flex flex-col space-y-20">
          {selectedWorks.map((work, index) => (
            <div
              className="group flex justify-between border-b-[2px] border-[#D9D9D9] border-opacity-[.70] relative"
              key={index}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              ref={itemsRef[index].divRef}
            >
              <div className="flex space-x-5 items-start cursor-pointer">
                <p className="font-staatliches text-white text-opacity-[.60] group-hover:text-opacity-[1] text-[40px] leading-[115%]">
                  {work.number}
                </p>
                <Link
                  href={work.link}
                  className="font-staatliches text-white text-opacity-[.60] group-hover:text-opacity-[1] text-[128px] leading-normal"
                  target="_blank"
                >
                  {work.title}
                </Link>
              </div>

              <div
                className="video-container absolute pointer-events-none bg-red-00 right-0 top-0 w-[301px] h-[301px] rounded-[32px] bg-[#C4C4C4] flex justify-center items-center transform rotate-[-18.684deg] z-50 shadow-lg opacity-0"
                ref={itemsRef[index].videoContainerRef}
              >
                <video
                  ref={itemsRef[index].videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[32px]"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
