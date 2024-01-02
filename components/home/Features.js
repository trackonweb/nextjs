import Image from 'next/image';
import React from 'react';

const features = [
  {
    id: 1,
    title: 'Creative Design',
    description: 'A lot goes into designing the application from rough sketches to digital prints to UI/UX to understanding of the environment needed with cost efficiency.',
    img: '/creative-process.svg',
  },
  {
    id: 2,
    title: 'Quality Service',
    description: 'Our belief is in quality offering over the deliverables. We make sure the projects are taken care of by experienced experts providing the perfect end results.',
    img: '/badge.svg',
  },
  {
    id: 3,
    title: 'On-time Delivery',
    description: `It's not just delivering the project; we also have an excellent team for all technical glitches, future updates, and maintenance of the product.`,
    img: '/on-time.svg',
  },
  {
    id: 4,
    title: '24/7 Live Support',
    description: 'Our motto to serve the best remains untouched; our services are open 24X7. We happily serve, and you can contact us anytime as per your need.',
    img: '/support(1).svg',
  },
];

const Features = () => {
  return (
    <div className={`bg-[url('/stacked-peaks-haikei.png')] bg-cover bg-center  pb-20   `}>
      <div className='container mx-auto'>
        <div className={`flex flex-col justify-center items-center space-y-2 py-10  `}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]'>Our <span className='text-[#0588b0]'>Features</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-[400]'>Trackonweb is one powerful online software suite.</span>
        </div>
        <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center lg:mx-10 xl:mx-20 mx-4`}>
          {features.map((item, index) => {
            const isSpecialItem = index === 1 || index === 3;
            const animationClass = isSpecialItem ? 'custom-bounce' : '';

            return (
              <div
                key={index}
                className={`flex flex-col justify-start items-center p-[25px] gap-[12px] flex-[1 0 0] border rounded-[20px] group bg-[rgba(255, 255, 255, 0.80)] cursor-pointer shadow-md bg-white hover:bg-[#64dfcb] duration-500 ${animationClass}`}
              >
                <h3 className={`text-[#0588b0] text-center text-[20px] font-[700] group-hover:text-[#2f327d] duration-500 ${isSpecialItem ? 'special-text-animation' : ''}`}>
                  {item.title}
                </h3>
                <div className='flex justify-center items-center'>
                  <Image src={item.img} width={80} height={80} alt='' objectFit='' />
                </div>
                <span className='text-black text-center text-[14px] font-medium leading-6 group-hover:text-white '>{item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
