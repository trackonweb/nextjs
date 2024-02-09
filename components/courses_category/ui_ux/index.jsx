'use client';

import Link from 'next/link';
import "react-toastify/dist/ReactToastify.css";
import DemoForm from "@/components/common/DemoForm";
import Category from './Category';


const HeroSection = () => {

  return (
    <div className={`bg-slate-100 `}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-5 xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10'>
          <div className='lg:w-2/3 w-full flex flex-col justify-start items-start'>
            <div className='flex justify-start items-center lg:gap-2 gap-1'>
              <Link
                href={'/'}
                className=' lg:text-[16px] text-[12px]'
              >
                Home
              </Link>
              <span className=' font-bold'>/</span>
              <Link
                href={'/explore_courses'}
                className=' lg:text-[16px] text-[12px]'
              >
                explore-courses
              </Link>
              <span className=' font-bold'>/</span>
              <span className='text-[#0588b0] lg:text-[16px] text-[12px]'>
              ui-and-ux
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Professional UI UX Designer –Dive into User Interface and User Experience Design with Sketch, Figma, Adobe XD, and Illustrator 
            </span>
            <span className=' text-[16px] leading-7'>
            Creating a visually appealing and interactive User Interface (UI) design, as well as developing products and services with a focus on providing a positive and meaningful experience for users, becomes easier when you familiarize yourself with the elements, tools, principles, user-centered approach, responsiveness, and emotional design aspects of UI and UX Design.
              <br />
              <br />
              Delve into the intricacies of UI and UX design, exploring aspects such as layout, interactivity, buttons, forms, typography, and icons using tools like Sketch, Figma, Adobe XD, InVision, and Illustrator.  
              <br/>
              <br/>
              Acquire in-depth knowledge of user research, information architecture, wireframing, prototyping, and user testing for a comprehensive understanding of the design process.
            </span>
           
          </div>
          <div className='hidden lg:flex '> 
            <DemoForm />
            </div>
        
        </div>
       
      </div>
      <Category/>
    </div>
  );
};

export default HeroSection;
