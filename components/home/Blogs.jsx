import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdCalendarMonth } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const Blogs = () => {
  return (
    <div className='bg-white pb-10'>
      <div className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center space-y-2 py-10 xl:mx-20 lg:mx-10 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]'>Popular <span className='text-[#0588b0]'>News</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-[400]'>Explore our comprehensive news articles to stay ahead in the know.
</span>
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
        <div className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={'/blog1-600x400.jpeg'} width={400} height={300} alt='' className='object-contain' />
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
            <Link href={'/'} className='text-[#0588b0] text-start lg:text-xl text-base font-[700] px-5 hover:text-black'>Resources Every Web Developer Should Have</Link>
            <span className='text-[#696984] text-justify text-[14px] font-[400] px-5'>Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.</span>
            <Link href={'/'} className='px-5 font-medium hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </div>

          <div className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={'/blog2-600x400.jpeg'} width={400} height={300} alt='' className='object-contain' />
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
            <Link href={'/'} className='text-[#0588b0] text-start lg:text-xl text-base font-[700] px-5 hover:text-black'>Digital Marketing Demystified: A Comprehensive Overview</Link>
            <span className='text-[#696984] text-justify text-[14px] font-[400] px-5'>Embark on a journey into the expansive world of digital marketing. Uncover the various channels, strategies, and tools that form the backbone of successful online promotion.</span>
            <Link href={'/'} className='px-5 font-medium hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </div>

          <div className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
                    >
            <div className='flex justify-center  items-center'>
              <Image src={'/blog3-600x400.jpeg'} width={400} height={300} alt='' className='object-contain' />
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
            <Link href={'/'} className='text-[#0588b0] text-start lg:text-xl text-base font-[700] px-5 hover:text-black'>Print Design Perfection: Crafting for Physical Media</Link>
            <span className='text-[#696984] text-justify text-[14px] font-[400] px-5'>Explore the nuances of print design, from business cards to posters. Understand print specifications, color profiles, and how to prepare designs for flawless reproduction on physical media.</span>
            <Link href={'/'} className='px-5 font-medium hover:text-[#0588b0] mt-auto'>{`Read More > `}</Link>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Blogs;
