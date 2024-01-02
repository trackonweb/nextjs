import Image from 'next/image';
import React from 'react'
import { MdVerified } from "react-icons/md";
const WhyTrackonweb = () => {
  return (
    <div className=' '>
    <div className='container mx-auto'>
     <div className='flex flex-col lg:flex-row justify-center lg:items-start items-center xl:mx-20 lg:mx-10 mx-4 pt-20 gap-8'>
        <div className='lg:w-1/2 w-full'>
            <Image src={'/curiosity-people-concept-illustration_114360-11034.avif'} width={600} height={400} alt=''/>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
            <h3 className='text-[#2f327d] text-[34px] font-[700]'>Why <span className='text-[#0588b0] '>Trackonweb</span></h3>
            <span className="text-[16px] text-[#6d6d6d] font-medium leading-7 text-justify">TrackOnWeb IT Solutions is not just a service provider; we're your strategic ally in the digital realm. Experience the difference as we work together to elevate your digital presence, drive innovation, and position your business for sustained success. Partner with TrackOnWeb — where your vision meets our expertise.</span>
            <span className="text-[16px] text-[#6d6d6d] font-medium leading-7 text-justify">At TrackOnWeb, we understand that every business is unique. Our solutions are meticulously crafted to align with your specific needs, ensuring a customized approach that resonates with your goals and objectives.</span>
            <span className="text-[16px] text-[#6d6d6d] font-medium leading-7 text-justify">Embrace the era of digital transformation with confidence. Our team of experts specializes in guiding businesses through the complexities of modernization, helping you unlock new opportunities and efficiencies. Your success is our success. TrackOnWeb is committed to a customer-centric approach, fostering open communication and collaboration throughout our partnership. Your satisfaction is our top priority.</span>
        </div>
     </div>
    </div>
    </div>
  )
}

export default WhyTrackonweb
