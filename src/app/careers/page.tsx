import React from 'react'
import logoo from "../../../public/1757673063.jpg";
import logo from "../../../public/IMG-20231220-WA0006.jpg";
import Image from 'next/image';
import Link from 'next/link';
export default function page() {
  return (
<>

<div className="relative w-full lg:w- h-30">
          <Image src={logoo} alt="logo" fill className="object-cover rounded-xl"/>

 <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
     Careers </h2>   
  </div>

<div className="w-[90%] mx-auto flex items-center gap-2 my-5 text-gray-400">
  <Link href={"/"}>HOME</Link>
  <span>/</span>
  <Link href={""}>Careers</Link>
</div>

<div className="border border-amber-700"></div>


<div className="w-[90%] mx-auto py-8 my-10">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">

    {/* TEXT */}
    <div>
      <h2 className="text-3xl font-bold mb-4">
        Careers
      </h2>

      <p className=" leading-8">
        At Sama Holding, we believe that our people are the foundation of
        our success. We are committed to attracting top talent and fostering
        an inspiring work environment that supports professional growth and
        development.
      </p>
    </div>

    {/* IMAGES */}
    <div className="flex flex-col gap-4">

      <Image  src={logoo} alt="logo" width={600} height={300} className="w-full h-[220px] object-cover rounded-xl"/>

      <Image src={logo} alt="logo" width={600}  height={300}  className="w-full h-[220px] object-cover rounded-xl" />

    </div>

  </div>

</div>


<div className="w-[90%] mx-auto py-8 my-10">


</div>


</> 

)
}
