"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import CertificatImg from '../../../public/trackonweb.png'

const list = [
    {
      id: 1,
      question: 'How can I become a certified graphic designer?',
      answer: `Upon finishing the Trackonweb Graphic Designing course, you'll attain an industry-acknowledged certificate, paving the way for your career in graphic design. This certification not only signifies your accomplishment but also unlocks opportunities in the field.`,
    },
    {
      id: 2,
      question: 'Why do I need a Graphic design certification?',
      answer: `A Graphic Design certification validates your skills and enhances credibility, opening doors to career opportunities and showcasing your commitment to industry standards and excellence..`,
    },
    {
      id: 3,
      question: 'Is any prior experience required for a Graphic designing certification course?',
      answer: 'No, prior experience is not required to complete the Trackonweb Graphic designing certification course in Jaipur. Here we teach you from scratch to advance.',
    },
    {
      id: 4,
      question: 'What are the prerequisites to get graphic designing certification?',
      answer: 'There are no strict prerequisites to get our graphic designing certification. You just need to know about basic computer skills.',
    },
    
  ];

const Certificate = () => {
    const [expanded, setExpanded] = useState('panel1'); 

  const handleChange = (panel) => (event) => {
    setExpanded(expanded === panel ? null : panel);
  };
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto'>
      <div className='lg:mx-10 xl:mx-20 mx-4 pt-20 pb-20 '>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] font-[700] capitalize'>
          Get Knowledge About our Graphic Designing Certification Course in Jaipur
          </h3>
          
          </div>
    <div className=' flex flex-col lg:flex-row gap-6 justify-center items-start lg:mx-10 xl:mx-20 mx-4 '>
   
    <div className='lg:w-1/2 w-full lg:h-[560px] h-full  '>
          <h3 className='text-[#2f327d] lg:text-[26px]  text-start text-[26px] font-[700] leading-10 tracking-wider '></h3>

          <div className=' w-full  bg-white '>
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
                    <h2 className="text-[16px] font-semibold flex justify-center items-center gap-2">{item.question}</h2>
                    <span><MdKeyboardArrowDown className='text-[20px] font-bold'/></span>
                  </div>
                </div>
                {expanded === `panel${item.id}` && (
                  <div className="py-3 px-4">
                    <p className="lg:text-[16px] text-[14px] ">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex justify-center items-center pb-10 lg:pb-0'>
        <Image src={CertificatImg}  alt='certificate' objectFit='contain'/>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Certificate
