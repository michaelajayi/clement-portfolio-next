import Image from "next/image";
import React from "react";

import centerImage from "../../../public/images/creative-journey-main-picture.svg";

const CreativeJourney = () => {
  return (
    <div className='w-full flex justify-center items-center px-5 lg:px-[8rem] flex-col space-y-5 lg:space-y-10 py-20'>
      <div className='w-full h-auto flex flex-col justify-end items-center relative space-y-10 lg:space-y-20'>
        <div className='grid grid-cols-1 lg:grid-cols-10 justify-items-end gap-8 items-center relative'>
          <p className='font-staatliches text-white text-[96px] lg:text-[165px] leading-[92.041px] lg:leading-[145px] absolute left-0 top-0 translate-y-[-30%] lg:translate-y-1/3 lg:w-1/3 w-full'>
            My Creative Journey
          </p>
          <Image
            src={centerImage}
            alt='Clement Mendie'
            className='lg:col-span-8 col-span-1 pointer-events-none w-[278.697px] h-auto lg:w-auto lg:h-auto mt-10 lg:mt-0 object-cover'
          />
          <div className='flex flex-col lg:space-y-5 space-y-10 lg:col-span-2 col-span-1'>
            <div className='flex flex-row lg:flex-col lg:space-y-5'>
              <div className='flex space-x-5 items-center'>
                <p className='font-staatliches text-white text-[54px] lg:text-[96px] leading-[115%]'>
                  4
                </p>
                <p className='font-roboto text-white text-[16px] lg:text-[24px] leading-[155%] text-opacity-[.70] w-1/3'>
                  Years Experience
                </p>
              </div>
              <div className='flex space-x-5 items-center'>
                <p className='font-staatliches text-white text-[54px] lg:text-[96px] leading-[115%]'>
                  23
                </p>
                <p className='font-roboto text-white text-[16px] lg:text-[24px] leading-[155%] text-opacity-[.70] w-1/3'>
                  Clients Worldwide
                </p>
              </div>
            </div>
            <p className='font-staatliches text-white text-[24px] lg:text-[40px] leading-[115%] w-[75%] lg:w-full'>
              My creative journey started in calabar where I studied for the
              years.
            </p>
          </div>
        </div>

        <p className='font-roboto text-white text-opacity-[.70] text-[16px] lg:text-[24px] leading-normal lg:leading-[155%] w-full lg:w-[50%] self-start'>
          I’ve been lucky to work with talented people and unique brands.
          Currently, I’m leading the product design team at Motopay. My approach
          is to focus on seamless functionality and memorable user interactions.
        </p>
      </div>
    </div>
  );
};

export default CreativeJourney;
