"use client";

import React from 'react'
import logoo from "../../../public/1757943743.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function page() {
  const { lang } = useLanguage();
  return (
<>

<div className="relative w-full lg:w- h-30 mt-20">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>

 <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
    {t("nav.military", lang)}
  </h2>   
  </div>

<div className="w-full flex items-start gap-2 px-4 md:px-16 my-5 text-gray-400">
  <Link href={"/"}>{t("careers.home", lang)}</Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
    {t("nav.military", lang)}
  </Link>
</div>

<div className="border border-amber-700"></div>


<div className="w-[90%] mx-auto py-8 mt-5">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div className='bg-gray-100 h-full p-4'>
      <h2 className="text-3xl font-normal mb-4"> {t("military.title", lang)} </h2>

      <p className="font-normal text-lg">
        {t("military.description", lang)}
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-[250px] sm:h-full">
  <Image
    src={logoo}
    alt="logo"
    fill
    className="object-cover rounded-xl"
  />
</div>

  </div>

</div>



<div className="w-[90%] mx-auto py-8 bg-red-900 p-20">

<h3 className='text-black text-xl my-5'>{t("military.services", lang)}</h3>

<p className=" text-xl leading-6 font-normal my-5">
  {t("military.services", lang)}
</p>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3">

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="font-normal text-xl">{t("military.uavCounter", lang)}
        </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>{t("military.uavCounter", lang)}</p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="font-normal text-xl">{t("military.training", lang)} </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>{t("military.mineRemoval", lang)}</p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>{t("military.servicesGeneral", lang)}</p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>{t("military.protection", lang)}</p>
    </div>


     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-lg'>Surveillance: Closed-circuit television<br/> (CCTV) cameras</p>
    </div>



     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-lg'>Fixed-focus Internet Protocol (IP) cameras</p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-lg'>Thermal cameras, autofocus cameras</p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Video networks </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Electronic access control </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Facial recognition and biometric<br/> verification </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Operations center video wall, technical <br/>furniture </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Intelligent traffic management </p>
    </div>

     <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Site security - fencing, barriers </p>
    </div>


   </div>
</div>

</>  )
}
