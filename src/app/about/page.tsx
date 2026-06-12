

import React from 'react'
import logoo from "../../../public/1757750688.jpg";
import logo from "../../../public/2.png";
import logo1 from "../../../public/logo1.png";
import logo2 from "../../../public/logo2.png";
import logo3 from "../../../public/logo3.png";
import logo4 from "../../../public/logo4.png";
import Image from 'next/image';
import SwiperAbout from '../_components/SwiperAbout/SwiperAbou';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function page() {
  const { t } = useLanguage();

  return (
<>

 <div className="relative w-full lg:w- h-30 relative">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
           <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
    {t.about.pageTitle}
  </h2>  
        </div>

<div className="w-[20%]  flex items-start ms-[60px] gap-2 my-5 text-gray-400">
  <Link href={"/"}>
    {t.about.breadcrumbHome}
  </Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  {t.about.breadcrumbAbout}
</Link>
</div>

<div className="border-1 border-amber-700"></div>


    <div className="w-full h-auto pt-2">

      <div className="w-[90%] mx-auto flex gap-5  p-5 rounded-xl">

        <div className="hidden sm:flex w-4/12 gap-3 flex-col">
        <h3>{t.about.menuPresidentsMessage}</h3>
        <h3>{t.about.menuCompanyHistory}</h3>
        <h3>{t.about.menuValues}</h3>
        <h3>{t.about.menuQuality}</h3>
        <h3>{t.about.menuEnvironment}</h3>
      </div>

      <div className="w-full sm:w-8/12">
        <h1 className='my-3 font-normal text-black text-3xl'>President’s Message</h1>
        <p>Thanks to the grace of God, Sama has taken distinguished steps throughout its long history towards achieving a unique and distinguished experience in military, civil, and other fields. We are committed to fundamental values that form the essence of our work: excellence, integrity, innovation, safety, quality, and speed of production. We work diligently to provide tailored and integrated solutions that meet the needs of every client, leveraging our rich experience to achieve this goal. We prioritize sustainability and continuous improvement while focusing on enhancing our performance and minimizing negative environmental impact. We are also committed to developing our team and empowering them to be an effective element in our journey towards success. As a united and harmonious team, we aspire to enhance our position as a leading company in all our areas of work,ensuring the achievement of the highest standards of quality and efficiency in all our projects and services</p>

        <h2 className='my-7 text-xl font-normal text-black'>Chairman</h2>

        <h3 className='my-3 text-lg font-normal text-black'>Sultan bin Salman Saleem Al-Saadi</h3>
        
        <div className="border-2 border-amber-700 mt-4 w-full"></div>

        <h1 className='mt-5 text-3xl font-normal text-black'>Company History</h1>
        
        <p className='my-5 font-normal text-black'>Sama Group (Since 1990)</p>

        <p>As a construction group established in 1990, we have witnessed significant growth over the years, expanding and diversifying our operations across various sectors. Through strategic growth initiatives, our group provides services in civil, structural, industrial, commercial, military, and medical sectors. Our dedication to achieving excellence and proactivity is clearly embodied in our evolutionary journey.</p>
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
    <h2 className="text-xl font-bold mb-2 text-center">Integrity</h2>
    <p className="font-normal leading-7 line-clamp-2">
      We conduct all our tasks with honesty and integrity,
      so you can trust us.
    </p>
  </div>

     <div>
    <h2 className="text-xl font-bold mb-2 text-center">Uniqueness</h2>
    <p className="font-normal leading-7 line-clamp-3">
      Being a group operating in diverse fields, we need to excel
      and innovate to stay ahead by providing comprehensive
      solutions that meet needs.
    </p>
  </div>

  
  <div>
    <h2 className="text-xl font-bold mb-2 text-center">Moving Forward</h2>
    <p className="font-normal leading-7 line-clamp-3">
      We believe in the necessity of continuous change and striving
      for improvement and continuous learning to elevate standards
      and achieve mutual benefit.
    </p>
  </div>

  </div>




  
</div>

    
  <div className="w-[90%] mx-auto my-10 p-5 rounded-xl flex flex-col lg:flex-row gap-5 items-stretch">

  {/* TEXT */}
  <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded-xl flex">
    <div>
      <h2 className="text-3xl font-bold mb-4">Safety First</h2>

      <p className="leading-8 text-gray-700">
        By the grace of God and extending Sama’s excellence,
        we have achieved the best contractor award for the
        Oxagon project in NEOM, where we secured 14 contracts,
        marking a significant achievement with no severe injuries,
        reflecting our ongoing commitment to safety.

        We have taken comprehensive measures in managing
        occupational health and safety, with a workforce of about
        25,875 people. We organized 1,877 introductory sessions
        and conducted 224 inspections.

        We achieved over 30,502,451 safe work hours, reflecting
        our commitment to providing a safe working environment.
      </p>
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

    </div>


</>  )
}
