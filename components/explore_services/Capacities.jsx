import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";

const Capacities = () => {
  return (
    <div className="bg-[#f3f7fd] py-10">
      <div className="container mx-auto">
        <div
          className={`flex flex-col justify-center items-start space-y-1 xl:mx-20 lg:mx-10 mx-4 `}
        >
          <span className=" text-[#0588b0] text-start text-[20px] font-medium uppercase">
          Innovate extraordinary experiences with
          </span>

          <h3 className="text-[#2f327d] lg:text-[34px] text-[28px] font-[700] leading-10 tracking-wider">
            Our <span className="text-[#2f327d] "> Capabilities</span>
          </h3>
         
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10 xl:px-20 lg:px-10 px-4 py-16'>
            <div className='flex flex-col justify-center lg:items-start items-center gap-5'>
              
             <span className='border border-[#64dfcb] rounded-full p-4 '>
                <MdOutlineDesignServices className='text-[40px] text-[#64dfcb]'/>
             </span>
             <h4 className='text-[20px] text-[#2f327d] font-semibold'>Design Thinking</h4>
             <span className='text-[15px] font-medium text-start leading-7'>Our user centric approach challenges assumptions to define problems & experience</span>
            </div>

            <div className='flex flex-col justify-center lg:items-start items-center gap-5'>
             <span className='border border-[#64dfcb] rounded-full p-4 '>
                <MdOutlineDesignServices className='text-[40px] text-[#64dfcb]'/>
             </span>
             <h4 className='text-[20px] text-[#2f327d] font-semibold'>Technology Team</h4>
             <span className='text-[15px] font-medium text-start leading-7'>Our team of experts gets off the ground quickly on any technology & cloud</span>
            </div>

            <div className='flex flex-col justify-center lg:items-start items-center gap-5'>
             <span className='border border-[#64dfcb] rounded-full p-4 '>
                <MdOutlineDesignServices className='text-[40px] text-[#64dfcb]'/>
             </span>
             <h4 className='text-[20px] text-[#2f327d] font-semibold'>Engagement</h4>
             <span className='text-[15px] font-medium text-start leading-7'>We love to work closely with ourcustomers in a co-creation model</span>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Capacities
