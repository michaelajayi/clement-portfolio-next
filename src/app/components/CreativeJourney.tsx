import Image from "next/image";
import React from "react";

import centerImage from "../../../public/images/creative-journey-main-picture.svg";

const CreativeJourney = () => {
  return (
    <div className="w-full flex justify-center items-center px-[8rem] flex-col space-y-10 py-20">
      <div className="w-full h-auto flex flex-col justify-end items-center relative space-y-20">
        <div className="grid grid-cols-10 justify-items-end gap-8 items-center relative">
          <p className="font-staatliches text-white text-[165px] leading-[145px] absolute left-0 w-1/3">
            My Creative Journey
          </p>
          <Image
            src={centerImage}
            alt="Clement Mendie"
            className="col-span-8 pointer-events-none"
          />
          <div className="flex flex-col space-y-5 col-span-2">
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-5 items-center">
                <p className="font-staatliches text-white text-[96px] leading-[115%]">
                  4
                </p>
                <p className="font-roboto text-white text-[24px] leading-[155%] text-opacity-[.70] w-1/3">
                  Years Experience
                </p>
              </div>
              <div className="flex space-x-5 items-center">
                <p className="font-staatliches text-white text-[96px] leading-[115%]">
                  23
                </p>
                <p className="font-roboto text-white text-[24px] leading-[155%] text-opacity-[.70] w-1/3">
                  Clients Worldwide
                </p>
              </div>
            </div>
            <p className="font-staatliches text-white text-[40px] leading-[115%]">
              My creative journey started in calabar where I studied for the
              years.
            </p>
          </div>
        </div>

        <p className="font-roboto text-white text-opacity-[.70] text-[24px] leading-[155%] w-[50%] self-start">
          I’ve been lucky to work with talented people and unique brands.
          Currently, I’m leading the product design team at Motopay. My approach
          is to focus on seamless functionality and memorable user interactions.
        </p>
      </div>
    </div>
  );
};

export default CreativeJourney;
