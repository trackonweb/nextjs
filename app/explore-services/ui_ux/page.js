import Discuss from '@/components/common/Discuss';
import Creative from '@/components/services_category/ui_ux/Creative';
import Customizable from '@/components/services_category/ui_ux/Customizable';

import Faq from '@/components/services_category/ui_ux/Faq';
import Performence from '@/components/services_category/ui_ux/Performence';
import Technologies from '@/components/services_category/ui_ux/Technologies';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className='container mx-auto '>
          <div className='xl:mx-20 flex justify-between lg:mx-10 mx-4 pt-20'>
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
                ui_ux
              </span>
            </div>
              <span className='text-white  lg:text-[32px] text-[22px] font-bold tracking-wider pt-5'>
                Ui & Ux Services
              </span>
              <span className='text-white lg:text-[17px] text-[14px] mt-3'>
                Crafting Exceptional UI/UX Experiences Tailored to You
              </span>
              <span className='text-white text-start lg:text-[17px] text-[14px] font-normal leading-7 mt-5'>
                At our design core, we specialize in the art of User Interface
                (UI) and User Experience (UX), shaping digital experiences that
                are both aesthetically pleasing and intuitively functional.
                <br />
                <br />
                Partner with us to elevate your digital presence with
                captivating UI/UX designs that leave a lasting impression. Let's
                work together to create an experience that not only looks
                beautiful but also functions seamlessly for your users.
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
                src='/0828a96a8cdc2fa96889ed79904e022c-removebg-preview.png'
                width={800}
                height={800}
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
