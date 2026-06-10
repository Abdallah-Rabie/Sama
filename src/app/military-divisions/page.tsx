import React from 'react'
import logoo from "../../../public/1757943743.jpg";
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
<>

<div className="relative w-full lg:w- h-30">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>

 <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
    Military divisions
  </h2>   
  </div>

<div className="w-full flex items-start gap-2 px-4 md:px-16 my-5 text-gray-400">
  <Link href={"/"}>HOME</Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
    Military divisions
  </Link>
</div>

<div className="border border-amber-700"></div>


<div className="w-[90%] mx-auto py-8">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div className='bg-gray-100 h-[400px] p-2'>
      <h2 className="text-3xl font-normal mb-4"> Military divisions </h2>

      <p className="leading-6 font-normal">
       At Sama Holding, we deliver end-to-end solutions for defense facilities and mission-critical infrastructure—from planning and design to construction, commissioning, and operations—under strict safety and confidentiality. Our scope covers bases, training facilities, logistics depots, and C2 centers, alongside physical security, surveillance and access control, utilities (power, water, fuel), and redundant systems to ensure readiness and continuity. Multidisciplinary teams (civil/architectural/MEP/low-current & networks) integrate systems to deliver scalable, highly reliable outcomes. We focus on: Compliance with national/international standards and robust risk management. 24/7 readiness through redundancy, backup, and operational resilience. Information and systems security with controlled access and continuous monitoring. Quality, safety, and on-time delivery by vetted teams for high-sensitivity sites.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-[400px]">
      <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
    </div>

  </div>

</div>



<div className="w-[90%] mx-auto py-8 ">

<h3 className='text-black text-lg my-5'>Sama works in advanced military and security industries...</h3>

<p>Sama operates in the field of advanced military and security industries,
   offering a wide range of services and advanced technical solutions:
   </p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3">

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Countering unmanned aerial vehicles <br></br>
        (UAVs)
        </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Unmanned aerial vehicles (UAVs)</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Military training </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Mine and explosive ordnance removal</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Various military services</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Personal protective equipment</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Surveillance: Closed-circuit television<br/> (CCTV) cameras</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Fixed-focus Internet Protocol (IP) cameras</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Thermal cameras, autofocus cameras</p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Video networks </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Electronic access control </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Facial recognition and biometric<br/> verification </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Operations center video wall, technical <br/>furniture </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Intelligent traffic management </p>
    </div>

    <div className="bg-gray-200 p-4 text-center border-2 border-black">
      <p>Site security - fencing, barriers </p>
    </div>


   </div>
</div>

</>  )
}
