import Link from "next/link";
import React from "react";

import BlogBannerPic from "../ProjectWork/BlogBannerPic";

import DesignBlog from "../../../public/designblog.png";

import { FaRegEye } from "react-icons/fa6";


import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";
import Introduction from "./Introduction";
import Developing from "./Developing ";
import Choosing from "./Choosing ";
import Staying from "./Staying ";
import Essential from "./Essential ";
import Portfolio from "./Portfolio";
import Collaboration from "./Collaboration";
import Freelancing from "./Freelancing";
import Embracing from "./Embracing ";
import Conclusion from "./Conclusion";



const WebDesigner = () => {
  return (
    <div className={` `}>
      <div className="container mx-auto">
        <div className="flex flex-col border-2 border-[rgba(124,91,243,0.08)]   ">
          <div className=" pt-10 pb-10  p-4">
            <span className="text-[18px] font-bold tracking-wide">
              Table of Content
            </span>
            <ul className="list-decimal flex flex-col justify-center items-start gap-2 pl-4 pt-4">
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>Introduction</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Developing the Necessary Skills
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Choosing the Right Web Design Courses
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Staying Updated with Industry Trends
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                	Essential Tools for Web Designers
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Building a Strong Portfolio
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Networking and Collaboration
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>Job Hunting and Freelancing</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                Embracing the Future of Web Design
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>Conclusion</Link>
              </li>
            </ul>
           
          </div>
          <div className="p-4  ">
            <BlogBannerPic
              BannerImg={DesignBlog}
              alt={"platforms for free website hosting "}
            />
             <div className="flex justify-between gap-2 items-center border-2 border-[rgba(124,91,243,0.08)] p-4">
             <div className="flex justify-start flex-col md:flex-row md:items-center items-start gap-3">
              <span className="text-[15px] tracking-wide ">Updated on 22nd Jul, 23</span>
              <span className="flex justify-center items-center gap-2"><FaRegEye/>9.1K Views</span>
             </div>

             <div className="flex justify-center items-center gap-1">
               <span className=" p-1 bg-gray-400 text-white rounded-full "><FaFacebookF/></span>
               <span className=" p-1 bg-gray-400 text-white rounded-full"><FaLinkedinIn/></span>
              <span className=" p-1 bg-gray-400 text-white rounded-full"> <FaTwitter/></span>
             </div>
            </div>
          </div>
         
         <Introduction/>
         <Developing/>
         <Choosing/>
         <Staying/>
         <Essential/>
         <Portfolio/>
         <Collaboration/>
         <Freelancing/>
         <Embracing/>
         <Conclusion/>
          
       
        </div>
      </div>
    </div>
  );
};

export default WebDesigner;
