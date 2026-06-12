"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import logo from "../../public/سلايدر-رييسي4.jpg";
import logoo from "../../public/1757750688.jpg";
import logo2 from "../../public/1757943743.jpg";
import logo3 from "../../public/1757963794.jpg";
import logo4 from "../../public/1757963859.jpg";
import logo5 from "../../public/1757770203.jpg";
import logo6 from "../../public/1711028293.jpg";
import logo7 from "../../public/1757922364.jpg";
import logo8 from "../../public/1757769421.jpg";
import logo9 from "../../public/1726026550.jpeg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react";
export default function Home() {


  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;

    const timer = setInterval(() => {
      start += 1;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* SLIDER */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          // spaceBetween={1}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          // navigation
          // pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px]">
              <Image
                src={logo}
                alt="logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px]">
              <Image
                src={logoo}
                alt="logoo"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ABOUT SECTION */}
      <div className="w-[90%] lg:w-[90%] mx-auto my-14 md:my-20 flex flex-col lg:flex-row items-start gap-10">

        {/* IMAGE */}
        <div className="w-full lg:w-4/12 h-75 sm:h-100 lg:h-125 relative">
          <Image
            src={logoo}
            alt="logo"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-8/12 flex flex-col gap-5">

          <h1 className="text-[32px] font-bold ">
            About Sama
          </h1> 

          <p className="text-[14px] sm:text-[16px] font-normal">
            As a construction group founded in 1990, we have witnessed remarkable growth over the years, expanding and diversifying our operations across various sectors. Through strategic growth initiatives, our group provides services in civil, urban, industrial, commercial, military, and medical sectors. Our dedication to achieving excellence and proactivity is clearly embodied in our evolutionary journey.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-4 ">

            <div className="group  transition duration-300 p-4 rounded-lg">
      <h2 className="text-2xl font-bold group-hover:text-white transition duration-300">
        {count}+
      </h2>

      <p className="group-hover:text-white font-bold transition duration-300">
        Years of giving
      </p>
    </div>

            <div className="group hover:bg-gray-600 transition duration-300 p-4 rounded-lg">
              <h2 className="text-2xl font-bold  group-hover:text-white transition duration-300">12+</h2>
              <p className="group-hover:text-white font-bold transition duration-300">
                Sectors
              </p>
            </div>

            <div className="group hover:bg-gray-600 transition duration-300 p-4 rounded-lg">
              <h2 className="text-2xl font-bold  group-hover:text-white transition duration-300">30+</h2>
              <p className="group-hover:text-white font-bold transition duration-300">
                Bridges and tunnels
              </p>
            </div>

            <div className="group hover:bg-gray-600 transition duration-300 p-4 rounded-lg">
              <h2 className="text-2xl font-bold  group-hover:text-white transition duration-300">1M+</h2>
              <p className="group-hover:text-white font-bold transition duration-300">
                Km² paved streets
              </p>
            </div>

            <div className="group hover:bg-gray-600 transition duration-300 p-4 rounded-lg">
              <h2 className="text-2xl font-bold group-hover:text-white transition duration-300">300+</h2>
              <p className="group-hover:text-white font-bold transition duration-300">
                Engineers
              </p>
            </div>

            <div className="group hover:bg-gray-600 transition duration-300 p-4 rounded-lg">
              <h2 className="text-2xl font-bold group-hover:text-white transition duration-300">B 8.2</h2>
              <p className="group-hover:text-white font-bold transition duration-300">
                Projects value
              </p>
            </div>

          </div>
        </div>

      </div>



<div className="bg-[#F1F1F1] p-10">

      <h2 className="text-center text-4xl font-bold mb-10">Our divisions</h2>

        <div className="w-[90%] mx-auto ">
          
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* CARD 1 */}
  <Link href={"/military-divisions"} className="block rounded-xl overflow-hidden">

   <div className="relative h-[250px]">
     <Image
      src={logo2}
      alt="logo2"
      fill
      className="object-cover"
      priority
    />
   </div>
  <div className="bg-[#dfdfdf] p-5">

      <h1 className="text-black text-lg font-bold">
        
        Military divisions
      </h1>
    </div>
  </Link>

  {/* CARD 2 */}
  <Link href={"/medical-divisions"} className="block  rounded-xl overflow-hidden">

    <div className="relative h-[250px]">
      
    <Image
      src={logo3}
      alt="logo3"
      fill
      className="object-cover"
    />
    </div>

      <div className="bg-[#dfdfdf] p-5">

      <h1 className="text-black text-lg font-bold">
        Medical divisions
      </h1>
    </div>
  </Link>

  {/* CARD 3 */}
 <Link href={"/civil-division"} className="block rounded-xl overflow-hidden"
>
  <div className="relative h-[250px]">
    <Image
      src={logo4}
      alt="logo4"
      fill
      className="object-cover"
    />
  </div>

  <div className="bg-[#dfdfdf] p-5">
    <h1 className="text-black text-lg font-bold">
      Civil division
    </h1>
  </div>
</Link>
   
</div>

</div>

    </div>




 <div className="w-[90%] mx-auto mt-10 ">

  {/* TITLE */}
  <h2 className="text-[32px] line-height-[38px] font-normal text-center mb-8">
    Civil division
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD 1 */}
   <div className="bg-white rounded-xl overflow-hidden shadow-md w-full flex flex-col">

  <div className="relative w-full h-[180px]">
    <Image
      src={logo7}
      alt="logo7"
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="p-4 flex flex-col gap-2 flex-1">

    <h3 className="text-[18px] font-medium hover:text-black text-gray-400 line-clamp-1">
      Construction and Building
    </h3>

    <p className="leading-6 text-[15px] text-black">
      Sama offers a complete range of construction services...
    </p>

