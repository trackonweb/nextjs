import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdCalendarMonth } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Useful from "../../public/useful.png";
import JavaScript from "../../public/javascriptmistakes.png";
import Host2 from "../../public/host2.png";
import Domains from "../../public/Domains.png";
import DesignBlog from "../../public/designblog.png";
import WorkIdea from "../../public/workidea.png";

const AllBlog = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center space-y-2 py-10 xl:mx-20 lg:mx-10 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] tracking-wide font-[600]'>Popular <span className='text-[#0588b0]'>News</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-normal'>Explore our comprehensive news articles to stay ahead in the know.
</span>
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
        <Link href={'/blog/project-work-idea'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
            <Image src={WorkIdea}  alt='Remote Location Project Work Idea' className='object-contain' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>January 12 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/project-work-idea'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>The Best Remote Location Project Work Idea</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  px-5 line-clamp-4'>Enhance productivity for today's tech professionals and companies
              with the "Best Remote Location Project Work Idea." This advanced
              web app caters to corporate and IT professionals, offering optimal
              remote work environments. Users can discover ideal work
              atmospheres with features like fast Wi-Fi, accessibility, online
              booking, detailed timing info, options for meetings, group or solo
              work, meal and snack availability, alcohol options, privacy
              considerations, and desired silence levels. Designed for modern
              professionals, this project ensures a seamless and productive
              remote work experience.</span>
            <Link href={'/blog/project-work-idea'} className='px-5 font-medium tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

          <Link href={'/blog/web-development-tools'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={Useful}  alt='Useful Tools For Web Development' className='object-contain' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>April 07 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/web-development-tools'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>Most Useful Tools For Web Development In 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  px-5 line-clamp-4'>In the ever-evolving web development, having the right tools at your fingertips is crucial. This article delves into the significance of web development tools, setting the stage for exploring a diverse range that caters to different facets of the development process.</span>
            <Link href={'/blog/web-development-tools'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

          <Link href={'/blog/javascript-mistakes-and-solutions'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={JavaScript}  alt='Common Mistakes to Avoid in JavaScript' className='object-contain' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>October 24 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/javascript-mistakes-and-solutions'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>Common Mistakes to Avoid in JavaScript Coding</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  line-clamp-4 px-5'>When it comes to JavaScript coding, avoiding common mistakes is crucial for writing clean, efficient, and error-free code. In this guide, we'll explore the top pitfalls developers often encounter and provide insights on how to sidestep them.</span>
            <Link href={'/blog/javascript-mistakes-and-solutions'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

          <Link href={'/blog/free-website-hosting'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={Host2}  alt='best platforms for free website hosting ' className='object-contain' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>January 12 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/free-website-hosting'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>13 best platforms for free website hosting in 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  line-clamp-4 px-5'>Welcome to our comprehensive guide on free website hosting. Explore the top hosting platforms that offer powerful features without any cost. Whether you're a beginner or on a budget, these platforms will help you establish your online presence effortlessly.</span>
            <Link href={'/blog/free-website-hosting'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

          <Link href={'/blog/free-domain-websites'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={Domains}  alt='Free Domain Websites' className='object-contain ' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>April 07 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/free-domain-websites'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>Top 5 Free Domain Websites in 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  line-clamp-4 px-5'>Welcome to our comprehensive guide on free domain websites. Dive into the world of online presence without spending a dime. Discover platforms that provide free domain registrations and extensions.</span>
            <Link href={'/blog/free-domain-websites'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

          <Link href={'/blog/web-designer'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={DesignBlog}  alt='Become a Web Designer' className='object-contain ' />
            </div>
            <div className='flex justify-between items-center px-5 gap-11'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>April 07 2023</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/web-designer'} className='text-[#0588b0] text-start text-[20px] font-[600] tracking-wide px-5 hover:text-black'>How to Become a Web Designer in 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide line-clamp-4 px-5'>Web design is always changing, with new technologies and what users want. To do well as a web designer in 2024, you need to know the current trends and have the right skills.</span>
            <Link href={'/blog/web-designer'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>

        
        </div>
      </div>
    </div>
  )
}

export default AllBlog
