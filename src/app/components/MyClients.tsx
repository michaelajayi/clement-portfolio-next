import React from "react";
import ClientsSwiper from "./ClientsSwiper";

const MyClients = () => {


  return (
    <div className="w-full flex justify-center items-center flex-col space-y-10 py-[10rem] bg-black">
      <div className="flex flex-col space-y-20 w-full justify-center relative">
        <div className="w-full px-[8rem]">
          <p className="font-staatliches text-white text-[165px] leading-[145px]">
            My Clients
          </p>
        </div>

        <div className="w-full px-[8rem]">
          <ClientsSwiper />
        </div>
      </div>
    </div>
  );
};

export default MyClients;
