import Image from 'next/image'
import React from 'react'

const process = [
    {
        id: 1,
        title: 'Research',
        description: 'Thorough research is foundational. We delve into market trends, user needs, and technological landscapes to gather valuable insights. This informs our strategies, ensuring solutions aligned with client objectives and user expectations.',
        img: '/research.webp',
    },
    {
        id: 2,
        title: 'Plan',
        description: `Detailed planning is paramount. We meticulously chart out a roadmap, defining objectives, milestones, and resources required for successful execution. A robust plan serves as our guide, enabling streamlined project management and goal attainment`,
        img: '/plan.webp',
    },
    {
        id: 3,
        title: 'Implement',
        description: `Implementation is where concepts materialize. Leveraging cutting-edge tools and expertise, we bring designs to life with precision. Our development phase adheres to industry best practices, ensuring code integrity, scalability, and functionality in the final product`,
        img: '/implements.webp',
    },
    {
        id: 4,
        title: 'Testing',
        description: 'Testing is our quality assurance bedrock. Rigorous testing protocols validate functionality, performance, and security aspects. Through systematic testing cycles, we identify and rectify anomalies, ensuring a seamless, bug-free user experience.',
        img: '/testing.webp',
    },
    {
        id: 5,
        title: 'Optimize',
        description: 'Optimization is continuous refinement. We analyze performance metrics, user feedback, and evolving needs to fine-tune solutions. Iterative improvements enhance efficiency, user satisfaction, and ensure our products remain adaptive and competitive in dynamic environments.',
        img: '/optimize.webp',
    },

]

const Process = () => {
  return (
    <div className='py-10 bg-slate-200'>
    <div className='container mx-auto'>
       <h2 className='lg:text-[34px] text-[28px] font-[700] leading-10 text-[#2f327d] xl:mx-20 lg:mx-10 mx-4'>Our Process</h2>
       <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start items-start xl:mx-20 lg:mx-10 mx-4 pt-10'>
      
      
     {
        process.map((item,index)=>{
            return <div key={index} className=' h-full flex flex-col justify-start items-center gap-3 shadow-md p-7  rounded-md bg-[#2f327d] text-white '>
                <div>
                    <Image src={item.img} width={40} height={40} alt='' className='object-contain'/>
                </div>
              <span className='text-[22px] lg:text-[26px] font-bold'>{item.title}</span>
              <span className='text-[14px] font-normal  text-justify'>{item.description}</span>
            </div>
        })
     }
       
       </div>
    </div>
   </div>
  )
}

export default Process