<div className="flex items-center gap-2 mt-3 text-gray-500 font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
  
  <button>
    Read More
  </button>

    <span className="text-white bg-black p-2 rounded-full">
        <FaArrowRight />
    </span>

</div>

  </div>
</div>

    {/* CARD 2 */}
   <div className="bg-white rounded-xl overflow-hidden shadow-md w-full flex flex-col">

  <div className="relative w-full h-[180px]">
    <Image
      src={logo6}
      alt="logo6"
      fill
      className="object-cover"
      priority
    />
  </div>

  <div className="p-4 flex flex-col gap-2">

      <h3 className="text-[18px] font-medium hover:text-black text-gray-400 line-clamp-1">
      Electromechanics
    </h3>

        <p className="leading-6 text-[15px] ">

      Sama offers a wide range of electrical, mechanical, and plumbing services..
    </p>

   <div className="flex items-center gap-2 mt-3 text-gray-500 font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
  
  <button>
    Read More
  </button>

    <span className="text-white bg-black p-2 rounded-full">
        <FaArrowRight />
    </span>

</div>

  </div>
</div>

    {/* CARD 3 */}
  <div className="bg-white rounded-xl overflow-hidden shadow-md w-full flex flex-col">
 <div className="relative w-full h-[180px]">
        <Image
          src={logo5}
          alt="logo5"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
            <h3 className="text-[18px] font-medium hover:text-black text-gray-400 line-clamp-1">

          Energy
        </h3>

                <p className="leading-6 text-[15px] ">

          Sama provides energy transmission services...
        </p>

   <div className="flex items-center gap-2 mt-3 text-gray-500 font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
  
  <button>
    Read More
  </button>

    <span className="text-white bg-black p-2 rounded-full">
        <FaArrowRight />
    </span>

</div>

      </div>
    </div>

  </div>

  <div className="flex justify-center mt-10">

   <Link href="/Projects" className="w-60 text-center bg-transparent border-1 border-gray-500
    text-gray-500 py-4 px-4 rounded-lg hover:bg-[#8b8b8b] hover:text-white transition duration-300">

    See All Civil Division
  </Link>
</div>
</div>



<div className="bg-[#F1F1F1] py-10 mt-10">

  <h2 className="text-center text-3xl md:text-4xl font-normal mb-10">
    Highlighted projects
  </h2>

  <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* CARD */}
    <div className="relative h-[380px] rounded-xl overflow-hidden group">

      <Image
        src={logo8}
        alt="project"
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">

        <h3 className="text-3xl font-normal">
          Royal Commission for Jubail and Yanbu
        </h3>

        <div className="flex items-center gap-2 ">
          <p className="text-xl mt-2 line-clamp-2 ">
          Electrical installations, roads and bridges, storm water systems...
        </p>

        <div className="flex justify-end mt-4">
          <button className="w-10 h-10 rounded-full border border-[#B5862F] text-[#B5862F] flex items-center justify-center hover:bg-[#B5862F] hover:text-white transition">
            <FaArrowRight />
          </button>
        </div>
        
        </div>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="relative h-[380px] rounded-xl overflow-hidden group">
      <Image src={logo9} alt="project" fill className="object-cover group-hover:scale-105 transition duration-500" />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
        <h3 className="text-4xl font-normal">
          Jeddah Stadium Project
        </h3>

       <div className="flex items-center gap-2 ">

         <p className="text-xl mt-2 line-clamp-2">
          FIFA specs, retractable roof, cooling systems...
        </p>

        <div className="flex justify-end mt-4">
          <button className="w-10 h-10 rounded-full border border-[#B5862F] text-[#B5862F] flex items-center justify-center hover:bg-[#B5862F] hover:text-white transition">
            <FaArrowRight />
          </button>
        </div>
       </div>


      </div>
    </div>

    {/* CARD 3 */}
    <div className="relative h-[380px] rounded-xl overflow-hidden group">
      <Image src={logo} alt="project" fill className="object-cover group-hover:scale-105 transition duration-500" />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
        <h3 className="text-3xl font-normal">
          Tunnels and Bridges Works
        </h3>

       <div className="flex items-center gap-2 ">

         <p className="text-xl mt-2 line-clamp-2">
          Infrastructure, bridges, tunnels and road systems...
        </p>

        <div className="flex justify-end mt-4">
          <button className="w-10 h-10 rounded-full border border-[#B5862F] text-[#B5862F] flex items-center justify-center hover:bg-[#B5862F] hover:text-white transition">
            <FaArrowRight />
          </button>
       </div>

        </div>
      </div>
    </div>

  </div>

  <div className="flex justify-center mt-10 ">

  <Link href="/Projects" className="w-60 text-center bg-transparent border-1  border-gray-500 text-gray-500 
   py-4 px-4 rounded-lg hover:bg-[#8b8b8b] hover:text-white transition duration-300">
    See All Projects
  </Link>
</div>
</div>



    </>
  );
}