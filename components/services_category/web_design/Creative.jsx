import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Creative = () => {
  return (
    <div className={`bg-[#2f327d]  `}>
      <div className='container mx-auto '>
        <div className='xl:mx-20 flex lg:flex-row flex-col lg:mx-10 mx-4 py-20'>
          <div className='lg:w-1/2 w-full'>
            <Image
              src='/crevi.png'
              width={500}
              height={500}
              alt=' '
              className='object-contain'
            />
          </div>
          <div className='lg:w-1/2 w-full flex flex-col  justify-center items-start '>
            <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider '>
              Futuristic Web Designs for Unparalleled Digital Journeys:
            </span>

            <span className='text-white text-justify lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
              Experience a transformative digital odyssey with our avant-garde
              web designs. Harmonizing creativity and functionality, our
              intuitive solutions promise standout online presence and
              exceptional user experiences, captivating audiences with seamless
              innovation.
            </span>
            <div className='flex justify-start items-start gap-5  pt-9'>
              <Link href={'/contact'}
                
                class='text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center '
              >{`Work with us`}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
