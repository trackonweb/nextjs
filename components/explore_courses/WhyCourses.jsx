import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaUser, FaClock } from "react-icons/fa";

import { GoDotFill } from "react-icons/go";

const WhyCourses = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h3 className="text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700] xl:mx-20 lg:mx-10 mx-4 pt-10">
          Selecting Trackonweb Courses for
          <span className="text-[#0588b0]"> Career Growth: Here’s Why?</span>
        </h3>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 py-10 xl:mx-20 lg:mx-10 mx-4">
          <div className="flex flex-col justify-start items-center gap-10">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <span className="flex bg-[#0588b0] rounded-full  pr-7  justify-start items-center gap-2">
                <span className=" group-hover:bg-[#0588b0]  border-4 border-[#64dfcb] duration-500 rounded-full  p-[20px] bg-white">
                  <FaGraduationCap className="text-[20px] text-[#0588b0] " />
                </span>
                <h5 className="lg:text-[22px] text-[18px] text-white font-bold capitalize tracking-wider">
                  Quality Education
                </h5>
              </span>
              <ul className=" flex flex-col justify-center items-start gap-2">
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2">
                  <GoDotFill />
                  Experienced instructors and industry professionals.
                </li>
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2">
                  <GoDotFill />
                  Real-life projects and challenges of the real world
                </li>
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2">
                  <GoDotFill />
                  Stay updated with the latest industry trends.
                </li>
              </ul>
            </div>
            <div className=" w-full flex flex-col justify-start items-start gap-3">
              <span className="flex justify-start items-center gap-2 bg-[#0588b0] rounded-full  pr-7">
                <span className=" group-hover:bg-[#0588b0] border-4 border-[#64dfcb] duration-500 rounded-full p-[20px] bg-white ">
                  <FaUser className="text-[20px] text-[#0588b0] " />
                </span>
                <h5 className="lg:text-[22px] text-[18px] text-white font-bold capitalize tracking-wider">
                  Personalized Support
                </h5>
              </span>

              <ul className=" flex flex-col justify-center items-start gap-2">
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2 ">
                  <GoDotFill />
                  Dedicated mentors for guidance and support
                </li>
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2 ">
                  <GoDotFill />
                  Interactive discussions and Q&A sessions.
                </li>
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2 ">
                  <GoDotFill />
                  24x7 technical support and Interview preparation.
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <span className="flex justify-start items-center gap-2 bg-[#0588b0] rounded-full  pr-7">
                <span className=" group-hover:bg-[#0588b0]  border-4 border-[#64dfcb] duration-500 rounded-full p-[20px] bg-white">
                  <FaClock className="text-[20px] text-[#0588b0] " />
                </span>
                <h5 className="lg:text-[22px] text-[18px] text-white font-bold capitalize tracking-wider">
                  Flexible Learning Options
                </h5>
              </span>

              <ul className=" flex flex-col justify-center items-start gap-2">
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2 ">
                  <GoDotFill />
                  Choose from flexible schedules that suit your pace.
                </li>
                <li className="text-[16px]  font-medium  flex justify-start items-center gap-2">
                  <GoDotFill />
                  Access course materials anytime, anywhere
                </li>
                <li className="text-[16px]  font-medium flex justify-start items-center gap-2 ">
                  <GoDotFill />
                  Online/Offline classroom lectures and hands-on workshops.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/people-communication-design_24908-33822.jpg"
              height={600}
              width={600}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCourses;
