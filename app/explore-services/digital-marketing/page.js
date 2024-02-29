import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/digital_marketing/Creative';
import Customizable from '@/components/services_category/digital_marketing/Customizable';

import Faq from '@/components/services_category/digital_marketing/Faq';
import Performence from '@/components/services_category/digital_marketing/Performence';
import Technologies from '@/components/services_category/digital_marketing/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className='container mx-auto '>
          <div className='xl:mx-20 flex justify-between gap-5 lg:mx-10 mx-4 pt-20'>
            
            <div className='lg:w-1/2 flex flex-col  justify-center items-start '>
            <div className='flex justify-start items-center lg:gap-2 gap-1'>
              <Link
                href={'/'}
                className='text-white lg:text-[16px] text-[12px]'
              >
                Home
              </Link>
              <span className='text-white font-bold'>/</span>
              <Link
                href={'/explore_courses'}
                className='text-white lg:text-[16px] text-[12px]'
              >
                explore-services
              </Link>
              <span className='text-white font-bold'>/</span>
              <span className='text-[#64dfcb] lg:text-[16px] text-[12px]'>
                digital-marketing
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5'>
                Digital Marketing Services
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Empower Your Brand with Strategic Digital Marketing Solutions
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                Our proficient team specializes in navigating the dynamic
                landscape of digital marketing to propel your brand forward.
                With a keen eye on industry trends and consumer behavior, we
                craft customized strategies tailored to amplify your online
                presence.
                <br /> <br />
                From search engine optimization (SEO) to social media management
                and beyond, we deploy a comprehensive suite of tactics designed
                to enhance visibility and engagement across various digital
                platforms.
              </span>
              <div className='flex justify-start items-start gap-5  py-9'>
                <Link href={'/contact'}
                
                  class='text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center '
                >
                  Get a quote
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex'>
              <Image
                src='/digital-marketing-removebg-preview.png'
                width={400}
                height={400}
                alt=' '
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      <Technologies />
      <Creative />
      <Performence />
      <Discuss />
      <Faq />
    </>
  );
}
