
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
       <div className={`bg-[#0588b0]  `} >
            <div className="container mx-auto">
            
             <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10">
             <span className="text-white lg:text-[40px] text-[32px] font-bold tracking-wider ">Services</span>
             <div className="flex justify-start items-center gap-5">
                 <Link href={'/'} className="text-white lg:text-[20px] text-[16px]">Home</Link>
                  <FaRegWindowMinimize className="text-white text-[16px]"/>
                  <span className="text-white lg:text-[20px] text-[16px]">services</span>
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