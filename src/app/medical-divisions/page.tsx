"use client";

import React from 'react'
import logoo from "../../../public/1757963794.jpg";
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
   {t("nav.medical", lang)}  </h2>   
  </div>

<div className="flex items-start ms-16 gap-2 my-5 text-gray-400">
  <Link href={"//"}>{t("careers.home", lang)}</Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  {t("nav.medical", lang)}
</Link>

</div>

<div className="border border-amber-700"></div>


<div className="w-[90%] mx-auto py-8">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div className='bg-gray-100 h-full p-4'>
      <h2 className="text-3xl font-normal mb-4">{t("medical.title", lang)}</h2>

        <p className=" font-normal break-words text-lg">
{t("medical.description", lang)}</p>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-[250px] sm:h-full">
      <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
    </div>

  </div>

</div>




<div className="w-[90%] mx-auto py-8">

  <p className="text-xl font-normal my-5">
    {t("medical.intro", lang)}
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8 my-5">

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-lg">
        {t("medical.dialysisConsumables", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.bicarbonate", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.dialysis", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-lg">
        {t("medical.metroCarts", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.furniture", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.spareParts", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.refrigerators", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.products", lang)}
      </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className="text-xl">
        {t("medical.dentalProducts", lang)}
      </p>
    </div>

  </div>

  <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
    <p className="text-xl">
      {t("medical.thermalCameras", lang)}
    </p>
  </div>

</div>

</>  )
}
