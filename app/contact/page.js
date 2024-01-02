import Contact from "@/components/contact/Contact";
import Map from "@/components/contact/Map";
import Link from "next/link"
import { FaRegWindowMinimize } from "react-icons/fa";
export default function Page(){
    return(
        <>
        <div className={`bg-[#2f327d]  `} >
            <div className="container mx-auto">
            
             <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10">
             <span className="text-white lg:text-[40px] text-[32px] font-bold tracking-wider ">Contact Us</span>
             <div className="flex justify-start items-center gap-5">
                 <Link href={'/'} className="text-white lg:text-[20px] text-[16px]">Home</Link>
                  <FaRegWindowMinimize className="text-white text-[16px]"/>
                  <span className="text-white lg:text-[20px] text-[16px]">contact</span>
                 </div>
               
          
              
             </div>
            </div>
      
        </div>
        <Contact/>
        <Map/>
       
        </>
    )
}