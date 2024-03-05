"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants"




const Hero = () => {
const router = useRouter();

const handleServices  = () =>{
  router.push('/explore-services')
}
const handleCourses  = () =>{
  router.push('/explore-courses')
}

  return(
    <div className={`w-full bg-slate-100  overflow-hidden`}>
    <div className="container mx-auto">
      <div className=" flex  lg:mx-10 xl:mx-20 mx-auto">
      <motion.div
       variants={fadeIn('up', 0.3)}
       initial='hidden' 
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}} 
      className="lg:w-1/2 w-full flex flex-col lg:justify-start justify-center items-center lg:items-start  xl:py-48  lg:py-28 py-32">
       <h1 className="text-[40px] font-semibold tracking-wider">T<span className="text-[#0588b0]">rackonweb</span>, </h1>
       <h2 className="text-[36px] font-semibold tracking-wider text-center lg:text-start"><span className="text-[#0588b0]">T</span>raining For <span className="text-[#0588b0]">S</span>uccess,<br/> <span className="text-[#0588b0]">S</span>olution For <span className="text-[#0588b0]">T</span>omorrow</h2>
       <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden' 
       whileInView={'show'}
       viewport={{once: false, amount: 0.3}} 
       className="hidden lg:flex">
       <span className="  mt-5 text-[17px] font-normal tracking-wider">We deliver unparalleled <span className="text-[#0588b0]">Development services</span>,<br/> Setting the standard for excellence in the industry.</span>
       </motion.div>
       <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden' 
       whileInView={'show'}
       viewport={{once: false, amount: 0.3}} 
       className="flex justify-start items-start gap-5 mt-5 mx-4 lg:mx-0"> 
       <button type="button" onClick={handleCourses} className="relative text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-full lg:text-sm text-[10px] px-6 py-3 text-center overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan-500 before:to-cyan-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 capitalize">Explore Courses</button>
       <button type="button" onClick={handleServices} className=" btn2">Explore Services</button>
      

       </motion.div>
      </motion.div>
      <div className=" hidden lg:flex lg:w-1/2 w-full xl:py-16 lg:pt-16">
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden' 
       whileInView={'show'}
       viewport={{once: false, amount: 0.7}}
        className="xl:w-[600px] xl:h-[600px] lg:w-[520px] lg:h-[520px]">
            <img src='tanda-hero.png'   alt="" className="object-contain"/>
        </motion.div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
