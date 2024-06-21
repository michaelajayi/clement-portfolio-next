"use client";
import React, { useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

import Link from "next/link";

import fastdom from "fastdom";

const SelectedWork = () => {
  const selectedWorks = [
    {
      number: "01",
      title: "Motopay",
      link: "https://motopayng.com",
      videoSrc:
        "https://res.cloudinary.com/do6zhtnvt/video/upload/v1718715641/Screen_Recording_2024-06-18_at_13.40.17_buyizo.mov",
    },
    {
      number: "02",
      title: "Don Álvaro Wine",
      link: "https://dwellar.com",
      videoSrc:
        "https://res.cloudinary.com/do6zhtnvt/video/upload/v1716196394/Don_Alvaro_Wine_gwcuuk.mov",
    },
    {
      number: "03",
      title: "Leonardo",
      link: "https://leonardobysujimoto.com",
      videoSrc:
        "https://res.cloudinary.com/do6zhtnvt/video/upload/v1716199529/Leonadooo_pn4rdj.mov",
    },
    {
      number: "04",
      title: "BridgingSpace",
      link: "https://bridgingspace.co",
      videoSrc:
        "https://res.cloudinary.com/do6zhtnvt/video/upload/v1716196343/bridgingspace_i8y2h1.mov",
    },
  ];

  const [showMobileVideo, setShowMobileVideo] = useState(false);
  const [activeWork, setActiveWork] = useState<null | any>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  // const videoSrc = "/videos/designer.mp4";
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
      className='w-full h-auto bg-black flex justify-center items-center py-10 lg:py-[10rem]'
      id='selectedWorks'
    >
      <div className='w-full h-auto px-5 lg:px-[8rem] flex flex-col space-y-10 lg:space-y-[12rem]'>
        <p className='font-staatliches text-white text-[54px] lg:text-[165px] leading-[144px]'>
          Selected Works
        </p>
        <div className='flex flex-col space-y-10'>
          {selectedWorks.map((work, index) => (
            <div
              className='group flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between border-b-[2px] border-[#D9D9D9] border-opacity-[.70] relative py-5'
              key={index}
              onMouseEnter={() => {
                if (!("ontouchstart" in window) && window.innerWidth > 768) {
                  handleHover(index, true);
                }
              }}
              onMouseLeave={() => {
                if (!("ontouchstart" in window) && window.innerWidth > 768) {
                  handleHover(index, false);
                }
              }}
              ref={itemsRef[index].divRef}
            >
              <div className='flex space-x-5 items-start cursor-pointer'>
                <p className='font-staatliches text-white text-opacity-[.60] group-hover:text-opacity-[1] text-[15.125px] lg:text-[40px] leading-[115%]'>
                  {work.number}
                </p>

                {isMobile ? (
                  <div
                    className='font-staatliches text-white text-opacity-[.60] group-hover:text-opacity-[1] text-[48.399px] lg:text-[128px] leading-normal'
                    onClick={() => {
                      setActiveWork(work);
                      setShowMobileVideo(!showMobileVideo);
                    }}
                  >
                    {work.title}
                  </div>
                ) : (
                  <Link
                    href={work.link}
                    className='font-staatliches text-white text-opacity-[.60] group-hover:text-opacity-[1] text-[48.399px] lg:text-[128px] leading-normal'
                    target='_blank'
                  >
                    {work.title}
                  </Link>
                )}
              </div>

              <div
                className='video-container absolute pointer-events-none right-0 top-0 w-[401px] h-[301px] rounded-[32px] bg-[#C4C4C4] flex justify-center items-center transform rotate-[-18.684deg] z-50 shadow-lg opacity-0'
                ref={itemsRef[index].videoContainerRef}
              >
                <video
                  ref={itemsRef[index].videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover rounded-[32px]'
                >
                  <source src={work.videoSrc} type='video/mp4' />
                </video>
              </div>

              {/* video for mobile only */}
              {showMobileVideo && activeWork?.title === work.title && (
                <Link
                  href={work.link}
                  className='pointer-events-none w-fit h-fit rounded-[16px] bg-[#C4C4C4] flex justify-center items-center z-50 shadow-lg lg:hidden transition-all duration-500'
                  target='_blank'
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover rounded-[16px] transition-all duration-500'
                  >
                    <source src={activeWork.videoSrc} type='video/mp4' />
                  </video>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
