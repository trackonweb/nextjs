import Link from "next/link";
import React from "react";
import BlogBannerPic from "../ProjectWork/BlogBannerPic";
import ReactBlog from "../../../public/reactblog.png";
// import Introduction from "./Introduction";
// import StrictMode from "./StrictMode";
// import Neglecting from "./Neglecting";
// import Compatibility from "./Compatibility";
// import Overlooking from "./Overlooking";
// import Excessive from "./Excessive";
// import Manipulation from "./Manipulation";
// import Embracing from "./Embracing";
// import Skipping from "./Skipping";
// import Conclusion from "./Conclusion";
import { FaRegEye } from "react-icons/fa6";

import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";
import Introduction from "./Introduction";
import Faster from "./Faster";
import Enhancements from "./Enhancements";
import Experimental from "./Experimental";
import Asset from "./Asset";
import Directives from "./Directives";
import Upgrading from "./Upgrading";


const ReactWebsites = () => {
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
                Faster, Smoother, More Efficient
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Key Features and Enhancements
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Document Metadata: A Boost for SEO
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Asset Loading: Control in Your Hands
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Directives: `use client` and `use server`
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/javascript-mistakes-and-solutions"}>
                Upgrading to React 19: A Step-by-Step Guide
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="p-4">
            <BlogBannerPic BannerImg={ReactBlog} alt={"Common JavaScript Mistakes "} />
            <div className="flex justify-between gap-2 items-center border-2 border-[rgba(124,91,243,0.08)] p-4">
             <div className="flex justify-start flex-col md:flex-row md:items-center items-start gap-3">
              <span className="text-[15px] tracking-wide ">Updated on 1st March, 24</span>
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
          <Faster/>
<Enhancements/>
<Experimental/>
<Asset/>
<Directives/>
          <Upgrading/>
        </div>
      </div>
    </div>
  );
};

export default ReactWebsites;
