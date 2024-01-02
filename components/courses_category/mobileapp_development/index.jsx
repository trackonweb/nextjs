
import Link from 'next/link';
import DemoForm from '@/components/common/DemoForm';


const HeroSection = () => {
  
  return (
    <div className={`bg-[#2f327d] border-b-8 border-red-500 `}>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row  justify-start items-center gap-5 xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10'>
          <div className=' lg:w-1/2 w-full flex flex-col justify-start items-start'>
            <div className='flex justify-start items-center lg:gap-2 gap-0'>
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
                mobile_app_development
              </span>
            </div>
            <span className='text-white lg:text-[27px] text-[20px] font-bold tracking-wider py-6 capitalize'>
              Build Innovative Mobile Apps: Join Our Comprehensive Course
            </span>
            <span className='text-white text-[16px] leading-7'>
              Embark on an exciting journey into the world of mobile app
              development through our comprehensive course designed to equip you
              with the essential skills needed to create innovative and
              functional mobile applications. At our institution, we're
              committed to nurturing aspiring developers and guiding them
              towards becoming proficient professionals in mobile app
              development.
              <br />
              <br />
              Embark on the path to becoming a proficient mobile app developer.
              Join our demo class to experience firsthand how our mobile app
              development course can expand your skills and pave the way for a
              successful career in app creation. Don’t miss this opportunity to
              explore the world of mobile app development. Enroll now!
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
