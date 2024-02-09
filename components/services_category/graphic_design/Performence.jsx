import React from 'react';
import { MdOutlineDesignServices } from 'react-icons/md';
import { IoMdDesktop } from 'react-icons/io';
import { FaCloudRain, FaPalette, FiPalette } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { GiCycle } from 'react-icons/gi';

const iconComponents = {
  FaPalette: (
    <FaPalette className='text-[40px] text-[#64dfcb] animate-bounce' />
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
    title: 'Cutting-Edge Visual Concepts',
    desciption: `We harness innovative design approaches to create visually stunning graphics, ensuring they resonate with your audience while staying ahead of contemporary trends.`,
    icon: 'FaPalette',
  },
  {
    id: 2,
    title: 'Cloud-Integrated Design',
    desciption: `Employing cloud-based tools and collaborative environments, we craft scalable and secure graphic solutions, enabling seamless integration across platforms for enhanced accessibility.`,
    icon: 'FaCloudRain',
  },
  {
    id: 3,
    title: 'Specialized Design Teams',
    desciption: `Our dedicated professionals focus on specific projects, providing tailored expertise, personalized attention, and efficient communication to ensure the timely delivery of dynamic graphic design initiatives.`,
    icon: 'RiTeamFill',
  },
  {
    id: 4,
    title: 'Strategic Brand Integration',
    desciption:
      'We meticulously weave your brand essence into our designs, ensuring visual consistency across various mediums, fostering brand recognition and customer trust.',
    icon: 'GiCycle',
  },
  {
    id: 5,
    title: 'Engagement-Driven Creativity',
    desciption: `We prioritize user engagement by infusing functional creativity into designs, aiming to captivate your audience and elicit meaningful interactions with your brand.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 6,
    title: 'Innovative Tools and Techniques',
    desciption: `Leveraging the latest tools and techniques, we push the boundaries of creativity, delivering cutting-edge graphic designs that set your brand apart in the digital landscape.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 7,
    title: 'User-Centric Design Philosophy',
    desciption: `Placing your audience at the center, our designs are tailored to resonate with their preferences, ensuring an intuitive and delightful visual experience.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 8,
    title: 'Iterative Refinement:',
    desciption: `Embracing an iterative approach, we constantly refine designs based on feedback and insights, ensuring our graphics evolve to meet the changing needs of your brand and audience.`,
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
            Unlock Creative Brilliance with Our Dynamic Graphic Design Solutions
          </h3>
          <span className=' text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium '>
            Crafted Visuals Redefining Engagement and Functionality
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
