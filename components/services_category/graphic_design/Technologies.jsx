import Image from 'next/image';
import React from 'react';

const technologiesList = [
  {
    id: 1,
    Technology: 'Photoshop',
    img: '/download (7).png',
  },
  {
    id: 2,
    Technology: 'Coreldraw',
    img: '/download (1).jpg',
  },
  {
    id: 3,
    Technology: 'illustrator',
    img: '/download (8).png',
  },
  {
    id: 4,
    Technology: 'Figma',
    img: '/download (9).png',
  },
  {
    id: 5,
    Technology: 'Canva',
    img: '/download (2).jpg',
  },
 
];

const Technologies = () => {
  return (
    <div className='bg-[#fff6f3] text-black py-10'>
      <div className='container mx-auto'>
        <div
          className={`flex flex-col justify-center items-center space-y-2 xl:mx-20 lg:mx-10 mx-4 `}
        >
          <h3 className='text-[#2f327d] lg:text-[34px] text-[22px] font-[700] leading-10'>
            Our Latest <span className='text-[#0588b0] '>Technologies</span>
          </h3>
          <span className='text-black text-center  lg:text-[18px] text-[14px] font-[400]'>
            Trackonweb IT Solutions leverages cutting-edge technologies to
            deliver innovative software solutions, ensuring efficiency,
            reliability, and seamless integration for your business success.
          </span>
        </div>
        <div
          className={` flex flex-wrap gap-5  justify-items-center  xl:mx-20 lg:mx-10 mx-4 pt-16 pb-10 `}
        >
          {technologiesList.map((item, index) => {
            return (
              <div
                key={index}
                className='bg-white flex-1 py-[25px] px-[40px] shadow flex flex-col justify-center items-center gap-3'
              >
                <div>
                  <Image
                    src={item.img}
                    width={70}
                    height={70}
                    alt=''
                    className='object-contain'
                  />
                </div>
                <span className='text-black capitalize font-medium'>
                  {item.Technology}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
