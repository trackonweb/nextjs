"use client"
import React, { useState } from 'react'
import RequestModel from '../RequestModel';


const services = [
    {
        title: "Custom Mobile App Solutions",
        description: `
        Unlock the full potential of your brand with Trackonweb custom mobile app development. Our expert team transforms ideas into user-friendly and innovative applications. From concept to execution, we ensure your app stands out, delivering a seamless experience to your users.`,
    },
    {
        title: "E-commerce App Development",
        description: `Revolutionize your online business with Trackonweb dedicated e-commerce app solutions. Crafting visually appealing and intuitive mobile storefronts, we enhance your digital presence and boost customer engagement. Elevate your e-commerce game with our specialized development services.`,
    },
    {
        title: "Small Business App Packages",
        description: `Empower your small business with Trackonweb comprehensive mobile app services. Affordable and impactful, we handle everything from app design to implementation. Let us help your business establish a strong and memorable online presence that resonates with your audience.`,
    },
    {
        title: "Web Portal Mobile Integration",
        description: `Explore our diverse mobile integration services designed for various audiences. We create dynamic mobile interfaces and visually appealing data presentations, enhancing the user experience across different sectors. Elevate your online presence with our advanced mobile integration solutions.`,
    },
    {
        title: "Healthcare and Education App Solutions",
        description: `Rely on our expert team for powerful mobile app solutions customized for healthcare and education. We specialize in crafting apps that captivate patients, students, and diverse audiences, establishing a robust online presence for businesses in these sectors.`,
    },
    {
        title: "Mobile App Maintenance and Updates",
        description: `Enhance your app's performance with Trackonweb dedicated mobile app maintenance team. We provide SEO-friendly updates and ensure your app stays competitive and visually appealing. Partner with us to handle the technical aspects of mobile app maintenance, keeping your app at the forefront of user experience and design trends.`,
    },
]

const Offer = () => {
  const [reqModel, setreqModel] = useState(false);

  const handleOpenReqModel = () => {
    setreqModel(true);
  };

  const handleCloseReqModel = () => {
    setreqModel(false);
  };
  return (
    <div className='bg-slate-50 py-20'>
        <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3 xl:mx-20 lg:mx-10 mx-4'>

<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'>Custom Mobile Solutions Crafted for Success</h2>

</div>
<div className='grid md:grid-cols-2 lg:grid-cols-3 justify-start items-start gap-10 mt-10 xl:mx-20 lg:mx-10 mx-4'>
{
    services.map((item, index)=>{
        return <div key={index} className="relative  h-full  bg-white rounded-2xl p-4  shadow shadow-sky-800 flex flex-col justify-start gap-8 items-stretch">
        <div className="flex flex-col gap-3 justify-center items-center">
          <svg className="stroke-blue-400 w-12 h-12 p-1 bg-sky-100 rounded-2xl" height={100} preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width={100} x={0} xmlns="http://www.w3.org/2000/svg" y={0}>
            <path d="M60.7,25v7.2m0,14.2v7.2m0,14.2V75M25,25a7.1,7.1,0,0,0-7.1,7.2V42.9a7.1,7.1,0,1,1,0,14.2V67.8A7.1,7.1,0,0,0,25,75H75a7.1,7.1,0,0,0,7.1-7.2V57.1a7.1,7.1,0,1,1,0-14.2V32.2A7.1,7.1,0,0,0,75,25Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={8}>
            </path>
          </svg>
          <div className='flex flex-col gap-3'>
            <span className="text-[#0588b0]  duration-500 text-center font-semibold text-xl">{item.title}</span>
            <p className="text-sm text-gray-600 ">{item.description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-auto">
       <button onClick={handleOpenReqModel}  className="button capitalize">
       request help for ecommerce
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd" />
  </svg>
</button>



        </div>
       
      </div>
    })
}

</div>
{reqModel && <RequestModel handleCloseReqModel={handleCloseReqModel} handleOpenReqModel={handleOpenReqModel}/>}

        </div>
    </div>
   

  

  
  )
}

export default Offer
