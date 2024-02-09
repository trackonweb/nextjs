import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/web_design/Creative';


import Faq from '@/components/services_category/web_design/Faq';
import Performence from '@/components/services_category/web_design/Performence';
import Technologies from '@/components/services_category/web_design/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className='container mx-auto '>
          <div className='xl:mx-20 flex gap-5 lg:mx-10 mx-4 pt-20'>
            <div className='lg:w-1/2 flex flex-col  justify-center items-start '>
            <div className='flex justify-start items-center gap-1 lg:gap-2'>
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
               web_Design
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5'>
                Web Design Services
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Elevate Your Digital Presence with Expert Web Design Solutions
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                We pride ourselves on being by our clients' side, offering
                steadfast support to maintain and elevate these digital
                platforms. Our commitment goes beyond the initial design phase,
                ensuring ongoing enhancements and adaptations to keep your
                website at the forefront of innovation.
                <br />
                <br />
                With a meticulous approach and a focus on your unique needs,
                we're here to transform your vision into a compelling and
                user-friendly online experience. Let us guide you through every
                step of the process, from inception to execution, to create a
                website that truly resonates with your audience.
              </span>
              <div className='flex justify-start items-start gap-5  py-9'>
                <Link href={'/contact'}
                 
                  class='text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center '
                >
                  Get a quote
                </Link>
              </div>
            </div>
            <div className=' hidden lg:w-1/2 lg:flex'>
              <Image
                src='/2211.w026.n002.2759B.p1.2759-removebg-preview.png'
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
