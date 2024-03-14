"use client"
import React, { useState } from 'react'
import RequestModel from '../RequestModel';


const services = [
    {
        title: "Custom Graphic designing",
        description: `
        Enhance your brand identity with our bespoke graphic design services. Our skilled team transforms concepts into captivating visuals, crafting eye-catching logos and compelling social media graphics. We bring your vision to life with a perfect blend of creativity and precision, ensuring your brand stands out with unique and impactful design solutions.`,
    },
    {
        title: "E-commerce Graphic",
        description: `Revitalize your online store through our dedicated e-commerce graphic design services. Crafting visually appealing product images, banners, and graphics, we enhance your digital presence. Our focus is on delivering a seamless and attractive user experience, ensuring your e-commerce platform stands out and engages customers effectively. Elevate your online business with our specialized design solutions.`,
    },
    {
        title: "Small Business Graphic Designs ",
        description: `Boost your small business with our all-inclusive graphic design services. Affordable and impactful, we handle everything from crafting logos to creating marketing materials. Our goal is to help your business leave a lasting mark in the digital world, ensuring a strong and memorable online presence that resonates with your audience.`,
    },
    {
        title: "Brand Identity Design",
        description: `
        Elevate your brand with Trackonweb exceptional graphic design services. Our creative experts specialize in crafting unique and impactful brand identities, ensuring a cohesive and memorable visual representation. From logos to marketing collateral, we deliver tailored designs that resonate with your audience and leave a lasting impression. Transform your brand today!`,
    },
    {
        title: "Advertising Design and Marketing graphics ",
        description: `
        
Transform your advertising and marketing strategies with Trackonweb cutting-edge graphic design services. Our expert designers bring creativity to life, producing eye-catching visuals that captivate your audience. From compelling ad designs to engaging marketing graphics, we craft impactful visuals that elevate your brand's presence and drive results. Elevate your marketing game with us!`,
    },
    {
        title: "Social Media Graphics",
        description: `Boost your online presence with Trackonweb graphic design services. We specialize in creating eye-catching and shareable content customized for your brand. Whether it's appealing social media graphics or captivating visuals, we make sure your online identity shines, building strong connections with your audience. Supercharge your social media strategy today!`,
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

<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'>Explore Our Highly Recommended Graphic Design Services</h2>

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
       request a quote
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
