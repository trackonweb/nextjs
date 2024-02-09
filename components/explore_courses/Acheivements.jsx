import React from 'react'

import { FaFlag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa6";

const Acheivements = () => {
  return (
    <div className={`bg-slate-100 `}>
       <div className='container mx-auto'>
       <div
          className={`flex  flex-col gap-3 justify-center items-center  py-20 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]">
          Trackonweb Course  <span className="">Benefits</span>
          </h3>
          <span className='text-[16px] lg:text-[20px] font-medium text-[#0588b0] text-center'>Practical skills for real-world success</span>
        </div>
      <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-10 xl:px-20 lg:px-10 px-4 pb-20'>
            <div className='flex flex-col justify-center  items-center gap-5 bg-white group hover:shadow-2xl hover:shadow-white  rounded-md  hover:scale-110 duration-500 px-4 py-6'>
             <span className=' group-hover:bg-[#0588b0] duration-500 rounded-full p-[35px] bg-[#64dfcb]'>
                <FaFlag className='text-[40px] text-white '/>
             </span>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h4 className='lg:text-[20px] text-[16px] text-[#2f327d] font-semibold'>Skill Development</h4>
             <span className='text-[15px] lg:font-medium font-normal text-center leading-7'>Courses offer hands-on training, real-world problem-solving, project experience, and case studies to deepen skill development.</span>
            </div>
            </div>

            <div className='flex flex-col justify-center group  items-center gap-5 bg-white  hover:shadow-2xl rounded-md  hover:shadow-white hover:scale-110 duration-500 px-2 py-6' >
             <span className=' group-hover:bg-[#0588b0]  duration-500 rounded-full p-[35px] bg-[#64dfcb] '>
                <FaUserGroup className='text-[40px] text-white '/>
             </span>
             <div className='flex flex-col justify-center items-center gap-3'>
             <h4 className='lg:text-[20px] text-[16px] text-[#2f327d] font-semibold'>Trained by experts</h4>
             <span className='text-[15px] lg:font-medium font-normal text-center leading-7'>Experts know what is best for you. Our experts provide guidance, support, and practical knowledge for your career development.</span>
             </div>
            </div>

            <div className='flex flex-col justify-center group items-center gap-5 bg-white  hover:shadow-2xl hover:shadow-white rounded-md hover:scale-110 duration-500 px-4 py-6'>
             <span className=' group-hover:bg-[#0588b0] duration-500 rounded-full p-[35px] bg-[#64dfcb]'>
                <FaCodepen className='text-[40px] text-white  '/>
             </span>
             <div className='flex flex-col justify-center items-center gap-3'>
             <h4 className='lg:text-[20px] text-[16px] text-[#2f327d] font-semibold'>Industry Exposure</h4>
             <span className='text-[15px] lg:font-medium font-normal text-center leading-7'>Students often feel overwhelmed when applying theory to real projects. Our guidance on live projects gives them confidence.</span>
             </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Acheivements
