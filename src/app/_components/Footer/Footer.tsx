import React from 'react'
import logo from "../../../../public/logo_20250913_103209.svg";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className='bg-[#1b2e37]  p-10'>

        <div className="w-[90%] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">

            <div className="flex flex-col gap-3 items-start">
            <h2 className='text-2xl font-bold mb-2 text-white'>Website sections</h2>

            <div className=" flex flex-col gap-3 items-start text-white">

              <Link href="/">Home</Link>
            <Link href="/about">About Sama</Link>
            <Link href="/Projects">Project</Link>
            <Link href="/Contact">Contact Us</Link>
            </div>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2 ">
                Sectors
                </h3>

                <Link href="/civil-division">Civil division</Link>
                <Link href="/military-divisions">Military divisions</Link>
                <Link href="/medical-divisions">Medical divisions</Link>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                Civil division
                </h3>
                <button>Construction and Building</button>
                <button>Electromechanics</button>
                <button>Energy</button>
            </div>

            <div className="flex flex-col gap-3 items-start text-white">
                <h3 className="text-2xl font-bold mb-2">
                Projects
                </h3>

                <button>Royal Commission for Jubail and</button>
                <button>Yanbu</button>
                <button>Jeddah Stadium Project</button>
                <button>Tunnels and Bridges Works</button>
            </div>
        </div>


         <div className="w-[90%] mx-auto h-0.5 bg-gray-600"></div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">

        {/* Logo + Contact */}
        <div className="flex items-center gap-3 p-3 text-white">

        <Image src={logo} alt="logo" width={150} height={80} className="invert brightness-0"/>
              
          <div>
            <h4 className="font-semibold">0558240153</h4>
            <p className="text-sm">contact@samaholding.com</p>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex flex-col items-center justify-center gap-2 p-3 text-white">
          <h5 className="font-semibold">Privacy Policy</h5>
          <p className="text-sm">All rights reserved</p>
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
