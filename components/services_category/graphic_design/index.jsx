import Image from "next/image";
import Link from "next/link";
import React from "react";
import Graphic from "../../../public/graphic1.png"


const GraphicDesignServices = () => {
  return (
    <div className={`bg-gradient-to-r from-[#0588b0] to-[#0588b0] via-black-28  `}>
      <div className="container mx-auto ">
       <div className="xl:mx-20 lg:mx-10  mx-4">
       <div className="flex  justify-between gap-7 items-center w-full h-full pt-28 pb-20 ">
            <div className=" md:w-1/2 w-full flex flex-col justify-start items-start  gap-4">
            <span className="text-white capitalize  lg:text-[32px] text-[22px] font-bold tracking-wider ">
            Creative and Budget-Friendly Graphic Design Solutions 
            </span>
            <span className="text-white lg:text-[17px] text-[14px] mt-3">
            Revamp your brand's look with Trackonweb creative and cost-effective graphic design solutions. Our skilled team specializes in transforming ideas into captivating visuals, propelling your brand to new heights. Explore our excellent services tailored for different industries, including Logo Design, Branding, Print, Digital Media, Web Design, Packaging, Motion Graphics, Illustrations, Infographics, Typography, Social Media Graphics, Environmental Graphics, UI/UX Design, and Marketing Collateral. Let Trackonweb partner with you to bring your design dreams to life!
            </span>
          <div className="mt-7 flex justify-start items-start">
          <Link
                href={"/contact"}
                class="hover:text-white border hover:bg-transparent border-white bg-white text-[#0588b0] duration-500 transition-all font-medium shadow-md rounded-md lg:text-[16px] text-[12px] px-8 py-3 text-center flex justify-center items-start uppercase tracking-wide"
              >
                let's connect
              </Link>
          </div>
            </div>
            <div className=" hidden md:flex w-1/2">
                <div className="">
                <Image
              src={Graphic}
            
              alt="Graphic design "
              className="object-cover"
            />
                </div>
            </div>
        </div>
       </div>
       
      </div>
    </div>
  );
};

export default GraphicDesignServices;
