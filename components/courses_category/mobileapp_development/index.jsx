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
                mobile_app_development
              </span>
            </div>
            <span className=' lg:text-[27px] text-[20px] font-[600] tracking-wide py-6 capitalize'>
            Cross-Platform  – Become a master in creating Android and iOS applications with Flutter 
            </span>
            <span className=' text-[16px] leading-7'>
            Join Trackonweb! Learn, Code, and Innovate the techniques to create cross-platform mobile apps for Android and iOS with a single codebase using Flutter in just 4 months. 
              <br />
              <br />
              Dive into app development. Master Flutter, React Native, NodeJS, MongoDB, and Mongoose for impactful iOS mobile apps and Android mobile phone Applications.
              <br/>
              <br/>
              Create software, utilize network connections, implement backend services, and test on target devices. Discover cross-platform native mobile app intricacies, and choose the right language and framework.
              <br/>
              Get Professional training, certification, placement assistance, hands-on projects, and live classes. Book a demo class now!
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
