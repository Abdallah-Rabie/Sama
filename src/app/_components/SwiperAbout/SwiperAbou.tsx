"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image from "next/image";

import logo1 from "../../../../public/comp1.png";
import logo2 from "../../../../public/comp2.png";
import logo3 from "../../../../public/comp3 (1).jpg";
import logo4 from "../../../../public/comp4.jpg";
import logo5 from "../../../../public/comp5.jpg";
import logo6 from "../../../../public/comp6.png";
import logo7 from "../../../../public/comp7.png";
import logo8 from "../../../../public/comp8.png";
import logo9 from "../../../../public/comp9.jpg";
import logo10 from "../../../../public/comp10.jpg";
import logo11 from "../../../../public/comp11.jpg";
import logo12 from "../../../../public/comp12.png";
import logo13 from "../../../../public/comp17.jpg";
import logo14 from "../../../../public/comp15.jpg";
import logo15 from "../../../../public/comp14.jpg";

export default function SwiperAbout() {

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  return (
    <div className="py-12 mt-10">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6}

        breakpoints={{
          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 6,
          },
 }}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        loop={true}
      >

        {logos.map((logo, index) => (
          <SwiperSlide key={index}>

            <div className="flex items-center justify-center h-[120px]">

              <Image
                src={logo}
                alt={`logo-${index}`}
                width={140}
                height={80}
                className="object-contain w-auto h-auto"
              />

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}