'use client';
import React, { useRef } from "react";
import { useState } from 'react';
import Link from 'next/link';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import DemoForm from "@/components/common/DemoForm";


const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    emailjs.sendForm('service_tadzdln', 'template_3ihbvja', form.current, 'asKGLihLRDLk9f9Iw')
      .then((result) => {
        toast.success("Message sent successfully!");
  
        
        setName('');
        setEmail('');
        setPhone('');
        setCourse('');

      }, (error) => {
        toast.error("Error sending message. Please try again.");
      });
  };

  return (
    <div className={`bg-[#2f327d] border-b-8 border-red-500 `}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-start items-center gap-5 xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10'>
          <div className='lg:w-1/2 w-full flex flex-col justify-start items-start'>
            <div className='flex justify-start items-center lg:gap-2 gap-1'>
              <Link
                href={'/'}
                className='text-white lg:text-[16px] text-[12px]'
              >
                Home
              </Link>
              <span className='text-white font-bold'>/</span>
              <Link
                href={'/explore_courses'}
                className='text-white lg:text-[16px] text-[12px]'
              >
                explore_courses
              </Link>
              <span className='text-white font-bold'>/</span>
              <span className='text-[#64dfcb] lg:text-[16px] text-[12px]'>
                digital_marketing
              </span>
            </div>
            <span className='text-white lg:text-[27px] text-[20px] font-bold tracking-wider py-6 capitalize'>
              Master Digital Marketing Strategies: Enroll in Our Comprehensive
              Course
            </span>
            <span className='text-white text-[16px] leading-7'>
              Step into the dynamic realm of digital marketing with our
              comprehensive course tailored to equip you with the essential
              skills and strategies needed to excel in the ever-evolving digital
              landscape. At our institution, we're committed to guiding aspiring
              marketers towards becoming proficient professionals in the field
              of online marketing.
              <br />
              <br />
              Embark on a path towards mastering digital marketing strategies.
              Join our demo class to experience firsthand how our digital
              marketing course can elevate your skills and propel your career in
              the dynamic world of online marketing. Don’t miss this opportunity
              to advance your expertise. Enroll now!
            </span>
            <button className='bg-[#0588b0] hover:bg-[#64dfcb] duration-500 rounded-md text-white uppercase px-7 py-4 font-medium text-[16px] tracking-wider my-5'>
              Register for free demo
            </button>
          </div>
         <DemoForm/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
