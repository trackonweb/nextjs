'use client';
import React, { useRef } from "react";
import { useState } from 'react';
import { FiMail } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

                                 
const GetInTouch = ({ handleCloseContact }) => {
  const [name, setName] = useState('');
   
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [loading, setLoading] = useState(false);
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      const phoneRegex = /^\d{10}$/; 
    
    
    
      if (!phoneRegex.test(phone)) {
        toast.error("Please enter a valid 10-digit phone number.");
        return;
      }
      setLoading(true);

      emailjs
        .sendForm('service_tadzdln', 'template_3ihbvja', form.current, 'asKGLihLRDLk9f9Iw')
        .then(
          (result) => {
            toast.success("Message sent successfully!");
    
            setName('');
          
            setPhone('');
            setCourse('');
          },
          (error) => {
            toast.error("Error sending message. Please try again.");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    };
  return (
    <div className={` bg-[rgba(24,24,24,0.648)]  min-w-full absolute  z-50    min-h-full flex justify-center items-center`}>
      <div className="container mx-auto">
        <div className="flex justify-center items-center ">
          <div className="relative bg-white rounded-xl shadow-lg lg:w-[800px] w-full flex flex-col md:flex-row xl:mx-20 lg:mx-10 mx-4">
            <div
              className={`   md:w-1/2 w-full bg-[#0588b0]  `}
            >
              <div className=" h-full">
                <div className="p-4  lg:flex flex-col justify-center  items-center  gap-5 h-full">
                <div className="hidden md:flex justify-center items-center">
                <Image src={'/logo.png'} width={70} height={70} alt='logo' className='object-contain'/>
            </div>
                  
                  <div>
                  <div className="pb-5">
                    <h2 className="text-white font-bold  text-[24px] text-center tracking-wide md:mt-5 lg:mt-0">
                    Welcome in Trackonweb
                    </h2>
                    <p className="text-white lg:text-[16px] font-normal text-[14px] py-4">We are starting Summer Boot Camp 2024 from 1st April to 30th June.</p>
                    <p className="text-white lg:text-[16px] font-normal text-[14px]">Last date for registration is 31st March.</p>
                  </div>
                    <div className="flex flex-col   justify-center items-start gap-3 ">
                      <div className="inline-flex space-x-1 items-center">
                        <FaWhatsapp className="text-xl text-white" />
                        <Link href="tel:+918233330466" className="font-normal text-white tracking-wider">
  +91 8233330466
</Link>
                      </div>
                      <div className="inline-flex space-x-1 items-center">
                        <FiMail className="text-xl text-white" />
                        <Link href="mailto:trackonwebIT@gmail.com" className="font-normal text-white tracking-wide">
  trackonwebIT@gmail.com
</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full  ">
              <div className="  lg:p-8 p-4 text-gray-600 ">
                <div className="flex justify-center items-center mb-5">
                  <h4 className="  text-[20px]  font-bold tracking-wide capitalize ">
                   Register for Summer Boot Camp 2024
                  </h4>
                </div>
                <form  ref={form}
              onSubmit={sendEmail} className='flex flex-col space-y-4 '>
              <div>
                <input
                  type='text'
                  name='from_name'
                  placeholder='Your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='ring-1 ring-gray-400 placeholder-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                />
              </div>
              
              <div>
                <input
                  type='text'
                  name='user_phone'
                  placeholder='Phone No.'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className='ring-1 ring-gray-400 placeholder-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                />
              </div>
              <div>
                <select
                  name='course_type'
                  id='course_type'
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                  className='ring-1 text-gray-500  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                >
                  <option value='' hidden>
                    Course Type
                  </option>
                  <option value='web-development'>Web Development</option>
                 
                  <option value='Graphic-Design'>Graphic Design</option>
                  <option value='Digital-Marketing'>Digital Marketing</option>
                 
                  <option value='Web-Design'>Web Design</option>
                </select>
              </div>
              <button
            type='submit'
            className='bg-teal-400 text-white font-[600] rounded-lg px-6 py-2 tracking-wide uppercase text-sm'
            disabled={loading} 
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
            
            </form>
              </div>
            </div>

            <div className=" absolute top-[-20px] lg:right-[-20px] right-[-10px] bg-[#0588b0] p-2 rounded-full">
              <span className="">
                <IoClose
                  onClick={handleCloseContact}
                  className="text-3xl  cursor-pointer text-white"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
