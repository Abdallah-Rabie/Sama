"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "../../../../public/logo_20250913_103209.svg";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/_components/LanguageProvider/LanguageProvider";
import { t } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  return (
<div className="w-full absolute  top-0 left-0 z-50 bg-transparent">

     <div className="w-[90%] mx-auto h-16 flex items-center justify-between">
      
      <NavigationMenu className="w-[90%] mx-auto p-3 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-10">

          {/* logo + button */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={180} height={90} />

            {/* toggle button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>


          {/* desktop links */}
          <NavigationMenuList className="hidden lg:flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={pathname === "/" ? "nav-active" : "nav-link"}>
                  {t("nav.home", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={pathname === "/about" ? "nav-active" : "nav-link"}>
                  {t("nav.about", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/civil-division" className={pathname === "/civil-division" ? "nav-active" : "nav-link"}>
                  {t("nav.civil", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/military-divisions" className={pathname === "/military-divisions" ? "nav-active" : "nav-link"}>
                  {t("nav.military", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/medical-divisions" className={pathname === "/medical-divisions" ? "nav-active" : "nav-link"}>
                  {t("nav.medical", lang)}
                </Link> 
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Projects" className={pathname === "/Projects" ? "nav-active" : "nav-link"}>
                  {t("nav.projects", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className={pathname === "/careers" ? "nav-active" : "nav-link"}>
                  {t("nav.careers", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Contact" className={pathname === "/Contact" ? "nav-active" : "nav-link"}>
                  {t("nav.contact", lang)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>



            <NavigationMenuItem>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("ar")}
                  className={`nav-link ${lang === "ar" ? "nav-active" : ""}`}
                >
                  {t("nav.arabic", lang)}
                </button>

                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`nav-link ${lang === "en" ? "nav-active" : ""}`}
                >
                  {t("nav.english", lang)}
                </button>
              </div>
            </NavigationMenuItem>


          </NavigationMenuList>
        </div>


      </NavigationMenu>

      {/* ✅ mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 z-50">

          <Link onClick={() => setOpen(false)} href="/">{t("navbar.home", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/about">{t("navbar.aboutSama", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/civil-division">{t("navbar.civilDivision", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/military-divisions">{t("navbar.militaryDivisions", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/medical-divisions">{t("navbar.medicalDivisions", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/projects">{t("nav.projects", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/careers">{t("nav.careers", lang)}</Link>
          <Link onClick={() => setOpen(false)} href="/contact">{t("nav.contact", lang)}</Link>
          <div className="flex gap-2">
            <button type="button" onClick={() => { setOpen(false); setLang("ar"); }}>{t("nav.arabic", lang)}</button>
            <button type="button" onClick={() => { setOpen(false); setLang("en"); }}>{t("nav.english", lang)}</button>
          </div>
          
        </div>
      )}
    </div>
   </div>
  );
}