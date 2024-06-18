"use client";

import Image from "next/image";
import rightArrow from "../../../public/icons/right-arrow.svg";
import motopay from "../../../public/images/motopay-logo.svg";
import sujimoto from '../../../public/icons/sujimoto.png';
import bridgingSpace from '../../../public/icons/bridging-space.svg';

const Experience = () => {
  const experience = [
    {
      title: "Product Lead",
      company: "Motopay",
      period: "2023 - Present",
      logo: motopay,
    },
    {
      title: "Product Lead",
      company: "Sujimoto Group",
      period: "2023 - Present",
      logo: sujimoto,
    },
    {
      title: "Chief Product Officer",
      company: "Bridingspace",
      period: "2022 - Present",
      logo: bridgingSpace,
    },
  ];

  return (
    <div className='w-full h-auto bg-black flex flex-col lg:flex-row justify-center items-start lg:items-center py-10 lg:py-[10rem] space-y-10'>
      <div className='w-full h-auto px-5 lg:px-[8rem] flex flex-col space-y-5 lg:space-y-[12rem] relative'>
        <p className='font-staatliches text-white text-[54px] lg:text-[165px] leading-[144px]'>
          Experience
        </p>
        <div className='flex flex-col space-y-10 lg:space-y-20 w-full lg:w-[80%]'>
          {experience.map((exp, index) => (
            <div
              className='flex justify-between items-center py-5 border border-white border-opacity-[.70] border-b-1 border-r-0 border-l-0 border-t-0 group cursor-pointer'
              key={index}
            >
              <div className='flex flex-col space-y-0'>
                <p className='font-roboto text-[15.138px] lg:text-[24px] leading-[155%] text-white text-opacity-[.70] group-hover:text-opacity-100'>
                  {exp.period}
                </p>
                <p className='font-staatliches text-white text-opacity-[.70] text-[25.229px] lg:text-[40px] uppercase leading-[115%] group-hover:text-opacity-100'>
                  {exp.title}
                </p>
              </div>
              <Image
                src={exp.logo}
                alt='company logo'
                height={50}
                width={100}
                className='hidden lg:group-hover:block'
              />
              <p className='font-roboto text-white text-opacity-[.70] text-[15.138px] lg:text-[24px] leading-[155%] group-hover:text-opacity-100'>
                {exp.company}
              </p>
            </div>
          ))}
        </div>

        <div className='flex space-x-3 items-center lg:absolute right-10 bottom-0 cursor-pointer'>
          <a
            href='https://drive.google.com/file/d/1tpvzdyDd2j-lpZblqO-fCJEYH4URXyIe/view?usp=sharing' target="_blank"
            className='font-staatliches text-[27.76px] lg:text-[40px] leading-[155%] text-white'
          >
            Download Resume
          </a>
          <Image src={rightArrow} alt='right arrow' />
        </div>
      </div>
    </div>
  );
};

export default Experience;
