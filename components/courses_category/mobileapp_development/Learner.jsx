import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar , FaQuoteLeft} from "react-icons/fa6";

const Learner = () => {
  return (
    <div className={`bg-[#2f327d] py-20 `}>
    <div className='container mx-auto'>
    <div className={`flex flex-col justify-center items-center space-y-2  pb-16 mx-4`}>
        <h3 className='text-white text-center lg:text-[34px] text-[28px] font-[700]'>What Learners Say About Mobile App Development Course!</h3>
      
      </div>
      <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
      <div className="flex flex-col  justify-start  items-start p-[25px] gap-5 flex-[1 0 0] border cursor-pointer  bg-[rgba(255, 255, 255, 0.80)]  shadow-md"
                  >
          
          <div className='flex flex-col gap-3'>
              <FaQuoteLeft className='text-[18px] text-blue-400'/>
              <span className='text-[18px] text-white  leading-7'>I started as a beginner. Eventually, I feel really comfortable and confident with web development.I started as a beginner. Eventually, I feel really comfortable and confident with web development.</span>
             
              
          </div>

          <span className='text-white text-[22px] font-medium tracking-wider'>Rajkumar</span>

         
     
        </div>
        <div className="flex flex-col  justify-start  items-start p-[25px] gap-5 flex-[1 0 0] border cursor-pointer  bg-[rgba(255, 255, 255, 0.80)]  shadow-md"
                  >
          
          <div className='flex flex-col gap-3'>
              <FaQuoteLeft className='text-[18px] text-blue-400'/>
              <span className='text-[18px] text-white  leading-7'>I started as a beginner. Eventually, I feel really comfortable and confident with web development.I started as a beginner. Eventually, I feel really comfortable and confident with web development.</span>
             
              
          </div>

          <span className='text-white text-[22px] font-medium tracking-wider'>Rajkumar</span>

         
     
        </div> 
        <div className="flex flex-col  justify-start  items-start p-[25px] gap-5 flex-[1 0 0] border cursor-pointer  bg-[rgba(255, 255, 255, 0.80)]  shadow-md"
                  >
          
          <div className='flex flex-col gap-3'>
              <FaQuoteLeft className='text-[18px] text-blue-400'/>
              <span className='text-[18px] text-white  leading-7'>I started as a beginner. Eventually, I feel really comfortable and confident with web development.I started as a beginner. Eventually, I feel really comfortable and confident with web development.</span>
             
              
          </div>

          <span className='text-white text-[22px] font-medium tracking-wider'>Rajkumar</span>

         
     
        </div>
     

        

      
      </div>
    </div>
  </div>
  )
}

export default Learner
