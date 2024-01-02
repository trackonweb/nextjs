import Discuss from "@/components/common/Discuss";
import Acheivements from "@/components/explore_courses/Acheivements";
import AllCourses from "@/components/explore_courses/AllCourses";
import Enroll from "@/components/explore_courses/Enroll";
import Faq from "@/components/explore_courses/Faq";
import Objectives from "@/components/explore_courses/Objectives";
import WhyCourses from "@/components/explore_courses/WhyCourses";
import Link from "next/link";


export default function Page(){
    return(
        <>
       
     <div className={`bg-[url('/photo-1522071820081-009f0129c71c.avif')] bg-cover bg-center  `} >
           <div className="bg-[rgba(0,0,0,0.56)]">
           <div className="container mx-auto">
            
            <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-28 pb-10 ">
            <span className="text-white lg:text-[40px] text-[26px] text-center  font-bold tracking-wider ">Empower Your Career: Best IT Courses in India for Skill Enhancement
</span>
            <div className="flex justify-start items-center gap-4 py-5">
                <Link href={'/'} className="text-white lg:text-[20px] text-[16px]">Home</Link>
                 <span className="text-white font-bold">/</span>
                 <span className="text-teal-400 lg:text-[20px] text-[16px]">courses</span>
                </div>
              
         
             
            </div>
           </div>
           </div>
      
        </div>

        <AllCourses/>
        <WhyCourses/>
        <Acheivements/>
        <Objectives/>
        <Enroll/>
        <Faq/>
       
      
       
       
        </>
    )
}