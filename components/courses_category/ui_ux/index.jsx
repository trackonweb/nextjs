
import Link from 'next/link';

import DemoForm from '@/components/common/DemoForm';

const HeroSection = () => {
 
  return (
    <div className={`bg-[#2f327d] border-b-8 border-red-500 `}>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row  justify-start items-center gap-5 xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10'>
          <div className=' lg:w-1/2 w-full flex flex-col justify-start items-start'>
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
                explore_courses
              </Link>
              <span className='text-white font-bold'>/</span>
              <span className='text-[#64dfcb] lg:text-[16px] text-[12px]'>
                Ui_Ux
              </span>
            </div>
            <span className='text-white lg:text-[27px] text-[20px] font-bold tracking-wider py-6 capitalize'>
              Master UI/UX Design: Enroll in Our Comprehensive Course
            </span>
            <span className='text-white text-[16px] leading-7'>
              Enter the dynamic world of UI/UX design through our comprehensive
              course meticulously designed to equip you with the essential
              skills needed to craft exceptional user experiences and intuitive
              interfaces. At our institution, we're committed to guiding
              aspiring designers towards becoming proficient professionals in
              UI/UX design.
              <br />
              <br />
              Embark on a journey towards mastering UI/UX design principles.
              Join our demo class to experience firsthand how our UI/UX design
              course can amplify your skills and pave the way for a successful
              career in creating impactful user experiences. Don’t miss this
              opportunity to refine your design abilities. Enroll now!
            </span>
            <button className='bg-[#0588b0] hover:bg-[#64dfcb] duration-500 rounded-md text-white uppercase px-7 py-4 font-medium text-[16px] tracking-wider my-5'>
              Register for free demo
            </button>
          </div>
         <DemoForm/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
