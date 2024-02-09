import Image from 'next/image';
import React from 'react';

const features = [
  {
    id: 1,
    title: 'Creative Design',
    description: 'A lot goes into designing the application from rough sketches to digital prints to UI/UX to understanding of the environment needed with cost efficiency.',
    img: '/creative-process.svg',
    alt: 'Creative Design',
  },
  {
    id: 2,
    title: 'Quality Service',
    description: 'Our belief is in quality offering over the deliverables. We make sure the projects are taken care of by experienced experts providing the perfect end results.',
    img: '/badge.svg',
    alt: 'Quality Service',
  },
  {
    id: 3,
    title: 'On-time Delivery',
    description: `Ensuring punctual project delivery is our priority. Our commitment to on-time completion reflects our dedication to reliability and client satisfaction.`,
    img: '/on-time.svg',
    alt: 'On-time Delivery',
  },
  {
    id: 4,
    title: '24/7 Live Support',
    description: 'Our commitment to delivering the highest quality services remains unwavering, with our availability 24/7. We are at your service, and you may contact us at any time as per your requirements',
    img: '/support(1).svg',
    alt: '24/7 Live Support',
  },
];

const Features = () => {
  return (
    <div className={`bg-[url('/stacked-peaks-haikei.png')] bg-cover bg-center  pb-20   `}>
      <div className='container mx-auto'>
        <div className={`flex flex-col justify-center items-center space-y-2 py-10  `}>
          <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[600] tracking-wide'>Our <span className='text-[#0588b0]'>Features</span></h3>
          <span className='text-[#696984] text-center lg:text-[22px] text-[16px] font-normal'>Trackonweb is one powerful online software suite.</span>
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
                <h3 className={`text-[#0588b0] text-center text-[20px] font-[600] tracking-wide group-hover:text-[#2f327d] duration-500 ${isSpecialItem ? 'special-text-animation' : ''}`}>
                  {item.title}
                </h3>
                <div className='flex justify-center items-center'>
                  <Image src={item.img} width={80} height={80} alt={item.alt} objectFit='' />
                </div>
                <span className='text-black text-center text-[14px] font-normal leading-6 group-hover:text-white tracking-wide '>{item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
