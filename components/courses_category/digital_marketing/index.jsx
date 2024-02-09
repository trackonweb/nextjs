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
                digital_marketing
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Excellence in Digital Marketing: Best Digital Marketing Course with Internship
            </span>
            <span className=' text-[16px] leading-7'>
            Become an expert in Digital Marketing with the latest tools in 2024. Gain in-depth knowledge of Search Engine Optimization, dominate in Social Media Marketing, be a Search Engine Marketing expert, become the greatest Affiliate Marketer, master WordPress, and more.
              <br />
              <br />
              Embark on a journey toward a thriving career with our digital marketing courses in Jaipur, where success is not just an option – it's a guarantee. Our commitment to your professional growth sets us apart as the most trusted institute offering 100% practical and job-oriented programs with internships. Our course contains 12 subjects and 50+ modules with hands-on experience on 45+ web and AI tools.
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
