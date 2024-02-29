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
                web-design
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Responsive Web Design Expert – Gain skills in creating user-friendly, Dynamic, Latest, and Best Website Designs 
            </span>
            <span className=' text-[16px] leading-7'>
            Start your professional 3-month journey to become a Responsive Web Design Expert in Jaipur with a Free Internship in 2024. Master HTML5, CSS, Tailwind CSS, SCSS, Bootstrap and more.
              <br />
              <br />
              Learn to design web pages and Graphics in Figma and Canva, and create mobile-friendly and stunning pages. Our course includes 15+ live projects for hands-on experience, offering a certificate upon completion. 
              <br />
              <br />
              Whether you are a beginner or experienced, our courses cater to individual growth and corporate upskilling. Explore the art and science of web design, covering UX, UI, and information architecture. Stay relevant in the evolving web technology landscape. Join our web designing course and craft user-friendly, dynamic website designs with Trackonweb. 
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
