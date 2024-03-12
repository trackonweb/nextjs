import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdCalendarMonth } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Useful from "../../public/useful.png";
import JavaScript from "../../public/javascriptmistakes.png";
import Host2 from "../../public/host2.png";

import ReactBlog from "../../public/reactblog.png";

const Blogs = () => {
  return (
    <div className='bg-white lg:pt-10 pt-5 pb-10 lg:pb-20'>
      <div className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center space-y-2 py-10 xl:mx-20 lg:mx-10 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] tracking-wide font-[600]'>Popular <span className='text-[#0588b0]'>News</span></h3>
          <span className='text-[#696984] text-center lg:text-[18px] text-[16px] tracking-wide font-normal'>Explore our comprehensive news articles to stay ahead in the know.
</span>
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
        <Link href={'/blog/react-websites'} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={ReactBlog}  alt='React 19' className='object-cover ' />
            </div>
            <div className='flex justify-between items-center px-5 lg:gap-3 gap-5'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>March 01 2024</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/react-websites'} className='text-[#0588b0] text-start text-[14px] font-[600] tracking-wide px-5 hover:text-black'>React 19: A New Era for Building Awesome Websites</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  px-5 line-clamp-4'>In the ever-evolving world of web development, React 19 is about to make a grand entrance, expected to debut in May 2024. This upcoming release is generating a lot of excitement, promising a host of exciting features that will transform the way we create user interfaces. Whether you're a seasoned React pro or just starting, this guide is here to make your transition to React 19 smooth and straightforward.</span>
            <Link href={'/blog/react-websites'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>
       

        

          <Link href={'/blog/javascript-mistakes-and-solutions'} className="flex flex-col justify-start items-start  gap-[10px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer rounded-lg"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={JavaScript}  alt='Common Mistakes to Avoid in JavaScript' className='object-cover' />
            </div>
            <div className='flex justify-between items-center px-5 lg:gap-3 gap-5'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Fab 22 2024</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/javascript-mistakes-and-solutions'} className='text-[#0588b0] text-start text-[14px] font-[600] tracking-wide px-5 hover:text-black'>Common Mistakes to Avoid in JavaScript Coding</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  line-clamp-4 px-5'>When it comes to JavaScript coding, avoiding common mistakes is crucial for writing clean, efficient, and error-free code. In this guide, we'll explore the top pitfalls developers often encounter and provide insights on how to sidestep them.</span>
            <Link href={'/blog/javascript-mistakes-and-solutions'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>
          <Link href={'/blog/web-development-tools'} className="flex flex-col justify-start items-start  gap-[10px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer rounded-lg"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={Useful}  alt='Useful Tools For Web Development' className='object-cover' />
            </div>
            <div className='flex justify-between items-center px-5 lg:gap-3 gap-5'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Fab 07 2024</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/web-development-tools'} className='text-[#0588b0] text-start text-[14px] font-[600] tracking-wide px-5 hover:text-black'>Most Useful Tools For Web Development In 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  px-5 line-clamp-4'>In the ever-evolving web development, having the right tools at your fingertips is crucial. This article delves into the significance of web development tools, setting the stage for exploring a diverse range that caters to different facets of the development process.</span>
            <Link href={'/blog/web-development-tools'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>
          <Link href={'/blog/free-website-hosting'} className="flex flex-col justify-start items-start  gap-[10px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer rounded-lg"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={Host2}  alt='best platforms for free website hosting ' className='object-cover' />
            </div>
            <div className='flex justify-between items-center px-5 lg:gap-3 gap-5'>
                <span className='flex justify-start items-center gap-3'>
                    <MdCalendarMonth className='text-[#0588b0]'/>
                    <p className='text-[12px]'>January 28 2024</p>
                </span>
                <span className='flex justify-start items-center gap-3'>
                    <IoPerson className='text-[#0588b0]'/>
                    <p className='text-[12px]'>Admin</p>
                </span>
            </div>
            <Link href={'/blog/free-website-hosting'} className='text-[#0588b0] text-start text-[14px] font-[600] tracking-wide px-5 hover:text-black'>13 best platforms for free website hosting in 2024</Link>
            <span className='text-[#696984] text-justify text-[14px] font-normal tracking-wide  line-clamp-4 px-5'>Welcome to our comprehensive guide on free website hosting. Explore the top hosting platforms that offer powerful features without any cost. Whether you're a beginner or on a budget, these platforms will help you establish your online presence effortlessly.</span>
            <Link href={'/blog/free-website-hosting'} className='px-5 font-medium  tracking-wide hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </Link>



        
        </div>
       <div className='flex justify-center items-center pt-7'>
       <Link href={'/blog'} className='relative text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-full lg:text-sm text-[10px] px-6 py-3 text-center overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan-500 before:to-cyan-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 capitalize tracking-wide'>
          See More
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Blogs
