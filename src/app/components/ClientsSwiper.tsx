"use client";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import { ClientType } from "@/utils/d.types";
import ClientItem from "./ClientItem";

import { clients } from "@/utils/clients";

const ClientsSwiper = () => {
  return (
    <div className='w-full'>
      <Swiper
        freeMode={true}
        grabCursor={true}
        loop={true}
        navigation={{
          nextEl: ".testimonial-next-button",
          prevEl: ".testimonial-prev-button",
        }}
        pagination={{
          el: ".testimonial-pagination",
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        speed={15000}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        effect='fade'
        className='my-clients-swiper w-full'
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 150,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
        }}
      >
        {clients.map((client: ClientType, index: number) => (
          <SwiperSlide key={index}>
            <ClientItem client={client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSwiper;
