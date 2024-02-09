import Link from "next/link";
import React from "react";
import BlogBannerPic from "../ProjectWork/BlogBannerPic";
import JavaScript from "../../../public/javascriptmistakes.png";
import Introduction from "./Introduction";
import StrictMode from "./StrictMode";
import Neglecting from "./Neglecting";
import Compatibility from "./Compatibility";
import Overlooking from "./Overlooking";
import Excessive from "./Excessive";
import Manipulation from "./Manipulation";
import Embracing from "./Embracing";
import Skipping from "./Skipping";
import Conclusion from "./Conclusion";
import { FaRegEye } from "react-icons/fa6";

import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";


const JavaScriptMistakes = () => {
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
                <Link href={"/blog/javascript-mistakes-and-solutions"}>Introduction</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Not Using Strict Mode
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Neglecting Error Handling
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Ignoring Cross-Browser Compatibility
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Overlooking Memory Leaks
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Excessive Use of Global Variables
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Poorly Optimized DOM Manipulation
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>Not Embracing ES6 Features</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Ignoring Code Reviews
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>Skipping Documentation</Link>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <BlogBannerPic BannerImg={JavaScript} alt={"Common JavaScript Mistakes "} />
            <div className="flex justify-between items-center border-2 border-[rgba(124,91,243,0.08)] p-4">
             <div className="flex justify-start items-center gap-3">
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
          <StrictMode/>
          <Neglecting/>
          <Compatibility/>
          <Overlooking/>
          <Excessive/>
          <Manipulation/>
          <Embracing/>
          <Skipping/>
          <Conclusion/>

          
        </div>
      </div>
    </div>
  );
};

export default JavaScriptMistakes;
