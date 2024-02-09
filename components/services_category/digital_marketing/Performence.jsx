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
    title: 'Data-Driven Strategy',
    desciption: `We craft comprehensive marketing strategies backed by data analysis, ensuring precise targeting, effective campaign management, and optimized results for your brand.`,
    icon: 'IoMdDesktop',
  },
  {
    id: 2,
    title: 'Multi-Channel Campaigns',
    desciption: `Our approach spans various digital channels, leveraging the power of SEO, social media, PPC, content marketing, and more, to maximize your brand's visibility and engagement.`,
    icon: 'FaCloudRain',
  },
  {
    id: 3,
    title: 'Audience-Centric Approach',
    desciption: `Understanding your audience is paramount. We tailor messages, content, and campaigns to resonate with specific demographics, fostering meaningful connections and brand loyalty.`,
    icon: 'RiTeamFill',
  },
  {
    id: 4,
    title: 'ROI-focused Optimization',
    desciption:
      'Our focus on measurable outcomes ensures campaigns are continuously optimized for maximum ROI, driving conversions and delivering tangible results for your business.',
    icon: 'GiCycle',
  },
  {
    id: 5,
    title: 'Cutting-Edge Technolog',
    desciption: `We stay updated with the latest marketing tools and technologies, utilizing advanced analytics and automation to streamline processes and enhance campaign effectiveness.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 6,
    title: 'Content Excellence',
    desciption: `Compelling content is at the core of our strategy. We create engaging, relevant, and shareable content to captivate audiences and establish your brand as an authoritative voice in your industry.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 7,
    title: 'Responsive Campaign Management',
    desciption: `Adapting to dynamic market shifts, we offer agile campaign management, swiftly adjusting strategies to align with evolving trends and consumer behaviors.`,
    icon: 'MdOutlineDesignServices',
  },
  {
    id: 8,
    title: 'Transparent Reporting and Analysis',
    desciption: `Regular reports and in-depth analysis provide transparency, enabling informed decision-making and offering insights into campaign performance, ensuring continuous improvement.`,
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
            Propel Your Brand with Strategic Digital Marketing Solutions
          </h3>
          <span className=' text-[#0588b0] text-start lg:text-[18px] text-[14px] font-medium '>
            Elevate Engagement, Expand Reach, and Drive Conversions
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
