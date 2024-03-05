"use client"
import React, { useState } from 'react'
import RequestModel from '../RequestModel'

const services = [
    {
        title: "Web App",
        description: "Explore our comprehensive web development services, specializing in website development with a focus on responsive web design. Our expertise extends to creating SEO-friendly websites, offering the best website solutions and expert web page design. Additionally, we provide WordPress maintenance services, ensuring cost-effective website maintenance. Catering to specific industries, we excel in healthcare website design and real estate web design. Our commitment lies in delivering affordable web design for small businesses, conveniently located with web design services near you.",
    },
    {
        title: "E-Commerce",
        description: "Transform your online business with our specialized e-commerce web development services, dedicated to creating seamless, user-friendly platforms that maximize your online potential. From secure transactions to engaging interfaces, our tailored solutions ensure success. Whether building a new online store or optimizing an existing one, our experts guarantee reliable integration with your tech stack and third-party tools for an optimal user experience. Elevate your e-commerce journey with our unmatched expertise.",
    },
    {
        title: "Small Business Web Solutions",
        description: "We empower small businesses to thrive by offering comprehensive website solutions that foster a robust online presence. Whether you're a local store, real estate agency, or service provider, we facilitate growth with cost-effective strategies. Our combined solutions in web development and digital marketing ensure that even on a budget, businesses can build a strong online identity and reach new heights. Partner with us to elevate your small business and make a lasting impact in the digital world",
    },
    {
        title: "Web Portals",
        description: "Explore our extensive range of web portal services meticulously designed for diverse audiences – customers, business partners, e-commerce users, patients, vendors, and interest-based communities. Our specialization lies in creating dynamic portals that seamlessly aggregate data from corporate systems, offering a reliable source of up-to-date information and robust support for users. With a dedicated focus on technical precision, we excel in crafting portals that transcend conventional boundaries, delivering an immersive and user-centric experience across various sectors. Elevate your online presence confidently with our advanced web portal solutions, where innovation seamlessly meets unparalleled functionality.",
    },
    {
        title: "Healthcare and Education Websites",
        description: "Rely on our skilled team specializing in the creation of websites for healthcare, education, consulting, real estate, and various businesses. Our expertise has led to the development of a strong online presence across diverse industries. From healthcare platforms ensuring seamless patient engagement to educational websites fostering dynamic learning environments, our experience spans a wide spectrum. Collaborate with us to leverage the proficiency of a dedicated team committed to crafting impactful websites tailored to the unique requirements of the healthcare and educational sectors.",
    },
    {
        title: "Website Maintenance and Updation",
        description: "Enhance your website's performance with our dedicated team. We conduct a complimentary SEO audit to boost search engine visibility. Guaranteeing a fast-loading, error-free website through precise bug fixes and technical optimizations. Keep up with industry standards with responsive design updates, security patches, and content revisions. Partner with us to navigate the technical aspects, ensuring your website remains competitive. ",
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

<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'>Explore Our Highly Recommended Web Development Services</h2>

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
