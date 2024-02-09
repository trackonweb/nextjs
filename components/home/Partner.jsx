import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className=" ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center lg:mx-20 mx-4 pt-10 gap-8">
          <div className="">
            <Image src={"/connected-world-concept-illustration_114360-3027.avif"} width={500} height={300} alt="" className="object-contain" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
            <h3 className="text-[#2f327d] lg:text-[34px] text-[28px] font-[600] tracking-wide">
              Your Partner for<br/> <span className="text-[#0588b0] ">Software </span> Innovation
            </h3>
            <span className="text-[16px] text-[#6d6d6d] font-normal tracking-wide leading-7 text-justify">As your dedicated partner for software innovation, Trackonweb delivers advanced solutions tailored to your business needs, understanding the critical role of technology in today's dynamic business landscape. Our passion lies in creating innovative, customized software solutions.</span>
            <span className="text-[16px] text-[#6d6d6d] font-normal tracking-wide leading-7 text-justify">At Trackonweb, our skilled professionals combine technical excellence with a deep understanding of business processes, ensuring our solutions not only meet but exceed your expectations. Whether simplifying operations, improving user experiences, or embarking on digital improvement, we have the knowledge and experience to guide you every step of the way.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
