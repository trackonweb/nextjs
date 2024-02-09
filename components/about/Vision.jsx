import Image from 'next/image'
import React from 'react'

const Vision = () => {
  return (
    <div className=''>
     <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 xl:mx-20 lg:mx-10 mx-4 py-10'>
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-start '>
         <h3 className='text-[#2f327d]  text-[28px] font-[700]'>Our Vision</h3>
         <span className='lg:text-[16px] text-[14px] font-medium text-justify leading-7 pt-3'>To pioneer transformative software solutions that redefine industries, driving innovation, and enhancing global connectivity. We aspire to be a catalyst for technological advancement, envisioning a world where our expertise in software development empowers businesses, fosters growth, and creates sustainable value for all stakeholders.</span>
         <h3 className='text-[#2f327d]  text-[28px] font-[700] pt-4'>Our Mision</h3>
         <span className='lg:text-[16px] text-[14px] font-medium text-justify leading-7 pt-3'>Our mission is to deliver unparalleled software craftsmanship, blending creativity and technology to craft bespoke solutions. We aim to exceed client expectations by prioritizing transparency, embracing flexibility, and upholding the highest standards of quality and professionalism. We strive to empower businesses, fostering long-term success through innovative, tailored software development services"</span>
        </div>
        <div className='lg:w-1/2 w-full  flex  justify-center items-start '>
         <div className='border-l-8 border-l-lime-400 rounded-l-full bg-black'>
         <Image src={'/data-analytics-character-illustration-editable-vector_203633-4198-removebg-preview.png'} width={400} height={400} className='object-contain'/>
         </div>
      </div>
      
        
        </div>
        
     </div>
    </div>
  )
}

export default Vision
