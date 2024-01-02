import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
const Partner = () => {
  return (
    <div className=" ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center lg:mx-20 mx-4 py-10 gap-8">
          <div className="">
            <Image src={"/connected-world-concept-illustration_114360-3027.avif"} width={500} height={300} alt="" className="object-contain" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
            <h3 className="text-[#2f327d] lg:text-[34px] text-[28px] font-[700]">
              Your Partner for<br/> <span className="text-[#0588b0] ">Software </span> Innovation
            </h3>
            <span className="text-[16px] text-[#6d6d6d] font-medium leading-7 text-justify">As your dedicated partner for software innovation, we bring a wealth of expertise and a commitment to delivering cutting-edge solutions that drive your business forward. At Trackonweb, we understand the critical role that technology plays in today's dynamic business landscape, and we are passionate about crafting innovative software solutions tailored to your unique needs.Our team of skilled professionals combines technical excellence with a deep understanding of business processes, ensuring that our software solutions not only meet but exceed your expectations. Whether you are looking to streamline operations, enhance user experiences, or embark on a digital transformation journey, we have the knowledge and experience to guide you every step of the way.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
