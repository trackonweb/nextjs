"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import CertificatImg from '../../../public/trackonweb.png'

const list = [
    {
      id: 1,
      question: 'How do I earn a Web Developer course certification?',
      answer: `Upon completing our web development course, you'll receive a professional certification, validating your skills and showcasing your expertise. This industry-recognized certificate enhances your marketability, opening doors to lucrative career opportunities in the tech industry.`,
    },
    {
      id: 2,
      question: 'How to achieve the Trackonweb Web Development Certificate?',
      answer: `To obtain professional, industry-recognized web developer certification, enroll in Trackonweb's master web development course. Upon course completion, you'll also receive a free internship.`,
    },
    {
      id: 3,
      question: 'How long does it take to become a certified web developer?',
      answer: 'Becoming a certified web developer usually takes around 6 months. However, the duration depends on your dedication and the time you invest.',
    },
    {
      id: 4,
      question: 'Do I need prior experience for a web development certification course?',
      answer: 'No, prior experience is not required to complete our web developer certification course.',
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
          Complete our Web Developer Certification Course in Jaipur
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
