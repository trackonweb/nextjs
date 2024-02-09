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
    title: 'Strategic Consultation',
    desciption: `We begin with in-depth consultations to understand your vision, goals, and target audience, ensuring our mobile solutions align perfectly with your objectives.`,
    icon: 'IoMdDesktop',
  },
  {
    id: 2,
    title: 'Platform-Agnostic Development',
    desciption: `Our expertise spans various platforms (iOS, Android, etc.), enabling us to create cohesive, high-performance apps that deliver a consistent experience across devices.`,
    icon: 'FaCloudRain',
  },
  {
    id: 3,
    title: 'User-Centric Design',
    desciption: `Focusing on user experience, we craft intuitive interfaces and navigation, ensuring your app is not just functional but engaging, fostering user retention and satisfaction.`,
    icon: 'RiTeamFill',
  },
  {
    id: 4,
    title: 'Scalable Architecture',
    desciption: `Our apps are built with scalable architectures, ready to accommodate growth and evolving technological demands without compromising performance.`,
    icon: 'GiCycle',
  },
  {
    id: 5,
    title: 'Security and Compliance',
    desciption: `Prioritizing user data security, we implement robust encryption and follow industry standards to ensure compliance, instilling trust in your app's users.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 6,
    title: 'Agile Development Methodologies',
    desciption: `Embracing agile methodologies, we deliver iterative updates and prototypes, fostering flexibility and allowing for swift adaptations based on user feedback.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 7,
    title: 'Integration and Maintenance',
    desciption: `Beyond development, we offer seamless integration and ongoing maintenance, ensuring your app remains up-to-date and functional amid technological advancements.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 8,
    title: 'Performance Optimization',
    desciption: `Rigorous testing and optimization ensure your app performs flawlessly, minimizing load times and bugs, providing a smooth experience for users at every interaction.`,
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
            Transforming Visions into Seamless Mobile Experiences
          </h3>
          <span className=' text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium '>
            Crafting Innovative Solutions Tailored to Your Mobile Needs
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
