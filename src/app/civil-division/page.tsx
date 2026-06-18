"use client";

import logoo from "../../../public/1757963859 (1).jpg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function page() {
  const { lang } = useLanguage();
  return (

    <>
    
    <div className="relative w-full lg:w- h-30 mt-20">
              <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
    
     <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
       Civil division
         </h2>   
      </div>
    

    <div className="w-full md:w-auto  flex items-start ms-16 gap-2 my-5 text-gray-400">
      <Link href={"/"}>HOME</Link>
       <span>/</span>
      <Link href={""} className="whitespace-nowrap"> Civil division</Link>
    </div>
    
    <div className="border border-amber-700"></div>
    
    
    <div className="w-[90%] mx-auto py-8">
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
        {/* TEXT */}
        <div className='bg-gray-100 h-[400px] p-2'>
          <h2 className="text-3xl font-normal mb-4">{t("civil.title", lang)}</h2>
    
          <p className="leading-7 font-normal">
{t("civil.description", lang)}
    </p>
        </div>
    
        {/* IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
        </div>
    
      </div>
    
    </div>
    
    
    
    
    
    </>
  )
}
