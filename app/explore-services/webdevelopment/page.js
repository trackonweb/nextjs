import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/web_development/Creative';
import Customizable from '@/components/services_category/web_development/Customizable';

import Faq from '@/components/services_category/web_development/Faq';
import Performence from '@/components/services_category/web_development/Performence';
import Technologies from '@/components/services_category/web_development/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className='container mx-auto '>
          <div className='xl:mx-20 flex lg:mx-10 mx-4 pt-20'>
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
               web_development
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5'>
                Dynamic Web Development Solutions
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Crafting Innovative Web Solutions Tailored to Your Needs
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                Our commitment extends beyond delivering a mere product; we
                stand side by side with our clients to understand their unique
                requirements. From initial concepts to the final launch, we
                prioritize your satisfaction, offering ongoing support and
                enhancements to ensure your web solution remains cutting-edge
                and aligned with your vision. <br />
                <br /> Embark on a journey of innovation and success with our
                comprehensive web development services. Trust our team to
                transform your ideas into immersive digital experiences that
                resonate with your audience. Elevate your online
                presence—partner with us today and witness your vision come
                alive on the web.
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
                src='/Web-Designing-Course-Syllabus-removebg-preview.png'
                width={600}
                height={600}
                alt=' '
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      <Customizable />
      <Creative />
      <Technologies />
      <Performence />
      <Discuss />
      <Faq />
    </>
  );
}
