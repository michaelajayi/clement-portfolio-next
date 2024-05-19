import { ClientType } from "@/utils/d.types";
import Image from "next/image";
import React from "react";
import bigQuote from "../../../public/icons/big-quote.svg";

const ClientItem: React.FC<{ client: ClientType }> = ({ client }) => {
  return (
    <div className="w-[661px] h-[480px] flex flex-col bg-[#5A5A5A] rounded-[32px] px-10 py-10 relative justify-between z-10">
      <div className="flex justify-between items-start space-x-5">
        <Image
          src={client.img}
          alt={client.name}
          className="h-[155px] w-[155px]"
        />
        <p className="font-roboto text-white text-opacity-[.70] text-[20px] leading-[155%]">
          {client.review}
        </p>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col space-y-1">
          <p className="font-staatliches text-[40px] text-white leading-[115%] uppercase">
            {client.name}
          </p>
          <div className="flex flex-col">
            <p className="font-roboto text-white text-opacity-[.70] text-[24px] leading-[155%]">
              {client.role}
            </p>
            <p className="font-roboto text-white text-opacity-[.70] text-[24px] leading-[155%] font-medium">
              {client?.company}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={bigQuote}
        alt="big quote"
        className="absolute z-20 bottom-0 right-10"
      />
    </div>
  );
};

export default ClientItem;
