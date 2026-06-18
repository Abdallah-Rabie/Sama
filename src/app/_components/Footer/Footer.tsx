"use client";

import React from 'react'
import logo from "../../../../public/logo_20250913_103209.svg";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <div className='bg-[#1b2e37]  p-10'>

        <div className="w-[90%] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">

            <div className="flex flex-col gap-3 items-start">
            <h2 className='text-2xl font-bold mb-2 text-white'>{t("footer.websiteSections", lang)}</h2>

            <div className=" flex flex-col gap-3 items-start text-white">

              <Link href="/">{t("nav.home", lang)}</Link>
            <Link href="/about">{t("nav.about", lang)}</Link>
            <Link href="/Projects">{t("nav.projects", lang)}</Link>
            <Link href="/Contact">{t("nav.contact", lang)}</Link>
            </div>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2 ">
                {t("nav.projects", lang)}
                </h3>

                <Link href="/civil-division">{t("nav.civil", lang)}</Link>
                <Link href="/military-divisions">{t("nav.military", lang)}</Link>
                <Link href="/medical-divisions">{t("nav.medical", lang)}</Link>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                {t("civil.title", lang)}
                </h3>
                <button>{t("home.constructionBuilding", lang)}</button>
                <button>{t("home.electromechanics", lang)}</button>
                <button>{t("home.energy", lang)}</button>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                {t("home.highlightedProjects", lang)}
                </h3>

                <button>{t("home.royalCommission", lang)}</button>
                <button>{t("footer.yanbu", lang)}</button>
                <button>{t("home.jeddahStadium", lang)}</button>
                <button>{t("home.tunnelsBridges", lang)}</button>
            </div>
        </div>


         <div className="w-[90%] mx-auto h-0.5 bg-gray-600"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">

        {/* Logo + Contact */}
        <div className="flex items-center gap-3 p-3 text-white">

        <Image src={logo} alt="logo" width={150} height={80} className="invert brightness-0"/>
              
          <div>
            <h4 className="font-semibold">{t("footer.phone", lang)}</h4>
            <p className="text-sm">{t("footer.email", lang)}</p>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex flex-col items-center justify-center gap-2 p-3 text-white">
          <h5 className="font-semibold">{t("footer.privacyPolicy", lang)}</h5>
          <p className="text-sm">{t("footer.allRightsReserved", lang)}</p>
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
