import React from 'react'
import logoo from "../../../public/1757963794.jpg";
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
<>

<div className="relative w-full lg:w- h-30">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>

 <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
   Medical divisions  </h2>   
  </div>

<div className="flex items-start ms-16 gap-2 my-5 text-gray-400">
  <Link href={"/"}>HOME</Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  Medical divisions
</Link>

</div>

<div className="border border-amber-700"></div>


<div className="w-[90%] mx-auto py-8">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div className='bg-gray-100 h-full p-4'>
      <h2 className="text-3xl font-normal mb-4">Medical divisions</h2>

        <p className=" font-normal break-words text-lg">
At Sama Holding, we deliver healthcare projects end-to-end—from planning and design to construction, commissioning, and operations—prioritizing patient safety, operational efficiency, and regulatory compliance. We work across hospitals, specialty centers, clinics, laboratories, and pharmacies, integrating medical and engineering systems for high readiness and service continuity. We focus on: Evidence-based clinical flows (patient/staff/supply), infection control, and sterile zones. Specialized systems: medical gas networks, high-spec HVAC, operating and isolation rooms, imaging suites, clean rooms. Smart and low-current systems: nurse call, surveillance, BMS, and integration with HIS/PACS/LIS and data networks. Thorough commissioning, O&M plans, and technical support. Compliance with national and international standards (MoH, SFDA, NFPA, HTM) plus sustainability and energy efficiency.</p>
    </div>

    {/* IMAGE */}
    <div className="relative w-full h-[250px] sm:h-full">
      <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>
    </div>

  </div>

</div>




<div className="w-[90%] mx-auto py-8 ">

<p className=" text-xl  font-normal my-5">
Sama is a leader in the supply of healthcare services and the distribution of medical consumables, as well as all products related to dialysis and dental industries within the Kingdom of Saudi Arabia. It represents well-known global and local companies to distribute a wide range of products and provide healthcare providers with the latest solutions and technologies, along with high-quality services.
   </p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8 my-5">

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-lg'>
       Disposable consumables for dialysis <br/> procedures
        </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'>UVital-Dura bicarbonate</p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Dialysis</p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-lg'>Medical metro carts and emergency carts, and medicine distribution </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'> Laboratory and hospital furniture </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p  className='text-xl'>Spare parts for medical devices </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'>Haier medical refrigerators </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'>Medical products for individual use </p>
    </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'>Dental products and consumables </p>
    </div>
   </div>

    <div className="bg-gray-100 p-4 text-center rounded-[30px] hover:bg-[#1d2e64] transition duration-300 hover:text-white">
      <p className='text-xl'>Thermal cameras, autofocus cameras</p>
    </div>
</div>

</>  )
}
