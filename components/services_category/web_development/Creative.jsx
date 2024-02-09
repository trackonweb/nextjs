import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Creative = () => {
  return (
    <div className={`bg-[#2f327d]  `}>
      <div className='container mx-auto '>
        <div className='xl:mx-20 flex lg:flex-row gap-5 flex-col lg:mx-10 mx-4 py-10'>
          <div className='lg:w-1/2 w-full'>
            <Image
              src='/core_img_gkryji.png'
              width={500}
              height={500}
              alt=' '
              className='object-contain'
            />
          </div>
          <div className='lg:w-1/2 w-full flex flex-col  justify-center items-start '>
            <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider '>
              Revolutionize Your Digital Landscape with Cutting-Edge Web
              Development:
            </span>

            <span className='text-white text-justify lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
              Embark on a digital evolution with our avant-garde web
              development. We blend creativity seamlessly with functionality,
              crafting immersive experiences. Our solutions captivate users,
              delivering visually striking designs and intuitive interfaces that
              redefine online engagement and brand presence.
            </span>
            <div className='flex justify-start items-start gap-5  py-9'>
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
