'use client';
import React, { useRef } from "react";
import { useState } from 'react';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const DemoForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
  
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
            setCourse('');
          },
          (error) => {
            toast.error("Error sending message. Please try again.");
          }
        );
    };
    
  return (
    <div>
       <div className='relative z-10 bg-[#0588b0] rounded-xl shadow-lg lg:ml-11 p-8 text-gray-600 md:w-80 lg:w-96 '>
            <h3 className='text-[26px] text-white text-center pb-5 font-medium'>
            Book a Free Demo
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
              <div>
                <select
                  name='course_type'
                  id='course_type'
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className='ring-1 text-gray-500 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                >
                  <option value='' hidden>
                    Course Type
                  </option>
                  <option value='web-development'>Web Development</option>
                  <option value='Mern-Stack-Development'>Mern Stack Development</option>
                  <option value='Graphic-Design'>Graphic Design</option>
                  <option value='Digital-Marketing'>Digital Marketing</option>
                  <option value='Mobile-App-Development'>Mobile App Development</option>
                  <option value='Web-Design'>Web Design</option>
                </select>
              </div>
              <button
                type='submit'
                className='bg-teal-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
              >
                Submit
              </button>
            </form>
           
          </div>
         
    </div>
  )
}

export default DemoForm
