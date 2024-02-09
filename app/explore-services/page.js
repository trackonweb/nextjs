
import AllServices from "@/components/explore_services/AllServices";
import Capacities from "@/components/explore_services/Capacities";
import Faq from "@/components/explore_services/Faq";
import OurTechnology from "@/components/explore_services/OurTechnology";

import Partner from "@/components/home/Partner";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";
import { FaRegWindowMinimize } from "react-icons/fa";

export default function Page(){
    return(
        <>
        <div
        className={`bg-[url('/business-concept-with-team-close-up_23-2149151159.avif')] bg-cover bg-center  `}
      >
        <div className="bg-[rgba(0,0,0,0.56)]">
          <div className="container mx-auto">
            <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-28 pb-10 ">
              <span className="text-white lg:text-[40px] text-[26px] text-center  font-bold tracking-wider ">
              Empowering Growth Through Innovative IT Solutions at TrackOnWeb
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
                  explore-services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Partner/>
        <AllServices/>
        <OurTechnology/>
       
        <Capacities/>
        <Testimonials/>
        <Faq/>
      
        </>
    )
}