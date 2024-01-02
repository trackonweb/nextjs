import React from "react";
import { FaChartLine } from "react-icons/fa";
import { SiScrollreveal } from "react-icons/si";
import { AiOutlineFolderOpen } from "react-icons/ai";
function Objectives() {
  return (
    
    <div className="bg-[#fff6f3]">
      <div className="container mx-auto">
        <div
          className={`flex flex-col  justify-center items-center gap-3  py-10 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]">
            Our <span className="text-[#0588b0]">Objectives</span>
           
          </h3>
          <span className='py-5px px-10px bg-[#2f327d] w-[180px] h-[5px]'></span>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start lg:gap-10 gap-16 xl:px-20 lg:px-10 px-4 py-16">
          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <span className="text-black capitalize font-semibold text-[20px]">
                Officially The Best
              </span>
              <span className="text-center text-[16px]">
                Just in case there is anyone looking for it, new expertise to
                our knowledge base to make you happy as well.
              </span>
            </div>

            <div className="absolute top-[-15%] left-[37%] p-[40px] rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
             
            </div>
            <div className="absolute top-[-5%] left-[44%]">
            <FaChartLine className="text-[34px]  text-white rotate-0" />
            </div>
          </div>
          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
  <div className="flex flex-col justify-center items-center gap-4 ">
    <span className="text-black capitalize font-semibold text-[20px]">
      Redesigned Website
    </span>
    <span className="text-center text-[16px]">
      Just in case there is anyone looking for it, new expertise to
      our knowledge base to make you happy as well.
    </span>
  </div>

  <div className="absolute top-[-15%] left-[37%] p-[40px] transform rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
  
  </div>

  <div className="absolute top-[-5%] left-[44%]">
    <SiScrollreveal className="text-[34px]  text-white rotate-0" />
  </div>
</div>

          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <span className="text-black capitalize font-semibold text-[20px]">
              We Are Launching
              </span>
              <span className="text-center text-[16px]">
                Just in case there is anyone looking for it, new expertise to
                our knowledge base to make you happy as well.
              </span>
            </div>

            <div className="absolute top-[-15%] left-[37%] p-[40px] rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
             
            </div>
            <div className="absolute top-[-5%] left-[44%]">
             <AiOutlineFolderOpen className="text-[34px]  text-white rotate-0" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
