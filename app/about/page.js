import AboutUs from "@/components/about/AboutUs";
import Better from "@/components/about/Better";
import Director from "@/components/about/Director";
import Partnership from "@/components/about/Partnership";
import Process from "@/components/about/Process";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import Discuss from "@/components/common/Discuss";
import Contact from "@/components/contact/Contact";

import CounterUp from "@/components/home/CounterUp";

import Link from "next/link";
import { FaRegWindowMinimize } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className="container mx-auto">
          <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10">
            <span className="text-white lg:text-[40px] text-[32px] font-bold tracking-wider ">
              About Us
            </span>
            <div className="flex justify-start items-center gap-5">
              <Link
                href={"/"}
                className="text-white lg:text-[20px] text-[16px]"
              >
                Home
              </Link>
              <FaRegWindowMinimize className="text-white text-[16px]" />
              <span className="text-white lg:text-[20px] text-[16px]">
                about
              </span>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      
      <Values />
      <Vision />
      <CounterUp />
      <Process/>
       <Better/>

      <Director />

      {/* <Partnership /> */}

    <Discuss/>
    </>
  );
}
