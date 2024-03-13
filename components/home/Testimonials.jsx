import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar , FaQuoteLeft} from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className={`bg-white pt-20 lg:pt-8 pb-28 `}>
      <div className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center space-y-2 lg:py-10 pb-6 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[600] tracking-wide'>Our <span className='text-[#0588b0]'>Testimonials</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-normal tracking-wide'> -- Our Clients Love Us ! Read What They Have To Say --
</span>
        </div>
        <div className={`grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
    
  <div className="parrent flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px]">
    <div className="child"><FaQuoteLeft className='text-[30px] text-[#0588b0]'/></div>
    <div className="flex flex-col justify-center items-center gap-2">
      <p className='text-[16px]  font-roboto text-black/60 text-justify'>A big appreciation to Trackonweb! Their customer support and availability ensured my satisfaction! Highly recommend.</p>
      <h3 className='text-[16px] font-roboto font-bold tracking-wide'>Shamsher Singh</h3>
      <p className='text-[16px] font-roboto text-black/60 font-medium tracking-wide'>Marketing</p>
    </div>
  </div>
  <div className="parrent flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px]">
    <div className="child"><FaQuoteLeft className='text-[30px] text-[#0588b0]'/></div>
    <div className="flex flex-col justify-center items-center gap-2">
      <p className='text-[16px]  font-roboto text-black/60 text-justify'>Trackonweb's team exhibits commendable dedication. Their unique ideas and strategic approaches significantly enhance the strength of my company</p>
      <h3 className='text-[16px] font-roboto font-bold tracking-wide'>Vicky Choudhary</h3>
      <p className='text-[16px] font-roboto text-black/60 font-medium tracking-wide'>Marketing</p>
    </div>
  </div>
  <div className="parrent flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px]">
    <div className="child"><FaQuoteLeft className='text-[30px] text-[#0588b0]'/></div>
    <div className="flex flex-col justify-center items-center gap-2">
      <p className='text-[16px]  font-roboto text-black/60 text-justify'>Impressive results! The company consistently delivers on promises, making them a trusted ally in our business journey</p>
      <h3 className='text-[16px] font-roboto font-bold tracking-wide'>Raj Kishan</h3>
      <p className='text-[16px] font-roboto text-black/60 font-medium tracking-wide'>Marketing</p>
    </div>
  </div>
 


        </div>
      </div>
    </div>
  );
};

export default Testimonials;
