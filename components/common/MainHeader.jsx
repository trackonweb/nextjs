"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";

const MainHeader = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };
  return (
    <div>
      <div className="container  mx-auto ">
        <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
          <div className="flex justify-between items-center p-2 lg:mx-[10px] xl:mx-[40px] md:mx-[10px] 2xl:mx-[100px] ">
            <Link  href={'/'}>
              <Image
                src={"/logo.png"}
                height={50}
                width={50}
                alt=""
                className="object-contain"
              />
            </Link>
            <div className="flex justify-center items-center md:space-x-3 sm:space-x-3 lg:space-x-3 xl:space-x-10 mx-4">
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
                  <div className="absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform">
                    <div className="relative top-8 p-6 bg-white  border-t-4 border-cyan-300 w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10">
                        <div className="">
                          <Link
                            href={`/explore_courses/webdevelopment`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Development
                          </Link>
                          <Link
                            href={`/explore_courses/graphic_design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Graphic Design
                          </Link>
                          <Link
                            href={`/explore_courses/web_design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Design
                          </Link>
                          <Link
                            href={`/explore_courses/digital_marketing`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            href={`/explore_courses/mobile_app_development`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Mobile App Development
                          </Link>
                          <Link
                            href={`/explore_courses/ui_ux`}
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
                            href={`/explore-services/webdevelopment`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Development
                          </Link>
                          <Link
                            href={`/explore-services/graphic_design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Graphic Design
                          </Link>
                          <Link
                            href={`/explore-services/web_design`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Web Design
                          </Link>
                          <Link
                            href={`/explore-services/digital_marketing`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            href={`/explore-services/mobile_app_development`}
                            className=" block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black md:mx-2"
                          >
                            Mobile App Development
                          </Link>
                          <Link
                            href={`/explore-services/ui_ux`}
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
                <span className="hidden lg:flex tracking-wider">Blog</span>
              </Link>
              <Link href={"/contact"}>
                <span className="hidden lg:flex tracking-wider">Contact Us</span>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="text-white bg-[#0588b0] hover:bg-[#64dfcb] focus:bg-[#64dfcb] font-medium rounded-full lg:text-sm text-[10px] px-5 py-3  text-center "
            >
              Get Started
            </button>
            <div className="lg:hidden flex" onClick={toggleMobileNav}>
                <GiHamburgerMenu className="text-[28px] cursor-pointer" />
              </div>
            </div>
           

          </div>
        </nav>
        {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
      </div>
    </div>
  );
};

export default MainHeader;
