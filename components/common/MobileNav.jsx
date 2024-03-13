"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCoursesDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);

    setServicesDropdownOpen(false);
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);

    setCoursesDropdownOpen(false);
  };
  return (
    <div className=" bg-white z-50   py-7 fixed w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden relative flex flex-col justify-center items-start gap-5 mx-4">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Home
          </Link>
          <span
  onClick={handleCoursesDropdownToggle}
  data-dropdown-toggle="coursesDropdown"
  className="text-black flex items-center font-medium text-[17px]"
>
  Courses
  <svg
    className={`w-2.5 h-2.5 ms-3 ${isCoursesDropdownOpen ? "rotate-180" : ""}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</span>


          <div
            id="coursesDropdown"
            className={`z-10 ${
              isCoursesDropdownOpen ? "block" : "hidden"
            } bg-white divide-y divide-gray-100`}
          >
            <ul
              class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="coursesDropdown"
            >
              <Link
                href={`/explore-courses/web-development`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Web Development
              </Link>
              <Link
                href={`/explore-courses/graphic-design`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Graphic Design
              </Link>
              <Link
                href={`/explore-courses/digital-marketing`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Digital Marketing
              </Link>
              <Link
                href={`/explore-courses/web-design`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Web Design
              </Link>
              <Link
                href={`/explore-courses/mobile-app-development`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Mobile App Development
              </Link>
              <Link
                href={`/explore-courses/ui-ux`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Ui & Ux
              </Link>
            </ul>
          </div>
          <span
  onClick={handleServicesDropdownToggle}
  data-dropdown-toggle="servicesDropdown"
  className="text-black flex items-center font-medium text-[17px]"
>
  Services
  <svg
    className={`w-2.5 h-2.5 ms-3 ${
      isServicesDropdownOpen ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
</span>

          <div
            id="servicesDropdown"
            className={`z-10 ${
              isServicesDropdownOpen ? "block" : "hidden"
            } bg-white divide-y divide-gray-100`}
          >
            <ul
              class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="servicesDropdown"
            >
              <Link
                href={`/explore-services/web-development`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Web Development
              </Link>
              <Link
                href={`/explore-services/graphic-design`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Graphic Design
              </Link>
              <Link
                href={`/explore-services/digital-marketing`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Digital Marketing
              </Link>
              <Link
                href={`/explore-services/web-design`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Web Design
              </Link>
              <Link
                href={`/explore-services/mobile-app-development`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Mobile App Development
              </Link>
              <Link
                href={`/explore-services/ui-ux`}
                onClick={handleLinkClick}
                className="text-[14px] font-medium"
              >
                Ui & Ux
              </Link>
            </ul>
          </div>

          <Link
            href={"/about"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            About Us
          </Link>
          <Link
            href={"/blog"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            onClick={handleLinkClick}
            className="text-[17px] font-medium"
          >
            Contact Us
          </Link>
        </ul>
        <div className="lg:hidden flex absolute top-4 right-3 flex-[1 0 0] border  bg-[rgba(255, 255, 255, 0.80)] rounded-lg  shadow-md  p-[8px] ">
          <span onClick={handleLinkClick}><IoClose className="text-3xl cursor-pointer"/></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
