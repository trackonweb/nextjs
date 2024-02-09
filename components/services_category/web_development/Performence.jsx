import React from 'react'
import { MdOutlineDesignServices,MdCompareArrows,MdCheckCircle,  } from "react-icons/md";
import { IoMdDesktop } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiCycle } from "react-icons/gi";
import { MdLoop } from "react-icons/md";
import { MdBuild } from "react-icons/md";


const iconComponents = {
   IoMdDesktop: <IoMdDesktop className='text-[40px] text-[#64dfcb] animate-bounce' />,
   FaCloudRain: <FaCloudRain className='text-[40px] text-[#64dfcb] animate-bounce' />,
   RiTeamFill: <RiTeamFill className='text-[40px] text-[#64dfcb] animate-bounce' />,
   GiCycle: <GiCycle className='text-[40px] text-[#64dfcb] animate-bounce' />,
   MdCheckCircle: <MdCheckCircle className='text-[40px] text-[#64dfcb] animate-bounce' />,
   MdCompareArrows: <MdCompareArrows className='text-[40px] text-[#64dfcb] animate-bounce' />,
   MdLoop: <MdLoop className='text-[40px] text-[#64dfcb] animate-bounce' />,

   MdBuild: <MdBuild className='text-[40px] text-[#64dfcb] animate-bounce' />,
   MdOutlineDesignServices: <MdOutlineDesignServices className='text-[40px] text-[#64dfcb] animate-bounce' />,
 };

const list = [
   {
      id: 1,
      title: 'Advanced Web Development',
      desciption: 'Leveraging cutting-edge technologies and innovative strategies to create sophisticated web solutions that align with modern trends, ensuring exceptional user experiences and robust functionalities for diverse business needs.',
      icon: 'IoMdDesktop',
   },
   {
      id: 2,
      title: 'Cloud-based Dev',
      desciption: 'Utilizing cloud infrastructure and services to facilitate scalable, secure, and collaborative development environments, optimizing efficiency and enabling seamless integration of applications across platforms and devices.',
      icon: 'FaCloudRain',
   },
   {
      id: 3,
      title: 'Dedicated Web teams',
      desciption: 'Comprising specialized professionals committed to specific projects, ensuring focused expertise, personalized attention, and streamlined communication for efficient execution and timely delivery of web development initiatives.',
      icon: 'RiTeamFill',
   },
   {
      id: 4,
      title: 'Full-cycle Development',
      desciption: 'A comprehensive approach covering every phase of development, from ideation and planning to deployment and maintenance, ensuring a holistic and well-managed process that aligns with client objectives and industry standards.',
      icon: 'GiCycle',
   },
   {
      id: 5,
      title: 'Quality Assurance',
      desciption: 'Implementing rigorous testing protocols and quality checks throughout the development lifecycle, ensuring error-free, high-performing web solutions that meet stringent quality standards and user expectations',
      icon: 'MdCheckCircle',
   },
   {
      id: 6,
      title: 'Consolidation & Integration',
      desciption: 'Harmonizing diverse systems, data, or applications into a unified, cohesive infrastructure, streamlining operations, enhancing efficiency, and enabling seamless data flow and interaction across platforms.',
      icon: 'MdCompareArrows',
   },
   {
      id: 7,
      title: 'Agile & Adaptive',
      desciption: 'Embracing an iterative and flexible development methodology, adapting to evolving project requirements swiftly, fostering collaboration, and delivering responsive solutions that align with changing market needs',
      icon: 'MdLoop',
   },
   {
      id: 8,
      title: 'Maintenance & Support',
      desciption: 'Providing ongoing technical assistance, updates, and enhancements to ensure the continued performance, security, and optimization of web applications, ensuring they remain robust and relevant over time.',
      icon: 'MdBuild',
   },

]

const Performence = () => {
  return (
    <div className="bg-[#f3f7fd] py-10">
      <div className="container mx-auto">
        <div
          className={`flex flex-col justify-center lg:items-center  items-start space-y-1 xl:mx-20 lg:mx-10 mx-4 `}
        >
         

          <h3 className="text-[#2f327d] lg:text-[34px] lg:text-center text-start text-[26px] font-[700] leading-10 tracking-wider">
          Unleash Digital Excellence with Our Performance-Driven Website Development
          </h3>
          <span className=" text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium ">
        
Experience the Art of Making Your Product Truly Engaging and Utterly Useful!
          </span>
         
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-10 xl:px-20 lg:px-10 px-4 py-16'>
         {
            list.map((item,index)=>{
               return   <div key={index} className='flex flex-col justify-start lg:items-start items-center gap-3'>
               <span className=''>
               {iconComponents[item.icon]}
               </span>
               <h4 className='text-[18px] text-[#2f327d] font-semibold'>{item.title}</h4>
               <span className='text-[14px] font-medium text-start'>{item.desciption}</span>
              </div>
            })
         }     
       </div>

        
      </div>
    </div>
  )
}

export default Performence
