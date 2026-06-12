"use client";

import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/سلايدر-رييسي4.jpg";
import logo8 from "../../../public/1757769421.jpg";
import logo9 from "../../../public/1726026550.jpeg";
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';

export default function Page() {
  const { t } = useLanguage();

  return (
   <>
   
    <div className="w-[20%]  flex items-start ms-[60px] gap-2 my-5 text-gray-400">
  <Link href={"/"}>
    {t.projects.breadcrumbHome}
  </Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  {t.projects.breadcrumbProjects}
</Link>
</div>

<div className="border border-amber-700"></div>

  <div className="w-[90%] mx-auto mt-10 flex flex-col lg:flex-row items-center lg:items-start my-5 gap-5 ">

    <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden">
    <video
      src="/Saudi Arabia.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>


   <div className="w-full lg:w-[55%] text-xl">

    <h1 className="text-right font-bold text-4xl text-[#1d2e64] mb-2">{t.projects.sectionTitle}</h1>

    <p className='bg-gray-100 p-3  text-right'>
      {t.projects.sectionDescription}
    </p>
   </div>
 </div>
   
   <div className="bg-white p-5">

     <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
        {/* CARD */}
        <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer">
    
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
    
           <h3 className="text-3xl font-normal max-w-[350px] leading-tight">
             {t.projects.royalCommissionTitle}
                </h3>
    
            <div className="flex items-center gap-2 ">
              <p className=" mt-2 line-clamp-3 ">
                {t.projects.royalCommissionDesc}
            </p>
    
            <div className="flex justify-end mt-4">
             <button className="w-10 h-10 rounded-full border border-[#B5862F]
               text-[#B5862F] flex items-center justify-center bg-[#B5862F] text-white transition">
                <FaArrowRight />
              </button>
            </div>
            
            </div>
    
          </div>
        </div>
    
        {/* CARD 2 */}
        <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer">
          <Image src={logo9} alt="project" fill className="object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/40"></div>
    
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            <h3 className="text-4xl font-normal">
              {t.projects.jeddahStadiumTitle}
            </h3>