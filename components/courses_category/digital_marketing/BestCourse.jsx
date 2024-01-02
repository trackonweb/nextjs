import Image from 'next/image';
import React from 'react';

const List = [
  {
    id: 1,
    title: 'Practical Learning Approach',
    description: `Our curriculum emphasizes hands-on training, providing you with practical knowledge and experience in various facets of digital marketing, including SEO, SEM, social media marketing, content marketing, analytics, and more.`,
    img: '/virtual-classroom-icon.svg',
  },
  {
    id: 2,
    title: 'Real-World Projects',
    description: `Engage in practical projects and case studies, allowing you to apply digital marketing theories in real business scenarios and build a robust portfolio highlighting your expertise.`,
    img: '/support-icon.svg',
  },
  {
    id: 3,
    title: 'Comprehensive Curriculum',
    description: `Acquire proficiency in utilizing digital marketing tools, understanding consumer behavior, creating effective marketing campaigns, optimizing for conversions, and leveraging emerging trends and technologies.`,
    img: '/video-courses-icon.svg',
  },
  {
    id: 4,
    title: 'Industry-Recognized Certification',
    description: `Upon completion, receive a certification that validates your expertise, enhancing your credibility and employability in the competitive field of digital marketing.`,
    img: '/projects-icon.svg',
  },
  {
    id: 5,
    title: 'Expert Guidance',
    description: `Benefit from mentorship and insights shared by seasoned digital marketers, providing guidance on strategy, best practices, and the latest industry trends.`,
    img: '/job-assistance-icon.svg',
  },
  {
    id: 6,
    title: 'Start With Demo Classes',
    description: `To ensure that you are joining the best course, we allow you to attend the initial classes at no cost. You can assure the quality first and then make your decision to finally enroll.`,
    img: '/certification-icon.svg',
  },
];

const BestCourse = () => {
  return (
    <div className='py-10 bg-slate-200'>
      <div className='container mx-auto'>
        <h2 className='lg:text-[34px] text-[28px] font-[700]  text-center leading-10 text-[#2f327d] xl:mx-20 lg:mx-10 mx-4 lg:py-10'>
          Why Choose Our Course?
        </h2>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start items-start xl:mx-20 lg:mx-10 mx-4 pt-10'>
          {List.map((item, index) => {
            return (
              <div
                key={index}
                className=' h-full flex flex-col justify-start items-center gap-3 shadow-md lg:p-7 p-5  rounded-md bg-white group '
              >
                <div>
                  <Image
                    src={item.img}
                    width={70}
                    height={70}
                    alt=''
                    className='object-contain'
                  />
                </div>
                <span className='lg:text-[18px] text-[16px] font-bold group-hover:text-[#64dfcb] duration-500'>
                  {item.title}
                </span>
                <span className='lg:text-[16px] text-[14px] font-normal  text-center leading-7'>
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestCourse;
