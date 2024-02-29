"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

import SummerForm from "./SummerForm";



const MainHeader = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [form, setForm] = useState(false);
 

  
  const handleFormClick = () => {
    setForm(!form);
  };
  const handleCloseForm = () => {
    setForm(false)  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  useEffect(() => {
    // Set the overflow property of the body based on the state of showContact
    document.body.style.overflow = form ? 'hidden' : 'auto';

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [form]);
  return (
    <div>
      <div className="container  mx-auto ">
        <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
          <div className="flex justify-between items-center p-2 lg:mx-[10px] xl:mx-[20px] md:mx-[10px] 2xl:mx-[100px] ">
            <Link  href={'/'}>
              <Image
                src={"/logo.png"}
                height={50}
                width={50}
                alt=""
                className="object-contain"
              />
            </Link>
            <div className="flex justify-center items-center md:space-x-2 sm:space-x-2 lg:space-x-2 xl:space-x-10 mx-4">
              <div>
                <div className="hidden lg:flex relative group px-3 py-2">
                  <div className="flex justify-center items-center space-x-3">
                    <div className="hidden menu-hover lg:flex  tracking-wider ">
                      Courses
                    </div>
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <div className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform `}>
                    <div className="relative top-8 p-6 bg-white  border-t-4 border-cyan-300 w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className="">
                          <Link
                           href={'/explore-courses/web-development'}
                           
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Development
                          </Link>
                          <Link
                            href={`/explore-courses/graphic-design`}
                          
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Graphic Design
                          </Link>
                          <Link
                            href={`/explore-courses/web-design`}
                        
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Design
                          </Link>
                          <Link
                            href={`/explore-courses/digital-marketing`}
                         
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            href={`/explore-courses/mobile-app-development`}
                          
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Mobile App Development
                          </Link>
                          <Link
                            href={`/explore-courses/ui-ux`}
                        
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Ui & Ux
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex relative overflow-hidden">
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 w-[300px]  ps-10 text-sm text-gray-900 border-2 border-[#0588b0] rounded-full bg-gray-50 focus:ring-[#0588b0] focus:border-[#0588b0] "
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 end-0 px-3 flex items-center bg-[#0588b0] rounded-r-full pe-3 pointer-events-none overflow-hidden">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <div className="hidden lg:flex relative group px-3 py-2">
                  <div className="flex justify-center items-center space-x-3">
                    <div className="hidden menu-hover lg:flex   tracking-wider ">
                      Services
                    </div>
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform">
                    <div className="relative top-8 p-6 bg-white  border-t-4 border-cyan-300 w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10">
                        <div className="">
                          <Link
                            href={`/explore-services/web-development`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Development
                          </Link>
                          <Link
                            href={`/explore-services/graphic-design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Graphic Design
                          </Link>
                          <Link
                            href={`/explore-services/web-design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Design
                          </Link>
                          <Link
                            href={`/explore-services/digital-marketing`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            href={`/explore-services/mobile-app-development`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Mobile App Development
                          </Link>
                          <Link
                            href={`/explore-services/ui-ux`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Ui & Ux
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"/about"}>
                <span className="hidden lg:flex tracking-wider">About Us</span>
              </Link>

              

<Link href={"/blog"}>
                <span className="hidden lg:hidden xl:flex tracking-wider">Blog</span>
              </Link>
              <Link href={"/contact"}>
                <span className="hidden lg:flex tracking-wider">Contact Us</span>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleFormClick}
              className="relative text-white bg-[#0588b0] hover:bg-[#64dfcb] focus:bg-[#64dfcb] font-medium rounded-full xl:text-[14px] lg:text-[10px] text-[10px] px-5 py-3  text-center overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan-500 before:to-cyan-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 capitalize"
            >
              Summer Bootcamp registration
            </button>
            
            <div className="lg:hidden flex" onClick={toggleMobileNav}>
                <GiHamburgerMenu className="text-[28px] cursor-pointer" />
              </div>
            </div>
           

          </div>
        </nav>
       
      </div>
      {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
     {form && <SummerForm handleCloseForm={handleCloseForm}/>}
    </div>
  );
};

export default MainHeader;
