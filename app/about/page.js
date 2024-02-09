import AboutUs from "@/components/about/AboutUs";
import Better from "@/components/about/Better";
import Director from "@/components/about/Director";

import Process from "@/components/about/Process";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";
import Discuss from "@/components/common/Discuss";


import CounterUp from "@/components/home/CounterUp";

import Link from "next/link";


export default function Page() {
  return (
    <>
      <div
        className={`bg-[url('/business-people-partnership-support-team-urban-scene-concept_53876-144834.avif')] bg-cover bg-center lg:bg-fixed  `}
      >
        <div className="bg-[rgba(0,0,0,0.40)]">
          <div className="container mx-auto">
            <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-28 pb-10 ">
              <span className="text-white lg:text-[40px] text-[26px] text-center  font-bold tracking-wider ">
              TrackOnWeb IT Solutions: Crafting Tomorrow's Digital Success Today
              </span>
              <div className="flex justify-start items-center gap-4 py-5">
                <Link
                  href={"/"}
                  className="text-white lg:text-[20px] text-[16px]"
                >
                  Home
                </Link>
                <span className="text-white font-bold">/</span>
                <span className="text-teal-400 lg:text-[20px] text-[16px]">
                  about
                </span>
              </div>
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

      {/* <Director /> */}

      {/* <Partnership /> */}

    {/* <Discuss/> */}
    </>
  );
}
