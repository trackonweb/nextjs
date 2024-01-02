import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiProgression } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import {AiOutlineSafetyCertificate} from "react-icons/ai"

import { MdCalendarMonth } from "react-icons/md";

const coursesList = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
        duration: '3',
        projects: '10',
         img: '/istockphoto-1291971619-612x612.jpg',
    },
    {
        id: 2,
        title: 'Graphic Design',
        description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
        duration: '3',
        projects: '20',
         img: '/photo-1626785774573-4b799315345d.avif',
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
        duration: '3',
        projects: '10',
         img: '/istockphoto-1257980223-612x612.jpg',
    },
    {
        id: 4,
        title: 'Digital Marketing',
        description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
        duration: '6',
        projects: '25',
         img: '/istockphoto-165844689-612x612.jpg',
    },
    {
        id: 5,
        title: 'UI & UX',
        description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
        duration: '3',
        projects: '15',
         img: '/photo-1587440871875-191322ee64b0.avif',
    },
    {
      id: 6,
      title: 'Web Design',
      description: 'Build a robust toolkit with essential resources, tools, and communities for web developers. Stay connected with the industry, access learning materials, and enhance your skill set.',
      duration: '3',
      projects: '10',
       img: '/istockphoto-1371339413-612x612.jpg',
  },
]



const AllCourses = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto'>
      <div className={`flex  flex-col gap-3 justify-center items-center  py-10 xl:mx-20 lg:mx-10 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]'>Explore Our <span className='text-[#0588b0]'> Cutting-Edge Courses</span></h3>
          <span className='text-[16px] font-normal text-center'>At Trackonweb, we take pride in delivering top-notch services and support. Our commitment to quality extends to our comprehensive range of courses designed to elevate your skills and career prospects. Explore the exciting opportunities awaiting you through our offerings</span>
       
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
      {
        coursesList.map((item, index)=>{
            return   <div key={index} className="flex flex-col justify-start items-start  gap-[12px] flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] pb-4 cursor-pointer"
            >
    <div className='flex justify-center  items-center'>
      <Image src={item.img} width={400} height={300} alt='' className='object-contain' />
    </div>
    
    <Link href={'/'} className='text-[#0588b0] text-start text-[20px] font-[700] px-5 hover:text-black duration-500'>{item.title}</Link>
    <span className='text-[#696984] text-justify text-[14px] font-[400] px-5'>{item.description}</span>
    <div className='flex justify-between items-center px-5 gap-11'>
        <span className='flex justify-start items-center gap-3'>
            <MdCalendarMonth className='text-[#0588b0] text-[20px]'/>
            <p className='text-[14px]'>{item.duration} Months Training</p>
        </span>
        <span className='flex justify-start items-center gap-3'>
            <GiProgression className='text-[#0588b0] text-[20px]'/>
            <p className='text-[14px]'>Expert</p>
        </span>
    </div>
    <div className='flex justify-between items-center px-5 gap-11'>
        <span className='flex justify-start items-center gap-3'>
            <GoProjectRoadmap className='text-[#0588b0] text-[20px]'/>
            <p className='text-[14px]'>{item.projects}+ Projects</p>
        </span>
        <span className='flex justify-start items-center gap-3'>
            <AiOutlineSafetyCertificate className='text-[#0588b0] text-[20px]'/>
            <p className='text-[14px]'>Certificate</p>
        </span>
    </div>
    <div className='flex justify-between items-center w-full px-5'>
    <Link href={'/'} className='flex justify-center items-center gap-2 font-medium hover:text-[#0588b0] uppercase'>{`Read More `}<FaArrowRight/></Link>
     
  
    </div>
  
  </div>
        })
      }
         
         
          

          

        
        </div>
      </div>
    </div>
  )
}

export default  AllCourses
