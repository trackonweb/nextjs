import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobile from "../../../public/mobile1.png"


const AppDevelopmentServices = () => {
  return (
    <div className={`bg-gradient-to-r from-[#0588b0] to-[#0588b0] via-black-28  `}>
      <div className="container mx-auto ">
       <div className="xl:mx-20 lg:mx-10  mx-4">
       <div className="flex  justify-between gap-7 items-center w-full h-full pt-28 pb-20 ">
            <div className=" md:w-1/2 w-full flex flex-col justify-start items-start  gap-4">
            <span className="text-white  lg:text-[32px] text-[22px] font-bold tracking-wider ">
            Cost-Effective Mobile App Development Solutions
            </span>
            <span className="text-white lg:text-[17px] text-[14px] mt-3">
{`            Elevate your online game with Trackonweb IT Solutions! Our expert team turns your ideas into fantastic mobile solutions for healthcare, real estate, e-commerce, and more. We create affordable, responsive, and SEO-friendly apps using React Native, Flutter, iOS, Android . Make Trackonweb your go-to for cost-effective, dynamic apps that bring your vision to life. Boost your online presence and business success with Trackonweb – we're here to turn your mobile dreams into reality!`}
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
              src={Mobile}
            
              alt="Web Development "
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

export default AppDevelopmentServices;
