import Image from 'next/image';
import React from 'react';

const List = [
  {
    id: 1,
    title: '100% Practical-Oriented Training',
    description: `Our curriculum is crafted to ensure hands-on learning, allowing you to master both front-end and back-end technologies crucial for website and web application development.`,
    img: '/virtual-classroom-icon.svg',
  },
  {
    id: 2,
    title: 'Real Project Experience',
    description: `Engage in over 10 hands-on web development projects, enabling you to apply your skills in real-world scenarios and build a diverse portfolio showcasing your capabilities.`,
    img: '/support-icon.svg',
  },
  {
    id: 3,
    title: 'Comprehensive Curriculum',
    description: `Acquire expertise in key programming languages and frameworks such as HTML, CSS, JavaScript, React, Node.js, database management, API integration, and more.`,
    img: '/video-courses-icon.svg',
  },
  {
    id: 4,
    title: 'Industry-Recognized Certification',
    description: `Upon completion, receive a certification that validates your skill set, enhancing your credibility and employability in the competitive field of web development.`,
    img: '/projects-icon.svg',
  },
  {
    id: 5,
    title: 'Live Mentorship from Experts',
    description: `Benefit from live mentorship sessions delivered by experienced professionals, providing guidance and support throughout your learning journey.`,
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
