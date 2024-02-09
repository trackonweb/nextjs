import Image from 'next/image'
import React from 'react'

const featuredservices = [
    {
        title: 'Cost-Effective Process',
        description: `Unlock value with Trackonweb cost-effective approach. Our streamlined process delivers top-quality results, ensuring your project's success without compromising your budget. Choose affordability without compromise`,
        img: '/creative-process.svg'
    },
    {
        title: 'Creative Team',
        description: `Fuel your vision with Trackonweb creative team. We specialize in original, impactful solutions, ensuring your project stands out. Collaborate with us for a uniquely creative digital journey.`,
        img: '/creative-process.svg'
    },
    {
        title: '24/7 Help Desk',
        description: `Uninterrupted assistance awaits at Trackonweb 24/7 Help Desk. Our committed team ensures seamless operations and offers constant support for your peace of mind. Rely on us for continuous assistance.`,
        img: '/creative-process.svg'
    },
    {
        title: 'Great UI/UX',
        description: `Our UX strategists, graphic designers, and marketing experts collaborate to craft innovative design interactions across diverse touchpoints, ensuring a compelling and engaging user experience. Choose creativity with Trackonweb.`,
        img: '/creative-process.svg'
    },
    {
        title: 'SEO Friendly',
        description: `Our in-house SEO experts optimize your site, making it search engine-friendly for increased visibility in relevant search results. Elevate traffic to your website with Trackonweb's effective SEO strategies.`,
        img: '/creative-process.svg'
    },
    {
        title: 'Responsive Design',
        description: `Experience seamless user engagement with Trackonweb's responsive design. We craft visually appealing and functional interfaces that adapt to various devices, ensuring an optimal user experience. Choose responsiveness with us`,
        img: '/creative-process.svg'
    },
]

const FeaturedServices = () => {
  return (
    <div className='bg-gradient-to-r from-white to-slate-100 via-black-28 py-20'>
    <div className='container mx-auto'>
<div className='xl:mx-20 lg:mx-10 mx-4'>
<div className='flex flex-col justify-center items-center gap-3'>
<p className='font-medium text-[#0588b0] text-[16px] tracking-wide'>FETAURED SERVICES</p>
<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'>why Choosing Trackonweb Your Gateway to Technological Brilliance and Business Triumph</h2>
</div>
<div  className={`grid gap-10 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  justify-items-center  xl:mx-20 lg:mx-10 mx-4 pt-16  `}>
{
    featuredservices.map((item,index)=>{
        return <div key={index}
             
        className={`flex flex-col justify-start items-center p-[25px] gap-[12px] flex-[1 0 0] border rounded-[20px] group bg-[rgba(255, 255, 255, 0.80)] cursor-pointer shadow-md bg-white hover:bg-[#64dfcb] duration-500 `}
      >
         <div className='flex justify-center items-center'>
          <Image src="/creative-process.svg" width={80} height={80} alt="Cost-Effective Process" objectFit='' />
        </div>
        <h3 className={`text-[#0588b0] text-center text-[20px] font-[700] group-hover:text-[#2f327d] duration-500 `}>
       {item.title}
        </h3>
       
        <span className='text-black text-center text-[14px] font-medium leading-6 group-hover:text-white '>{item.description}</span>
      </div>
    })
}
</div>

</div>

    </div>
    </div>
  )
}

export default FeaturedServices
