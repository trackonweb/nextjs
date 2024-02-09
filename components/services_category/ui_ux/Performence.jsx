import React from 'react';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoMdDesktop } from 'react-icons/io';
import { FaCloudRain } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { GiCycle } from 'react-icons/gi';

const iconComponents = {
  IoMdDesktop: (
    <IoMdDesktop className='text-[40px] text-[#64dfcb] animate-bounce' />
  ),
  FaCloudRain: (
    <FaCloudRain className='text-[40px] text-[#64dfcb] animate-bounce' />
  ),
  RiTeamFill: (
    <RiTeamFill className='text-[40px] text-[#64dfcb] animate-bounce' />
  ),
  GiCycle: <GiCycle className='text-[40px] text-[#64dfcb] animate-bounce' />,
  MdOutlineDesignServices: (
    <MdOutlineDesignServices className='text-[40px] text-[#64dfcb] animate-bounce' />
  ),
};

const list = [
  {
    id: 1,
    title: 'User-Centric Approach',
    desciption: `Our design process revolves around understanding user behavior, ensuring that every interface element serves a purpose, fostering seamless interactions and satisfaction.`,
    icon: 'IoMdDesktop',
  },
  {
    id: 2,
    title: 'Wireframes & Prototypes',
    desciption: `Beginning with meticulous wireframes and prototypes, we visualize and refine designs iteratively, ensuring optimal usability and addressing user needs from the outset.`,
    icon: 'FaCloudRain',
  },
  {
    id: 3,
    title: 'Visual Consistency',
    desciption: `We create visually stunning interfaces that maintain consistency with your brand identity, harmonizing aesthetics and functionality for a cohesive user experience.`,
    icon: 'RiTeamFill',
  },
  {
    id: 4,
    title: 'Accessibility Integration',
    desciption: ` Adhering to accessibility standards, our designs cater to diverse users, ensuring inclusivity and compliance with accessibility guidelines for an enhanced user experience.`,
    icon: 'GiCycle',
  },
  {
    id: 5,
    title: 'Responsive Design',
    desciption: `Our designs seamlessly adapt to various devices, offering a uniform experience across platforms, ensuring accessibility and usability regardless of screen size or device type.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 6,
    title: 'Usability Testing & Iteration',
    desciption: `Rigorous testing validates design choices, enabling us to refine and optimize interfaces based on user feedback, ensuring intuitive interactions and user-centric design.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 7,
    title: 'Continuous Improvement',
    desciption:
      'Embracing an iterative process, we consistently refine and evolve designs, incorporating user insights and technological advancements for ongoing enhancements.',
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 8,
    title: 'Collaborative Partnership',
    desciption: `We engage clients throughout the design journey, fostering transparent communication and aligning our designs with your business goals and user expectations.`,
    icon: 'MdOutlineDesignServices',
  },
];

const Performence = () => {
  return (
    <div className='bg-[#f3f7fd] py-10'>
      <div className='container mx-auto'>
        <div
          className={`flex flex-col justify-center lg:items-center  items-start space-y-1 xl:mx-20 lg:mx-10 mx-4 `}
        >
          <h3 className='text-[#2f327d] lg:text-[34px] lg:text-center text-start text-[26px] font-[700] leading-10 tracking-wider'>
            Crafting Intuitive Experiences through Expert UI/UX Design
          </h3>
          <span className=' text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium '>
            Harmonizing Functionality and Aesthetics for User Delight
          </span>
        </div>
        <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-10 xl:px-20 lg:px-10 px-4 py-16'>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-start lg:items-start items-center gap-3'
              >
                <span className=''>{iconComponents[item.icon]}</span>
                <h4 className='text-[18px] text-[#2f327d] font-semibold'>
                  {item.title}
                </h4>
                <span className='text-[14px] font-medium text-start'>
                  {item.desciption}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Performence;
