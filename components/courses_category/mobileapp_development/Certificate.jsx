"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import CertificatImg from '../../../public/trackonweb.png'

const list = [
    {
      id: 1,
      question: 'How do I earn a Mobile app developer certificate?',
      answer: `Enroll in the Trackonweb course and earn a recognized certificate to showcase your skills upon course completion`,
    },
    {
      id: 2,
      question: 'Is certification necessary for a career in?',
      answer: `Certification isn't required for a career in, but it validates skills and enhances resumes. It offers a competitive edge, indicating a commitment to industry standards and ongoing professional development. Practical experience is crucial, yet certification can improve chances for career advancement and recognition.`,
    },
    {
      id: 3,
      question: 'Which organizations offer certifications?',
      answer: `We, Trackonweb offer recognized certification. To enroll in Trackonweb's cross-platform mobile app certification with Flutter course, visit https://trackonweb.com/explore-courses/mobile-app-development and fill out the contact form for a free demo class.`,
    },
    {
      id: 4,
      question: 'Can I showcase my certification on my resume and LinkedIn profile?',
      answer: 'Certainly! You can display your certification on both your resume and LinkedIn profile to emphasize your validated skills and qualifications in the field. This can strengthen your professional credibility and attract attention from potential employers and connections in the industry.',
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
          Additional details about the  Certification in Jaipur
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
