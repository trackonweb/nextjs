import Link from "next/link";
import React from "react";
import Introduction from "./Introduction";
import Freenom from "./Freenom";
import Dot from "./Dot";
import Freeinfinity from "./Freeinfinity";
import Biz from "./Biz";
import World from "./World";
import Freenon from "../../../public/freenon.png";
import Freeword from "../../../public/freeword.png";
import Dots from "../../../public/dot.png";
import Bizs from "../../../public/biz.png";
import Infi from "../../../public/freeinf.png";
import BlogBannerPic from "../ProjectWork/BlogBannerPic";
import Note from "./Note";
import Domains from "../../../public/domains.png";
import Conclusion from "./Conclusion";
import { FaRegEye } from "react-icons/fa6";


import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";



const WebDomain = () => {
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
                <Link href={"/blog/free-website-hosting"}>Freenom: <span className="font-normal">Free Domains with Unique Extensions</span></Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Dot.tk: <span className="font-normal">Short and Memorable Domain Names</span></Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>InfinityFree: <span className="font-normal">Free Domain Hosting Solutions</span></Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Biz.nf: <span className="font-normal">Free Domain Hosting Services</span></Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>FreeNom World: <span className="font-normal">Diverse Free Domain Extensions</span></Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Conclusion</Link>
              </li>
             
            </ul>
          </div>
          <div className="p-4  ">
            <BlogBannerPic
              BannerImg={Domains}
              alt={"platforms for free website hosting "}
            />
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
          <Freenom/>
          <div className="py-4  ">
            <BlogBannerPic
              BannerImg={Freenon}
              alt={"platforms for free website hosting "}
            />
          </div>
          <Dot/>
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Dots}
              alt={"platforms for free website hosting "}
            />
          </div>
          <Freeinfinity/>
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Infi}
              alt={"platforms for free website hosting "}
            />
          </div>
          <Biz/>
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Bizs}
              alt={"platforms for free website hosting "}
            />
          </div>
          <World/>
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Freeword}
              alt={"platforms for free website hosting "}
            />
          </div>
          <Note/>
          <Conclusion/>
        </div>
      </div>
    </div>
  );
};

export default WebDomain;
