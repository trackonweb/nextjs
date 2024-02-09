import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/graphic_design/Creative';
import Customizable from '@/components/services_category/graphic_design/Customizable';

import Faq from '@/components/services_category/graphic_design/Faq';
import Performence from '@/components/services_category/graphic_design/Performence';
import Technologies from '@/components/services_category/graphic_design/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
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
               graphic_design
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5 '>
                Graphic Design Services
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Passionate Craftsmanship for Your Graphic Design Needs
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                Our dedicated team brings a wealth of experience to the table,
                specializing in the intricate art of graphic design. Whether
                it's breathing life into fresh designs or revamping existing
                ones, we ensure that your visuals resonate with contemporary
                trends and captivate your audience's attention.
                <br />
                At our core, we prioritize our clients' satisfaction, standing
                shoulder to shoulder with you to provide ongoing support and
                enhancements for your designs. From conceptualization to the
                final product, our commitment is to bring your vision to life
                with precision and care.
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
                src='/4738060-removebg-preview.png'
                width={700}
                height={700}
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
