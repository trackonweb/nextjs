"use client"
import React, { useState } from 'react'
import RequestModel from '../RequestModel'

const services = [
    {
        title: "UI/UX Design Excellence",
        description: `Elevate your digital presence with our unparalleled UI/UX design services. Our expert team seamlessly blends aesthetics with functionality, creating intuitive and visually stunning user interfaces. From wireframes to interactive prototypes, we ensure a user experience that aligns perfectly with your brand's identity. Let us redefine your digital landscape, focusing on seamless navigation, engaging visuals, and innovation to enhance user satisfaction and interaction.`,
        },
        {
        title: "E-commerce UI/UX Solutions",
        description: `Revitalize your online store with our dedicated e-commerce UI/UX design services. We craft user-friendly interfaces, enhance product displays, and optimize the overall shopping experience. Our focus is on delivering a seamless and attractive journey for your customers, ensuring your e-commerce platform stands out and encourages repeat business. Elevate your online presence with our specialized UI/UX design solutions tailored for e-commerce success.`,
        },
        {
        title: "Small Business UI/UX Packages",
        description: `Boost your small business with our comprehensive UI/UX design services. We create user-centric interfaces, improving navigation and engagement. Our goal is to help your business establish a strong and memorable online presence, ensuring a seamless and enjoyable experience for your audience. From intuitive layouts to responsive designs, let us elevate your brand through impactful UI/UX solutions.`,
        },
        {
        title: "Web Portal UI/UX",
        description: `Explore our diverse web portal UI/UX services designed for different audiences. We create dynamic interfaces and visually appealing data presentations, enhancing the user experience across various sectors. Our focus is on blending innovation with functionality, ensuring an immersive and user-friendly digital experience for your audience. Elevate your online presence with our advanced web portal UI/UX solutions.`,
        },
        {
        title: "Healthcare and Education UI/UX",
        description: `Count on our expert team for powerful UI/UX designs customized for healthcare and education. We specialize in creating interfaces that captivate patients, students, and diverse audiences, establishing a robust online presence for businesses in these sectors. Trust us to create engaging and impactful UI/UX designs that resonate with your target audience and elevate your brand.`,
        },
        {
        title: "UI/UX for Website Excellence",
        description: `Improve your website's performance with our dedicated UI/UX design team. We provide user-friendly interfaces, responsive design updates, and SEO-friendly visuals to ensure your site stays competitive and visually appealing. Partner with us to handle the technical aspects of UI/UX design maintenance, keeping your website at the forefront of user experience and design trends.`,
        }
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

<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'>Explore Our Highly Recommended UI & UX Services</h2>

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
