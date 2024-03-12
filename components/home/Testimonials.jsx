import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar , FaQuoteLeft} from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className={`bg-white py-20 `}>
      <div className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center space-y-2 lg:py-10 pb-6 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[600] tracking-wide'>Our <span className='text-[#0588b0]'>Testimonials</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-normal tracking-wide'> -- Our Clients Love Us ! Read What They Have To Say --
</span>
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
        <div className="flex flex-col  justify-center  items-start p-[25px] gap-5 flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md"
                    >
            <div className='flex justify-start items-start gap-5'>
              
              
                </div>
            <div className='flex flex-col gap-3'>
                <FaQuoteLeft className='text-[18px] text-blue-400'/>
                <span className='text-[18px] italic font-normal tracking-wide'>A big appreciation to Trackonweb! Their customer support and availability ensured my satisfaction! Highly recommend.</span>
               
                
            </div>

            <div className='flex flex-col gap-1 justify-center items-start'>
               <span className='lg:text-[18px] text-[14px] font-[600] tracking-wide'>Shamsher Singh </span>
                <span className='text-[14px] font-medium tracking-wide'> Marketing</span>
                <span className='flex justify-start items-center gap-1'>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                </span>
               </div>
       
          </div>
          <div className="flex flex-col  justify-start  items-start p-[25px] gap-5 flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md"
                    >
            <div className='flex justify-start items-start gap-5'>
                
              
                </div>
            <div className='flex flex-col gap-3'>
                <FaQuoteLeft className='text-[18px] text-blue-400'/>
                <span className='text-[18px] italic font-normal tracking-wide'>{`Trackonweb's team exhibits commendable dedication. Their unique ideas and strategic approaches significantly enhance the strength of my company`}</span>
               
                
            </div>
            <div className='flex flex-col gap-1 justify-center items-start'>
               <span className='lg:text-[18px] text-[14px] font-[600] tracking-wide'>Vicky Choudhary</span>
                <span className='text-[14px] font-medium tracking-wide'> Marketing</span>
                <span className='flex justify-start items-center gap-1'>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                </span>
               </div>
           
       
          </div>
          <div className="flex flex-col  justify-start  items-start p-[25px] gap-5 flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md"
                    >
            <div className='flex justify-start items-start gap-5'>
                
              
                </div>
            <div className='flex flex-col gap-3'>
                <FaQuoteLeft className='text-[18px] text-blue-400'/>
                <span className='text-[18px] font-normal tracking-wide italic'>Impressive results! The company consistently delivers on promises, making them a trusted ally in our business journey</span>
               
                
            </div>
            <div className='flex flex-col gap-1 justify-center items-start'>
               <span className='lg:text-[18px] text-[14px] font-[600] tracking-wide' >Raj Kishan</span>
                <span className='text-[14px] font-medium tracking-wide'> Marketing</span>
                <span className='flex justify-start items-center gap-1'>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                    <FaStar className='text-yellow-300'/>
                </span>
               </div>
           
       
          </div>
       

          

        
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
