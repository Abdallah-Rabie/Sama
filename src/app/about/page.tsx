"use client"

import React from 'react'
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";
import logoo from "../../../public/1757750688.jpg";
import logo from "../../../public/2.png";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import Image from 'next/image';
import SwiperAbout from '../_components/SwiperAbout/SwiperAbou';
import Link from 'next/link';
export default function page() {
  const { lang } = useLanguage();

  return (
<>

 <div className="relative w-full lg:w- h-30 relative mt-20">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
           <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
    {t("breadcrumb.about", lang)}
  </h2>  
        </div>

<div className="w-[20%]  flex items-start ms-[60px] gap-2 my-5 text-gray-400">
  <Link href={"/"}>
    {t("careers.home", lang)}
  </Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  {t("breadcrumb.about", lang)}
</Link>
</div>

<div className="border-1 border-amber-700"></div>


    <div className="w-full h-auto pt-2">

      <div className="w-[90%] mx-auto flex gap-5  p-5 rounded-xl">

        <div className="hidden sm:flex w-4/12 gap-3 flex-col">
        <h3>{t("sidebar.presidentMessage", lang)}</h3>
        <h3>{t("sidebar.companyHistory", lang)}</h3>
        <h3>{t("sidebar.valuesOfSama", lang)}</h3>
        <h3>{t("sidebar.qualityProductivity", lang)}</h3>
        <h3>{t("sidebar.environmentSustainability", lang)}</h3>
      </div>

      <div className="w-full sm:w-8/12">
        <h1 className='my-3 font-normal text-black text-3xl'>{t("about.presidentMessage", lang)}</h1>
        <p>{t("about.text1", lang)}</p>

        <h2 className='my-7 text-xl font-normal text-black'>{t("about.chairman", lang)}</h2>

        <h3 className='my-3 text-lg font-normal text-black'>{t("about.chairmanName", lang)}</h3>
        
        <div className="border-2 border-amber-700 mt-4 w-full"></div>

        <h1 className='mt-5 text-3xl font-normal text-black'>{t("about.companyHistory", lang)}</h1>
        
        <p className='my-5 font-normal text-black'>{t("about.samaGroup", lang)}</p>

        <p>{t("about.text2", lang)}</p>
      </div>
      </div>


      <div className="relative w-full h-50 mt-10 rounded-xl overflow-hidden">

  <Image
    src={logoo}
    alt="logo"
    fill
    className="object-cover rounded-xl"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

  {/* Content */}
  <div className="w-[90%] mx-auto absolute inset-0 text-white p-6 flex  justify-center gap-3 z-10">

     <div>
    <h2 className="text-xl font-bold mb-2 text-center">{t("about.integrity", lang)}</h2>
    <p className="font-normal leading-7 line-clamp-2">
      {t("about.integrityText", lang)}
    </p>
  </div>

     <div>
    <h2 className="text-xl font-bold mb-2 text-center">{t("about.uniqueness", lang)}</h2>
    <p className="font-normal leading-7 line-clamp-3">
      {t("about.uniquenessText", lang)}
    </p>
  </div>

  
  <div>
    <h2 className="text-xl font-bold mb-2 text-center">{t("about.movingForward", lang)}</h2>
    <p className="font-normal leading-7 line-clamp-3">
      {t("about.movingForwardText", lang)}
    </p>
  </div>

  </div>




  
</div>

    
  <div className="w-[90%] mx-auto my-10 p-5 rounded-xl flex flex-col lg:flex-row gap-5 items-stretch">

  {/* TEXT */}
  <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded-xl flex">
    <div>
      <h2 className="text-3xl font-bold mb-4">{t("about.safetyFirstSection", lang)}</h2>

    <p className="leading-8 text-gray-700">
  {t("about.safetyText", lang)}
</p>

</div>
    </div>
  </div>

  {/* IMAGE */}
 <div className="w-full sm:w-1/2 relative min-h-[400px]">
    <Image
      src={logo}
      alt="logo"
      fill
      className="object-cover rounded-xl"
    />
  </div>

</div>


<div className="border-2 border-amber-700"></div>

<div className="w-[90%] mx-auto my-10">


    {/* TITLE */}
    <div>
      <h3 className="text-4xl font-bold mb-3">
        Quality and Productivity
      </h3>
    </div>
 <div className="flex flex-col lg:flex-row gap-10">

  {/* QUALITY */}
  <div className="w-full lg:w-1/2 flex flex-col gap-5">

    {/* TEXT */}
    <div>
      <span className="text-2xl font-semibold text-[#49a8aa]">
        Quality
      </span>

      <p className="text-gray-700 leading-8 mt-3">
        We are committed to achieving quality that exceeds
        standards in all our fields of work. We aim to achieve
        an exceptional level of excellence.
      </p>
    </div>

    {/* IMAGES */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative h-[200px] w-full">
        <Image src={logo1} alt="logo1" fill className="object-cover rounded-xl" />
      </div>

      <div className="relative h-[200px] w-full">
        <Image src={logo2} alt="logo2" fill className="object-cover rounded-xl" />
      </div>
    </div>

  </div>

  {/* PRODUCTIVITY */}
  <div className="w-full lg:w-1/2 flex flex-col gap-5">

    {/* TEXT */}
    <div>
      <span className="text-2xl font-semibold text-[#49a8aa]">
        Productivity Speed
      </span>

      <p className="text-gray-700 leading-8 mt-3">
        The key to Sama’s success is not shortcutting work,
        but creating the right conditions to complete timelines
        and plans in a timely manner.
      </p>
    </div>

    {/* IMAGES */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative h-[200px] w-full">
        <Image src={logo3} alt="logo3" fill className="object-cover rounded-xl" />
      </div>

      <div className="relative h-[200px] w-full">
        <Image src={logo4} alt="logo4" fill className="object-cover rounded-xl" />
      </div>
    </div>

  </div>

</div>

</div>


<div className="bg-[#128977] py-12 lg:py-20 px-4 text-center text-white rounded-xl">

  <h2 className="text-xl md:text-2xl font-bold mb-3">
    Environment and Sustainability
  </h2>

  <p className="text-sm md:text-lg">
    Sustainability is not just a part of our strategy; it is our identity.
    We are committed to being part of the solution in facing environmental challenges.
  </p>

  {/* line */}
  <div className="w-16 border-2 border-gray-500 mx-auto my-4"></div>

  <p className="text-sm md:text-lg leading-8 max-w-4xl mx-auto px-2 md:px-0">
    At Sama, we recognize that the future of business is not just about financial success,
    but also about preserving our planet. Therefore, we strive to implement green building standards
    by using sustainable materials and designs that emphasize energy efficiency.

    We focus on ensuring that our operations have minimal environmental impact.
    We are also committed to renewable energy sources and investing in solar energy technologies.
    We apply the best industrial practices to ensure production processes respect the environment
    and contribute to its preservation.
  </p>

</div>


<SwiperAbout/>

    {/* </div> */}


</>  )
}
