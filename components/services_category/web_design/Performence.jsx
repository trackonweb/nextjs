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
    title: 'Brand-Centric Design Philosophy',
    desciption:
      "We integrate your brand essence seamlessly, aligning visuals and messaging to create a cohesive identity, fostering recognition, trust, and consistency across your website's design.",
    icon: 'IoMdDesktop',
  },
  {
    id: 2,
    title: 'Intuitive UI Design',
    desciption: `Our designs prioritize user-friendly interfaces, strategically organizing elements to ensure effortless navigation, enhancing user satisfaction, and reducing friction for a seamless browsing experience.`,
    icon: 'FaCloudRain',
  },
  {
    id: 3,
    title: 'Conversion-Focused Elements',
    desciption: `We strategically place persuasive call-to-action elements, captivating visuals, and engaging content to drive visitor actions, aiming to convert traffic into valuable leads or customers effectively.`,
    icon: 'RiTeamFill',
  },
  {
    id: 4,
    title: 'Mobile-First Approach',
    desciption: `With a focus on mobile usability, our designs are meticulously crafted to look and function flawlessly across various mobile devices, ensuring an optimal experience for on-the-go users.`,
    icon: 'GiCycle',
  },
  {
    id: 5,
    title: 'Scalability and Future-Readiness',
    desciption: `Our designs are built on scalable frameworks, allowing easy integration of new features as your business grows, ensuring adaptability and readiness for future technological advancements.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 6,
    title: 'SEO-Oriented Strategies',
    desciption: `Incorporating SEO best practices, we optimize site structures and elements to enhance search engine visibility, boosting your website's ranking and accessibility to potential visitors.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 7,
    title: 'Data-Driven Decision Making',
    desciption: `We rely on user behavior analysis and insights to refine designs continually. By leveraging data, we optimize user engagement and satisfaction, ensuring informed and effective design choices.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 8,
    title: 'Comprehensive Testing and QA',
    desciption: `Before launch, our designs undergo meticulous testing across devices and scenarios. Our stringent quality assurance ensures bug-free, seamless user experiences, ensuring website reliability and performance.`,
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
            Ignite Digital Brilliance with Our Visionary Web Design Solutions
          </h3>
          <span className=' text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium '>
            Discover the Artistry in Crafting Compelling and Intuitively
            Engaging Interfaces!
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
