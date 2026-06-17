import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/سلايدر-رييسي4.jpg";
import logo8 from "../../../public/1757769421.jpg";
import logo9 from "../../../public/1726026550.jpeg";
import { FaArrowRight } from 'react-icons/fa';

export default function Page() {
  return (
   <>
   
    <div className="w-[20%]  flex items-start ms-[60px] gap-2 my-5 text-gray-400  mt-20">
  <Link href={"/"}>HOME</Link>
  <span>/</span>
  <Link href={""} className="whitespace-nowrap">
  Projects
</Link>
</div>

<div className="border border-amber-700"></div>



  <div className="mx-auto mt-10  my-5 gap-5 ">

  <div className="relative w-full h-[450px] rounded-2xl overflow-hidden mx-auto">
    
  <video
    src="/Saudi Arabia.mp4"
    autoPlay
    muted
    loop
    playsInline
    controls
    className="w-full h-full object-cover rounded-2xl"
  />

  <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
</div>


   <div className="w-full mx-auto text-xl mt-10">

    <h1 className="text-center font-bold text-4xl text-[#1d2e64] mb-2"> نبني مشاريع تصنع المستقبل </h1>

    <p className='bg-gray-100 p-4 text-2xl text-right'>بغض النظر عن حجم المشروع أو نطاقه، نحن ملتزمون تمامًا أمام عملائنا. كفريق واحد، نصغي باهتمام إلى أهدافك واحتياجاتك. تعتمد عملية تطوير استراتيجياتنا على متطلبات عملك. نقوم بمتابعة أداء شركتنا بانتظام. ولا يوجد ما نفضّله أكثر من كسب ثقتك وبناء علاقة ناجحة وطويلة الأمد معك. تنوعت مشاريعنا لتشمل مجالات متعددة من البنية التحتية والطرق والجسور، إلى مشاريع الصرف الصحي وشبكات المياه، وصولاً إلى المرافق الرياضية والتجارية والخدمية. نمتلك خبرة واسعة في تنفيذ المشاريع الإنشائية الثقيلة، والأعمال المدنية المعقدة، وكذلك المشاريع الخدمية التي تخدم المجتمع بشكل مباشر. يتيح لنا هذا التنوع تصميم حلول مرنة ومتكاملة تناسب احتياجات كل عميل على حدة، مع الحفاظ على أعلى معايير الجودة والسلامة في مختلف القطاعات. نحن نفخر بقدرتنا على إدارة مشاريع متنوعة في طبيعتها ومتباينة في متطلباتها ضمن بيئات عمل متعددة التحديات

</p>
   </div>

 </div>
   




   <div className="bg-white p-5">

     <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
        {/* CARD */}
        <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer">
    
          <Image
            src={logo8}
            alt="project"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
    
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
    
          {/* content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
    
           <h3 className="text-3xl font-normal max-w-[350px] leading-tight">
             Royal Commission for Jubail and Yanbu
                </h3>
    
            <div className="flex items-center gap-2 ">
              <p className=" mt-2 line-clamp-3 ">
                Royal Commission for Jubail and Yanbu(

              Electrical installations, roads and bridges...
                
            </p>
    
            <div className="flex justify-end mt-4">
             <button className="w-10 h-10 rounded-full border border-[#B5862F]
               text-[#B5862F] flex items-center justify-center bg-[#B5862F] text-white transition">
                <FaArrowRight />
              </button>
            </div>
            
            </div>
    
          </div>
        </div>
    
        {/* CARD 2 */}
        <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer">
          <Image src={logo9} alt="project" fill className="object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/40"></div>
    
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            <h3 className="text-4xl font-normal">
              Jeddah Stadium Project
            </h3>
    
           <div className="flex items-center gap-2 ">
    
             <p className=" mt-2 line-clamp-3">
               Jeddah Stadium Project with
              FIFA specs, retractable roof, cooling for stands,36
            </p>
    
            <div className="flex justify-end mt-4">
               <button className="w-10 h-10 rounded-full border border-[#B5862F]
               text-[#B5862F] flex items-center justify-center bg-[#B5862F] text-white transition">
                <FaArrowRight />
              </button>
            </div>
           </div>
    
    
          </div>
        </div>
    
        {/* CARD 3 */}
        <div className="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer">
          <Image src={logo} alt="project" fill className="object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/40"></div>
    
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
            <h3 className="text-3xl font-norml">
              Tunnels and Bridges Works
            </h3>
    
           <div className="flex items-center gap-2 ">
    
             <p className=" line-clamp-3">
              Tunnels and bridges Works,storm water
              protection systems, historicoal and coastal deve.....
             
            </p>
    
            <div className="flex justify-end mt-4">
              <button className="w-10 h-10 rounded-full border border-[#B5862F]
               text-[#B5862F] flex items-center justify-center bg-[#B5862F] text-white transition">
                <FaArrowRight />
              </button>
           </div>
    
            </div>
          </div>
        </div>
    
      </div>
   </div>
   
   </>
  )
}