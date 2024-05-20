import { ClientType } from "@/utils/d.types";
import Image from "next/image";
import React from "react";
import bigQuote from "../../../public/icons/big-quote.svg";

const ClientItem: React.FC<{ client: ClientType }> = ({ client }) => {
  return (
    <div className='lg:w-[661px] lg:h-[480px] w-[276.867px] h-[201.054px] flex flex-col bg-[#5A5A5A] rounded-[32px] px-5 lg:px-10 py-5 lg:py-10 relative justify-between z-10'>
      <div className='flex justify-between items-start space-x-5'>
        <Image
          src={client.img}
          alt={client.name}
          className='lg:h-[155px] lg:w-[155px] w-[48.169px] h-[48.169px]'
        />
        <p className='font-roboto text-white text-opacity-[.70] text-[8.377px] lg:text-[20px] leading-[155%]'>
          {client.review}
        </p>
      </div>

      <div className='flex justify-between items-start'>
        <div className='flex flex-col space-y-1'>
          <p className='font-staatliches text-[16.754px] lg:text-[40px] text-white leading-[115%] uppercase'>
            {client.name}
          </p>
          <div className='flex flex-col'>
            <p className='font-roboto text-white text-opacity-[.70] text-[10.053px] lg:text-[24px] leading-[155%]'>
              {client.role}
            </p>
            <p className='font-roboto text-white text-opacity-[.70] text-[10.053px] lg:text-[24px] leading-[155%] font-medium'>
              {client?.company}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={bigQuote}
        alt='big quote'
        className='absolute z-20 bottom-0 right-2 lg:right-10 w-[85.867px] h-[69.112px] lg:w-fit lg:h-fit'
      />
    </div>
  );
};

export default ClientItem;
