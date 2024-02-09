"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


const services = [
  {
    id: 1,
   title: 'Web Development',
   description: 'Thinking to step into online market? Don’t know how to get your website done? You need us! A place not only to build websites but instead bridge the gap between your dreams and reality.',
   img: '/4421964-removebg-preview.png',
   link: `/explore-services/webdevelopment`,
  },
  {
    id: 2,
   title: 'Digital Marketing',
   description: 'Working hard at business but expansion is still an issue? Our team is the solution you exactly want. Everything from Google ads to social media, market needs you and we are happy to help.',
   img: '/concept-of-seo-ranking.svg',
   link: `/explore-services/digital_marketing`,
  },
  {
    id: 3,
   title: 'Graphic Design',
   description: 'Our belief is in quality offering over any of the deliverables. Representing your brand with creatively designed graphics. Providing the best visual communication experience,',
   img: '/website-designing.svg',
   link: `/explore-services/graphic_design`,
  },
  {
    id: 4,
   title: 'Web Design',
   description: 'Thinking to step into online market? Don’t know how to get your website done? You need us! A place not only to build websites but instead bridge the gap between your dreams and reality.',
   img: '/webd.png',
   link: `/explore-services/web_design`,
  },
  {
    id: 5,
   title: 'Mobile App Development',
   description: `Using apps every day and thought of having one of your own, then why not?
        We convert your beautiful ideas into most efficient app.
        You dream it, we build it!`,
   img: '/4428861-removebg-preview.png',
   link: `/explore-services/mobile_app_development`,
  },
 
  {
    id: 6,
   title: 'UI & UX Design',
   description: 'Build tools that help businesses be successful? Let everyone know about it! We offer customized marketing for your software’s targeting specific audience that would be exactly the one’s you need.',
   img: '/0f09e09c-5c48-4301-b938-b09faf29d270.jpg',
   link: `/explore-services/ui_ux`,
  },
]

const AllServices = () => {
  return (
    <div className="bg-white lg:py-10">
    <div className="container mx-auto">
      <div
        className={`flex flex-col lg:flex-row  justify-between items-start space-y-1 xl:mx-20 lg:mx-10 mx-4 py-5 `}
      >
        <div>
        <span className=" text-[#0588b0] text-center text-[20px] font-medium uppercase">
          Our Services
        </span>
        
        <h3 className='text-[#2f327d] lg:text-[34px] text-[28px] font-[700] leading-10'>Our <span className='text-[#2f327d] '>Best-in-class Services</span></h3>
        <span className="text-[#696984] lg:text-center text-start lg:text-[22px] text-[16px] font-[400]">
        We provide quality service & support..
        </span>
        </div>
       
      </div>
     
      <div
        className={`grid lg:gap-y-16 gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4 pt-9`}
      >
        {
          services.map((item,index)=>{
            return <div  key={index} className="relative flex lg:w-80 w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-[#64dfcb]">
            <div className=" overflow-hidden  flex justify-center  items-center  ">
                       <img src={item.img} className="w-full object-contain"/>
                      </div>
            </div>
            <div className="p-6">
              <Link href={item.link} className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased hover:text-[#64dfcb] duration-500">
              {item.title}
              </Link>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased"> 
              {item.description}  
              </p>
            </div>
            <div className="mt-auto px-6 pb-6">
              <Link href={item.link} data-ripple-light="true" type="button" className="select-none rounded-lg bg-cyan-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-700 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] focus:bg-cyan-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
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

export default AllServices;
