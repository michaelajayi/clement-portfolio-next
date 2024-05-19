import React from "react";

const JobTitle = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 lg:px-[8rem] flex-col space-y-10 py-10">
      <div className="flex flex-col bg-[#C4C4C4] rounded-[32px] py-3 lg:py-5 w-full justify-center items-center px-5 lg:px-[5rem] relative">
        {/* absolute dot */}
        <div className="w-[14.5px] lg:w-[50px] h-[14.5px] lg:h-[50px] bg-black rounded-[50%] absolute bottom-10 left-10"></div>
        <div className="w-[14.5px] lg:w-[50px] h-[14.5px] lg:h-[50px] bg-black rounded-[50%] absolute top-10 right-10"></div>
        <p className="font-staatliches text-[27.755px] lg:text-[96px] text-black lg:leading-[96px] leading-normal self-start">
          {"// a product designer //"}
        </p>
        <p className="font-staatliches text-[27.755px] lg:text-[96px] text-black leading-normal lg:leading-[96px] self-end">
          {"// a product manager //"}
        </p>
      </div>
      <p className="text-white text-opacity-[.70] text-[14px] lg:text-[24px] font-roboto leading-[155%]">
        My approach is to visualise and communicate the best of the product. I
        pride myself as a problem solver, a storyteller and a bridge between
        ideas and reality. My resilience shines through my ability to adapt to
        changing circumstances, pivot when needed, and continuously push the
        boundaries of creativity.
      </p>
    </div>
  );
};

export default JobTitle;
