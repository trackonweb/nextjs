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
        title: 'Mastery in Web Development 2024',
        description: 'Boost up your career by gaining skills in HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, Redux, MongoDB, Mongoose, and more.',
        duration: '6',
        projects: '16',
         img: '/istockphoto-1291971619-612x612.jpg',
         link: `/explore-courses/web-development`,
    },
    {
        id: 2,
        title: 'The Ultimate 2024 Graphic Design',
        description: 'Specialize in crafting logos to mastering design skills with Adobe Photoshop, Illustrator, Coral Draw, Lightroom, Canva, Sketch, and more. ',
        duration: '6',
        projects: '12',
         img: '/photo-1626785774573-4b799315345d.avif',
         link: `/explore-courses/graphic-design`,
    },
    {
        id: 3,
        title: 'Flutter Revolution: Mobile App Development',
        description: 'Learn, Code, and Innovate the techniques to create cross-platform mobile apps for Android and iOS, start your journey now',
        duration: '4',
        projects: '20',
         img: '/istockphoto-1257980223-612x612.jpg',
         link: `/explore-courses/mobile-app-development`,
    },
    {
        id: 4,
        title: 'Excellence in Digital Marketing',
        description: 'Become an expert in Digital Marketing with the latest tools in 2024. Gain knowledge of SEO, SMM, SEM, Affiliate Mkt., WordPress, and more.',
        duration: '6',
        projects: '39',
         img: '/istockphoto-165844689-612x612.jpg',
         link: `/explore-courses/digital-marketing`,
    },
    {
        id: 5,
        title: 'Become a Senior UI/UX Designer',
        description: 'Get ready to start with Figma, Canva, Sketch, Illustrator, HTML, CSS, Web Design, and AI tools to become a certified Senior UI UX Designer',
        duration: '4',
        projects: '14',
         img: '/photo-1587440871875-191322ee64b0.avif',
         link: `/explore-courses/ui-ux`,
    },
    {
      id: 6,
      title: 'Responsive Web Design Expert',
      description: 'Start your journey by creating the most fascinating Responsive web design by using HTML5, CSS, Tailwind CSS, SCSS, and Bootstrap',
      duration: '3',
      projects: '15',
       img: '/istockphoto-1371339413-612x612.jpg',
       link: `/explore-courses/web_design`,
  },
]



const AllCourses = () => {
  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto'>
      <div className={`flex  flex-col gap-3 justify-center items-center  py-10 xl:mx-20 lg:mx-10 mx-4`}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]'>Explore Professional  <span className='text-[#0588b0]'> Training Courses</span></h3>
          <span className='text-[16px] font-normal text-center'>Trackonweb IT Institute offers a diverse range of courses and collaborates with industry leaders. Joining Trackonweb provides an opportunity to access industry-demanding certification courses trusted by tech professionals. With industry trainer-led classes, real-life projects, and 24x7 technical support, Trackonweb ensures a transformative learning experience. Their specialization in the domain is a testament to their commitment to quality education, boasting a decade of expertise and a solid track record of 100% placement. Trackonweb emerges as the best IT Institute in Jaipur, catering to professionals, entrepreneurs, students, freelancers, and job seekers through Online/offline classroom coaching classes.</span>
       
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:mx-20 lg:mx-10 mx-4`}>
      {
        coursesList.map((item, index)=>{
            return  <div key={index} className="flex flex-col justify-start items-start gap-[12px] flex-[1 0 0] border bg-[rgba(255, 255, 255, 0.80)] rounded-md pb-4 cursor-pointer ">
            <div className='flex justify-center items-center'>
              <Image src={item.img} width={400} height={300} alt='' className='object-contain' />
            </div>
            
            <Link href={item.link} className='text-[#0588b0] text-start text-[20px] font-[700] px-5 hover:text-black duration-500'>{item.title}</Link>
            <span className='text-[#696984] text-justify text-[14px] font-[400] px-5'>{item.description}</span>
            <div className='flex justify-start items-center px-5 gap-8 w-full'>
              <span className='flex justify-start items-center gap-3'>
                <MdCalendarMonth className='text-[#0588b0] text-[20px]'/>
                <p className='text-[14px]'>{item.duration} Months Training</p>
              </span>
              <span className='flex justify-start items-center gap-3'>
                <GiProgression className='text-[#0588b0] text-[20px]'/>
                <p className='text-[14px]'>Expert</p>
              </span>
            </div>
            <div className='flex justify-start items-center px-5 gap-16 w-full'>
              <span className='flex justify-start items-center gap-3'>
                <GoProjectRoadmap className='text-[#0588b0] text-[20px]'/>
                <p className='text-[14px]'>{item.projects}+ Projects</p>
              </span>
              <span className='flex justify-start items-center gap-3'>
                <AiOutlineSafetyCertificate className='text-[#0588b0] text-[20px]'/>
                <p className='text-[14px]'>Certificate</p>
              </span>
            </div>
            <div className='flex justify-between items-center w-full px-5 pt-3 bottom-0'>
              <Link href={item.link} className='flex justify-center items-center gap-2 font-medium hover:text-[#0588b0] uppercase'>{`Read More `}<FaArrowRight/></Link>
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
