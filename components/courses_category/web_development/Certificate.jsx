"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import Image from 'next/image';

const list = [
    {
      id: 1,
      question: 'How do I get the UI UX certification?',
      answer: 'On successful completion of the entire training program along with the given projects and assignments and scoring a minimum of 60% in Intellipaat’s certification examination, you will be rewarded with the final executive post graduate certification in UI UX design by iHUB, IIT Roorkee.',
    },
    {
      id: 2,
      question: 'Is Trackonweb UI UX Design course online certification recognized by the industry?',
      answer: 'Yes. Intellipaat’s UI UX executive post graduate course online certificate is recognized by around 500+ organizations globally. Our alumni are placed in top companies. It is right to say that in both ways, Intellipaat’s UI UX Design course alumni are doing well.',
    },
    
  ];

const Certificate = () => {
    const [expanded, setExpanded] = useState('panel1'); 

  const handleChange = (panel) => (event) => {
    setExpanded(expanded === panel ? null : panel);
  };
  return (
    <div className='bg-[#f3f7fd]'>
      <div className='container mx-auto'>
    <div className=' flex flex-col lg:flex-row gap-6 justify-center items-center lg:mx-10 xl:mx-20 mx-4 py-8'>
    <div className='lg:w-1/2 w-full lg:h-[400px] h-full  '>
          <h3 className='text-[#2f327d] lg:text-[26px]  text-start text-[26px] font-[700] leading-10 tracking-wider '>Web Development Certification Course</h3>

          <div className=' w-full my-8 bg-white '>
            {list.map((item) => (
              <div key={item.id} className={`mb-4 ${expanded === `panel${item.id}` ? ' ' : ''}`}>
                <div
                  className={`border-b border-gray-300 ${
                    expanded === `panel${item.id}` ? 'border-b-0 ' : ''
                  }`}
                >
                  <div
                    className="cursor-pointer py-3 px-4 flex  justify-between items-center"
                    onClick={handleChange(`panel${item.id}`)}
                  >
                    <h2 className="text-lg font-semibold flex justify-center items-center gap-2">{item.question}</h2>
                    <span><MdKeyboardArrowDown className='text-[20px] font-bold'/></span>
                  </div>
                </div>
                {expanded === `panel${item.id}` && (
                  <div className="py-3 px-4">
                    <p className="text-[16px] font-normal">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex justify-center items-center'>
            <Image src='/trackonweb.png' width={400} height={400} alt='certificate' objectFit='contain'/>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Certificate
