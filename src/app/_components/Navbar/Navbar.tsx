"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "../../../../public/logo_20250913_103209.svg";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
   <div className="w-full bg-white fixed top-0 left-0 z-50">

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
                  {t.nav.home}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={pathname === "/about" ? "nav-active" : "nav-link"}>
                  {t.nav.about}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/civil-division" className={pathname === "/civil-division" ? "nav-active" : "nav-link"}>
                  {t.nav.civilDivision}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/military-divisions" className={pathname === "/military-divisions" ? "nav-active" : "nav-link"}>
                  {t.nav.militaryDivisions}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/medical-divisions" className={pathname === "/medical-divisions" ? "nav-active" : "nav-link"}>
                  {t.nav.medicalDivisions}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Projects" className={pathname === "/Projects" ? "nav-active" : "nav-link"}>
                  {t.nav.projects}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className={pathname === "/careers" ? "nav-active" : "nav-link"}>
                  {t.nav.careers}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Contact" className={pathname === "/Contact" ? "nav-active" : "nav-link"}>
                  {t.nav.contactUs}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>

        {/* RIGHT SIDE - Language Switcher */}
        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
      </NavigationMenu>

      {/* ✅ mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 z-50">

          <Link onClick={() => setOpen(false)} href="/">{t.nav.home}</Link>
          <Link onClick={() => setOpen(false)} href="/about">{t.nav.about}</Link>
          <Link onClick={() => setOpen(false)} href="/civil-division">{t.nav.civilDivision}</Link>
          <Link onClick={() => setOpen(false)} href="/military-divisions">{t.nav.militaryDivisions}</Link>
          <Link onClick={() => setOpen(false)} href="/medical-divisions">{t.nav.medicalDivisions}</Link>
          <Link onClick={() => setOpen(false)} href="/projects">{t.nav.projects}</Link>
          <Link onClick={() => setOpen(false)} href="/careers">{t.nav.careers}</Link>
          <Link onClick={() => setOpen(false)} href="/contact">{t.nav.contactUs}</Link>
          
          <div className="border-t border-gray-300 pt-4 mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
   </div>
  );
}