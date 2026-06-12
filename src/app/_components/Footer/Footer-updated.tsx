"use client";

import React from 'react'
import logo from "../../../../public/logo_20250913_103209.svg";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className='bg-[#1b2e37]  p-10'>

        <div className="w-[90%] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">

            <div className="flex flex-col gap-3 items-start">
            <h2 className='text-2xl font-bold mb-2 text-white'>{t.footer.websiteSections}</h2>

            <div className=" flex flex-col gap-3 items-start text-white">

              <Link href="/">{t.nav.home}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/Projects">{t.nav.projects}</Link>
            <Link href="/Contact">{t.nav.contactUs}</Link>
            </div>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2 ">
                {t.footer.sectors}
                </h3>

                <Link href="/civil-division">{t.nav.civilDivision}</Link>
                <Link href="/military-divisions">{t.nav.militaryDivisions}</Link>
                <Link href="/medical-divisions">{t.nav.medicalDivisions}</Link>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                {t.footer.civilDivision}
                </h3>
                <button>{t.footer.construction}</button>
                <button>{t.footer.electromechanics}</button>
                <button>{t.footer.energy}</button>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                {t.footer.projects}
                </h3>

                <button>{t.footer.royalCommission}</button>
                <button>{t.footer.yanbu}</button>
                <button>{t.footer.jeddahStadium}</button>
                <button>{t.footer.tunnels}</button>
            </div>
        </div>


         <div className="w-[90%] mx-auto h-0.5 bg-gray-600"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">

        {/* Logo + Contact */}
        <div className="flex items-center gap-3 p-3 text-white">

        <Image src={logo} alt="logo" width={150} height={80} className="invert brightness-0"/>
              
          <div>
            <h4 className="font-semibold">{t.footer.phone}</h4>
            <p className="text-sm">{t.footer.email}</p>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex flex-col items-center justify-center gap-2 p-3 text-white">
          <h5 className="font-semibold">{t.footer.privacyPolicy}</h5>
          <p className="text-sm">{t.footer.allRightsReserved}</p>
        </div>

        {/* Social */}
      <div className="flex items-center justify-center gap-4 p-3 text-xl">

          <div className="p-2 rounded-full bg-white  hover:bg-[#B5862F] transition-colors cursor-pointer">
          <FaFacebookF />
        </div>

          <div className="p-2 rounded-full bg-white  hover:bg-[#B5862F] transition-colors cursor-pointer">

          <FaTwitter />
        </div>

            <div className="p-2 rounded-full bg-white  hover:bg-[#B5862F] transition-colors cursor-pointer">

          <FaInstagram />
        </div>

          <div className="p-2 rounded-full bg-white  hover:bg-[#B5862F] transition-colors cursor-pointer">

          <FaLinkedin />
        </div>

      </div>


    </div>

    </div>

    </div>
  )
}
