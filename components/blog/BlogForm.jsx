'use client';
import React, { useRef } from "react";
import { useState } from 'react';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const BlogForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/; 
    
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
    
      if (!phoneRegex.test(phone)) {
        toast.error("Please enter a valid 10-digit phone number.");
        return;
      }
    
      emailjs
        .sendForm('service_tadzdln', 'template_3ihbvja', form.current, 'asKGLihLRDLk9f9Iw')
        .then(
          (result) => {
            toast.success("Message sent successfully!");
    
            setName('');
            setEmail('');
            setPhone('');
            
          },
          (error) => {
            toast.error("Error sending message. Please try again.");
          }
        );
    };
    
  return (
    <div>
       <div className='relative z-10 bg-[#0588b0] rounded-xl shadow-lg  p-8 text-gray-600 md:w-80 lg:w-80 '>
            <h3 className='text-[26px] text-white text-center pb-5 font-medium'>
            Looking for 100% Salary Hike ?
            </h3>
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
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                />
              </div>
              <div>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
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
                  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                />
              </div>
             
              <button
                type='submit'
                className='bg-teal-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
              >
                Apply Now
              </button>
              <div className="flex justify-center items-center gap-2">
                <input
                  type='checkbox'
                 
                  
                  
                  
                  required
                  className=''
                />
                <span className="text-white text-[14px]">By providing your contact details, you agree to our Terms of Use & Privacy Policy</span>
              </div>
            </form>
           
          </div>
         
    </div>
  )
}

export default BlogForm
