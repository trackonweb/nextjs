import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/mobileapp_development/Creative';
import Customizable from '@/components/services_category/mobileapp_development/Customizable';

import Faq from '@/components/services_category/mobileapp_development/Faq';
import Performence from '@/components/services_category/mobileapp_development/Performence';
import Technologies from '@/components/services_category/mobileapp_development/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className='container mx-auto '>
          <div className='xl:mx-20 flex justify-between lg:mx-10 mx-4 pt-20'>
            <div className='lg:w-1/2 flex flex-col  justify-center items-start '>
            <div className='flex justify-start items-center lg:gap-2 '>
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
                mobile_app_development
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5 '>
                Mobile App Development Services
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Empower Your Vision with Custom Mobile App Development
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                At our core, we are a team passionate about turning innovative
                ideas into functional and intuitive mobile applications. With
                extensive expertise in app development, we specialize in
                crafting bespoke solutions that resonate with your audience and
                meet your specific business needs.
                <br />
                <br /> Partner with us to transform your ideas into innovative,
                functional, and engaging mobile applications that leave a
                lasting impact on your audience. Let's embark on this journey
                together to redefine the possibilities of mobile technology.
              </span>
              <div className='flex justify-start items-start gap-5  py-9'>
                <Link href={'/contact'}
                  
                  class='text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center '
                >
                  Get a quote
                </Link>
              </div>
            </div>
            <div className='hidden lg:flex '>
              <Image
                src='/appp.png'
                width={700}
                height={700}
                alt=' '
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Customizable /> */} <Technologies />
      <Creative />
      <Performence />
      <Discuss />
      <Faq />
    </>
  );
}
