"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const services = [
  {
    id: 1,
   title: 'Web Development',
   description: `Considering taking your business online? Feel free to reach out! We're more than just a website builder – we're here to connect your dreams with reality.`,
   img: '/4421964-removebg-preview.png',
   alt: 'Web Development',
   link: `/explore-services/webdevelopment`,
  },
  {
    id: 2,
   title: 'Digital Marketing',
   description: `Boost your business's online presence! Get budget-friendly marketing to connect with a wide and targeted audience. Utilize (SMM), (SEO), PPC ads, and more`,
   img: '/concept-of-seo-ranking.svg',
   alt: 'Digital Marketing',
   link: `/explore-services/digital_marketing`,
  },
  {
    id: 3,
   title: 'Graphic Design',
   description: 'Graphics that attractively convey your message: Represent your brand with creatively designed graphics, ensuring the best visual communication experience.',
   img: '/website-designing.svg',
   alt: 'Graphic Design',
   link: `/explore-services/graphic_design`,
  },
]

const Services = () => {

  const router = useRouter();

  const handleServices = () =>{
    router.push('/explore-services')
  }
  
  return (
    <div className={`bg-[url('/layered-waves-haikei.svg')] bg-cover bg-center  py-20 `} >
      <div className="container mx-auto">
      <div className={`flex flex-col justify-center items-center space-y-2 pb-10  `}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[600] tracking-wide'>Our <span className='text-[#0588b0]'>Services</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-normal tracking-wide'>We Provide Best-In-Class Services for Businesses and Individuals</span>
        </div>
       
        <div
          className={`grid lg:gap-5 gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4 pt-9`}
        >
          {
            services.map((item,index)=>{
              return <div  key={index} className="relative flex lg:w-80 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-[#64dfcb]">
              <div className=" overflow-hidden  flex justify-center  items-center  ">
                         <img src={item.img} alt={item.alt} className="w-full object-contain"/>
                        </div>
              </div>
              <div className="p-6">
                <Link href={item.link} className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased hover:text-[#64dfcb] duration-500">
                {item.title}
                </Link>
                <p className="block  text-base font-normal leading-relaxed tracking-wide text-inherit antialiased"> 
                {item.description}  
                </p>
              </div>
              <div className="mt-auto px-6 pb-6">
                <Link href={item.link} data-ripple-light="true"  className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-cyan-700 transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] focus:bg-cyan-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Read More
                </Link>
              </div>
            </div>
            })
          }
      


        </div>
      </div>
    </div>
  );
};

export default Services;
