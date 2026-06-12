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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={pathname === "/about" ? "nav-active" : "nav-link"}>
                  About Sama
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/civil-division" className={pathname === "/civil-division" ? "nav-active" : "nav-link"}>
                  Civil division
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/military-divisions" className={pathname === "/military-divisions" ? "nav-active" : "nav-link"}>
                  Military divisions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/medical-divisions" className={pathname === "/medical-divisions" ? "nav-active" : "nav-link"}>
                  Medical divisions
                </Link> 
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Projects" className={pathname === "/Projects" ? "nav-active" : "nav-link"}>
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className={pathname === "/careers" ? "nav-active" : "nav-link"}>
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Contact" className={pathname === "/Contact" ? "nav-active" : "nav-link"}>
                  Contact us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>


      </NavigationMenu>

      {/* ✅ mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 z-50">

          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/about">About Sama</Link>
          <Link onClick={() => setOpen(false)} href="/civil-division">Civil division</Link>
          <Link onClick={() => setOpen(false)} href="/military-divisions">Military divisions</Link>
          <Link onClick={() => setOpen(false)} href="/medical-divisions">Medical divisions</Link>
          <Link onClick={() => setOpen(false)} href="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} href="/careers">Careers</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact us</Link>
          
        </div>
      )}
    </div>
   </div>
  );
}