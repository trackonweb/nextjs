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
                explore_courses
              </Link>
              <span className=' font-bold'>/</span>
              <span className='text-[#0588b0] lg:text-[16px] text-[12px]'>
                graphic_design
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Advanced Graphic Designing–Mastering Designing Skills with the latest tools in 2024 
            </span>
            <span className=' text-[16px] leading-7'>
            Join us to get in-depth knowledge of Graphic design from scratch where our expert trainers you step by step from the fundamentals of designing to advanced designs.
              <br />
              <br />
              Specialize in crafting logos, Branding, Digital Graphics, UI/UX Designs, Animations, Illustrators, vector images, Social Media Graphics, and more.  
              <br />
              <br />
              Mastering design skills with Adobe Photoshop, Adobe InDesign, Illustrator, Coral Draw, Lightroom, Canva, Sketch, and more in our advanced graphic designing course.
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
