"use client";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useRef } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    emailjs.sendForm('service_lzx4iso', 'template_2lmnase', form.current, 'asKGLihLRDLk9f9Iw')
      .then((result) => {
        toast.success("Message sent successfully!");
  
        
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        toast.error("Error sending message. Please try again.");
      });
  };
  

  return (
    <div className="flex w-full py-10 justify-center items-center mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-[#0588b0]  xl:mx-20 lg:mx-10 p-4  lg:py-20 lg:px-8 md:py-20 md:px-8 lg:rounded-xl sm:py-20 sm:px-6  shadow-lg text-white overflow-hidden">
        <div className=" lg:w-1/2 flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide"> Contact Us</h1>
            <p className="pt-2 text-cyan-100 text-lg leading-7 text-justify ">
              "Reach out to TrackOnWeb for cutting-edge IT solutions. Elevate
              your business with our expertise. Contact us now for success!"
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-3 items-center">
              <FaPhoneAlt className="text-xl text-teal-300" />
              <span className="font-medium tracking-wider">+91 8233330466</span>
            </div>
            <div className="inline-flex space-x-3 items-center">
              <FiMail className="text-xl text-teal-300" />
              <span className="font-medium tracking-wider">
                trackonwebIT@gmail.com
              </span>
            </div>
            <div className="inline-flex space-x-3 items-center">
              <MdLocationOn className="text-xl text-teal-300" />
              <span className="font-medium leading-7 tracking-wider">
                52/205, VT Rd, near Apex University,
                <br /> Mansarovar, Jaipur, Rajasthan 302020
              </span>
            </div>
          </div>
          <ul className="flex justify-start items-center gap-2  ">
            <Link
              href="https://www.facebook.com/trackonweb/"
              target="_blank"
              className="p-2 bg-white rounded-full hover:bg-[#64dfcb] hover:text-white group"
            >
              <FaFacebookF className="text-[#0588b0] text-[16px] group-hover:text-white cursor-pointer" />
            </Link>
            <Link
              href="https://twitter.com/trackonweb"
              target="_blank"
              className="p-2 bg-white rounded-full hover:bg-[#64dfcb] hover:text-white group"
            >
              <FaTwitter className="text-[#0588b0] text-[16px] group-hover:text-white cursor-pointer" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/trackonweb-it-solutions-88134a202/"
              target="_blank"
              className="p-2 bg-white rounded-full hover:bg-[#64dfcb] hover:text-white group"
            >
              <FaLinkedinIn className="text-[#0588b0] text-[16px] group-hover:text-white cursor-pointer" />
            </Link>
            <Link
              href="https://www.instagram.com/trackonweb/"
              target="_blank"
              className="p-2 bg-white rounded-full hover:bg-[#64dfcb] hover:text-white group"
            >
              <FaInstagram className="text-[#0588b0] text-[16px] group-hover:text-white cursor-pointer" />
            </Link>
            <Link
              href={"/"}
              className="p-2 bg-white rounded-full hover:bg-[#64dfcb] hover:text-white group"
            >
              <FaYoutube className="text-[#0588b0] text-[16px] group-hover:text-white cursor-pointer" />
            </Link>
          </ul>
        </div>
        <div className="lg:w-1/2 relative ">
          <div className="absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg lg:ml-11 p-8 text-gray-600 md:w-80 lg:w-96">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4"
            >
              <div>
                <label className="text-sm">Your name</label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label className="text-sm">Email Address</label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label className="text-sm">Message</label>

                <textarea
                  placeholder="Message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="ring-1  ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-block self-end bg-cyan-700 text-white fonr-bold rounded-lg px-6 py-2 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
