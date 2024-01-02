import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa6";

const Acheivements = () => {
  return (
    <div className={`bg-[url('/abstract-white-grey-gradient-geometric-shape-futuristic-technology-background_131186-1828.jpg')] bg-cover bg-center `}>
       <div className='container mx-auto'>
       <div
          className={`flex  flex-col gap-3 justify-center items-center  py-10 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]">
            Why <span className="text-[#0588b0]">Trackonweb</span>
          </h3>
          <span className='py-5px px-10px bg-[#2f327d] w-[180px] h-[5px]'></span>
        </div>
      <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-10 xl:px-20 lg:px-10 px-4 py-16'>
            <div className='flex flex-col justify-center  items-center gap-5 group hover:shadow-2xl hover:shadow-white  rounded-md  hover:scale-110 duration-500 py-4'>
             <span className=' group-hover:bg-[#0588b0] duration-500 rounded-full p-[35px] bg-[#64dfcb]'>
                <FaFlag className='text-[40px] text-white '/>
             </span>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h4 className='text-[20px] text-[#2f327d] font-semibold'>Teaching Experience</h4>
             <span className='text-[15px] font-medium text-center leading-7'>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as […]</span>
            </div>
            </div>

            <div className='flex flex-col justify-center group  items-center gap-5  hover:shadow-2xl rounded-md  hover:shadow-white hover:scale-110 duration-500 py-4' >
             <span className=' group-hover:bg-[#0588b0]  duration-500 rounded-full p-[35px] bg-[#64dfcb] '>
                <FaUserGroup className='text-[40px] text-white '/>
             </span>
             <div className='flex flex-col justify-center items-center gap-3'>
             <h4 className='text-[20px] text-[#2f327d] font-semibold'>Best Industry Experts</h4>
             <span className='text-[15px] font-medium text-center leading-7'>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as […]</span>
             </div>
            </div>

            <div className='flex flex-col justify-center group items-center gap-5 hover:shadow-2xl hover:shadow-white rounded-md hover:scale-110 duration-500 py-4'>
             <span className=' group-hover:bg-[#0588b0] duration-500 rounded-full p-[35px] bg-[#64dfcb]'>
                <FaCodepen className='text-[40px] text-white  '/>
             </span>
             <div className='flex flex-col justify-center items-center gap-3'>
             <h4 className='text-[20px] text-[#2f327d] font-semibold'>We Have Best Skills</h4>
             <span className='text-[15px] font-medium text-center leading-7'>Just in case there is anyone looking for it, new expertise to our knowledge base to make you happy as […]</span>
             </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Acheivements
