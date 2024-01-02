import Image from 'next/image';
import React from 'react';

const List = [
  {
    id: 1,
    title: 'Practical-Oriented Training',
    description: `Our curriculum emphasizes hands-on learning, allowing you to grasp design concepts and apply them effectively in practical scenarios.`,
    img: '/virtual-classroom-icon.svg',
  },
  {
    id: 2,
    title: 'Diverse Project Portfolio',
    description: `Engage in over 10 real web design projects, honing your skills and building a robust portfolio showcasing your creativity and proficiency.`,
    img: '/support-icon.svg',
  },
  {
    id: 3,
    title: 'Comprehensive Curriculum',
    description: `Acquire expertise in fundamental design tools and languages, including HTML, CSS, JavaScript, responsive design, user experience (UX), user interface (UI) principles, and more.`,
    img: '/video-courses-icon.svg',
  },
  {
    id: 4,
    title: 'Industry-Recognized Certification',
    description: ` Upon completion, receive a certification validating your skill set, boosting your credibility in the competitive field of web design.`,
    img: '/projects-icon.svg',
  },
  {
    id: 5,
    title: 'Expert Mentorship',
    description: `Benefit from live mentorship and guidance provided by experienced professionals throughout the course, ensuring a supportive and enriching learning environment.`,
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
