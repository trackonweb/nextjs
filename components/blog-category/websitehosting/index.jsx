import Link from "next/link";
import React from "react";
import Introduction from "./Introduction";
import GitHub from "./GitHub";
import Netlify from "./Netlify";
import Vercel from "./Vercel";
import Heroku from "./Heroku";
import InfinityFree from "./InfinityFree";
import GAE from "./GAE";
import Webhosts from "./000webhost";
import Amazon from "./Amazon";
import Microsoft from "./Microsoft";
import GitLab from "./GitLab";
import WordPress from "./WordPress";
import Wix from "./Wix";
import Weebly from "./Weebly";
import Conclusion from "./Conclusion";
import Github from "../../../public/githubs.png";
import Netlify1 from "../../../public/netlify.png";
import BlogBannerPic from "../ProjectWork/BlogBannerPic";
import Herokus from "../../../public/heroku.png";
import Infini from "../../../public/infinity.png";
import Vercels from "../../../public/vercel.png";
import Host from "../../../public/host.png";
import Host2 from "../../../public/host2.png";
import Gae from "../../../public/gae.png";
import Ama from "../../../public/Ama.png";
import Mic from "../../../public/mic.png";
import Lab from "../../../public/lab.png";
import Word from "../../../public/word.png";
import Wixs from "../../../public/wix.png";
import Weeb from "../../../public/weeb.png";
import { FaRegEye } from "react-icons/fa6";

import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa";


const WebsiteHosting = () => {
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
                <Link href={"/blog/free-website-hosting"}>Introduction</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>GitHub Pages</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Netlify</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Vercel</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Heroku</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>InfinityFree</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>000webhost</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>
                  Google Cloud App Engine (GAE)
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Amazon S3</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>
                  Microsoft Azure Static Web Apps
                </Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>GitLab Pages</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>WordPress.com</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Wix</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Weebly</Link>
              </li>
              <li className="text-[#0588b0] text-[16px] font-semibold">
                <Link href={"/blog/free-website-hosting"}>Conclusion</Link>
              </li>
            </ul>
          </div>
          <div className="p-4">
            <BlogBannerPic
              BannerImg={Host2}
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
          <Introduction />
          <GitHub />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Github}
              alt={"GitHub "}
            />
          </div>
          <Netlify />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Netlify1}
              alt={"Netlify"}
            />
          </div>
          <Vercel />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Vercels}
              alt={"Vercel"}
            />
          </div>
          <Heroku />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Herokus}
              alt={"Heroku"}
            />
          </div>
          <InfinityFree />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Infini}
              alt={"InfinityFree"}
            />
          </div>
          <Webhosts />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Host}
              alt={"000webhost"}
            />
          </div>
          <GAE />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Gae}
              alt={"Google Cloud App Engine (GAE)"}
            />
          </div>
          <Amazon />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Ama}
              alt={"Amazon S3"}
            />
          </div>
          <Microsoft />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Mic}
              alt={"Microsoft Azure Static Web Apps"}
            />
          </div>
          <GitLab />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Lab}
              alt={"GitLab "}
            />
          </div>
          <WordPress />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Word}
              alt={"WordPress"}
            />
          </div>
          <Wix />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Wixs}
              alt={"Wix"}
            />
          </div>
          <Weebly />
          <div className="py-4">
            <BlogBannerPic
              BannerImg={Weeb}
              alt={"Weebly"}
            />
          </div>
          <Conclusion />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHosting;
