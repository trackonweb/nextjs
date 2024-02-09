import React from "react";
import { FaGraduationCap , FaDollarSign  ,FaInfinity } from "react-icons/fa";

function Objectives() {
  return (
    
    <div className={`bg-[url('/stacked-waves-haikei.png')] bg-cover bg-center `}>
      <div className="container mx-auto">
      <div
          className={`flex  flex-col gap-3 justify-center items-center  py-20 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]">
          Our Objectives <span className=""></span>
          </h3>
          <span className='text-[16px] lg:text-[20px] font-medium text-[#0588b0] text-center'>Focused outcomes for student success</span>
         
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start lg:gap-10 gap-16 xl:px-20 lg:px-10 px-4 py-16">
          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <span className="text-black capitalize font-semibold text-[20px]">
              Learner focused
              </span>
              <span className="text-center text-[16px]">
              Our belief is to provide unique guidance to each learner to prepare students for success in their chosen fields
              </span>
            </div>

            <div className="absolute top-[-15%] left-[37%] p-[40px] rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
             
            </div>
            <div className="absolute top-[-5%] left-[44%]">
            <FaGraduationCap className="text-[34px]  text-white rotate-0" />
            </div>
          </div>
          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
  <div className="flex flex-col justify-center items-center gap-4 ">
    <span className="text-black capitalize font-semibold text-[20px]">
    Cost-Effective Learning
    </span>
    <span className="text-center text-[16px]">
    Every student can access affordable and quality education options with Trackonweb for their career development.
    </span>
  </div>

  <div className="absolute top-[-15%] left-[37%] p-[40px] transform rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
  
  </div>

  <div className="absolute top-[-5%] left-[44%]">
    <FaDollarSign    className="text-[34px]  text-white rotate-0" />
  </div>
</div>

          <div className="bg-white relative flex-1 py-16 px-[40px] shadow group">
            <div className="flex flex-col justify-center items-center gap-4 ">
              <span className="text-black capitalize font-semibold text-[20px]">
              Lifetime Access
              </span>
              <span className="text-center text-[16px]">
              We are available 24/7 for our learners, providing access to our study materials and projects for lifelong learning
              </span>
            </div>

            <div className="absolute top-[-15%] left-[37%] p-[40px] rotate-45 group-hover:rotate-0 duration-500 bg-[#0588b0] text-white">
             
            </div>
            <div className="absolute top-[-5%] left-[44%]">
             <FaInfinity className="text-[34px]  text-white rotate-0" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
