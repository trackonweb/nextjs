import Link from "next/link";
import React from "react";
import BlogBannerPic from "../ProjectWork/BlogBannerPic";
import Frontend from "../../../public/forntend.png";
import Useful from "../../../public/useful.png";
import Introduction from "./Introduction";
import Ides from "./Ides";
import Vcs from "./Vcs";
import Collaboration from "./Collaboration";
import Testing from "./Testing";
import Performance from "./Performance";
import Automation from "./Automation";
import Security from "./Security";
import Cms from "./Cms";
import Conclusion from "./Conclusion";
import { FaRegEye } from "react-icons/fa6";

import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";

const UsefulTools = () => {
  return (
    <div className={` `}>
      <div className="container mx-auto">
        <div className="flex flex-col border-2 border-[rgba(124,91,243,0.08)] gap-5 ">
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
                  Integrated Development Environments (IDEs)
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Version Control Systems (VCS)
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Collaboration and Communication Tools
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Testing and Debugging Tools
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Performance Optimization Tools
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Automation and Build Tools
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>Security Tools</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>
                  Content Management Systems (CMS)
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/web-development-tools"}>Conclusion</Link>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <BlogBannerPic BannerImg={Useful} alt={"Useful Tools For Web Development"} />
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
          <Introduction />

          <Ides />
          <div className="py-4">
            <BlogBannerPic BannerImg={Frontend} alt={"Frontend & Backend tools"} />
          </div>
          <Vcs />

          <Collaboration />

          <Testing />

          <Performance />
          <Automation />

          <Security />
          <Cms />
          <Conclusion />
        </div>
      </div>
    </div>
  );
};

export default UsefulTools;
