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
                webdevelopment
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Master Web Development in 2024 – Get Professional Web Development Training in Jaipur with a free Internship
            </span>
            <span className=' text-[16px] leading-7'>
            In-demand skills for the future. Data shows that web developers are needed in nearly every industry, and 2024 promises even greater demand. Join us and boost your career by acquiring skills in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ReactJS, NodeJS, MongoDB, and more. 
              <br />
              <br />
              Trackonweb offers web development training in Jaipur from scratch with a free internship, with step-by-step guidance from industry-trained instructors who teach you to create websites, web apps, e-commerce, and web portals in regular offline/online classes to ensure your 360-degree development, supported by 20+ modules with 35+ assignments throughout the 6-month program with free Internship. 
              <br/>
              <br/>
              Get hands-on experience. Build your future with over 16+ industry-relevant projects and live projects. Book your demo class today!
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
