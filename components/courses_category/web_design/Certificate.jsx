"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import CertificatImg from '../../../public/trackonweb.png'

const list = [
    {
      id: 1,
      question: 'How do I earn a Web design certificate?',
      answer: `Complete the Trackonweb Web Design course, once course completion you will receive an industry-recognized certificate to kickstart your career, opening doors for you in web design.`,
    },
    {
      id: 2,
      question: 'Why do I need a web designing certification?',
      answer: `A web designing certification validates skills, enhancing career prospects and industry recognition. It builds client trust, signifies continuous skill enhancement, and offers global job opportunities. Certification sets you apart, showcasing expertise and commitment to excellence.`,
    },
    {
      id: 3,
      question: 'Is any prior experience required for a web designing certification course? ',
      answer: 'No, prior experience is not required to complete our web design certification course in Jaipur.',
    },
    {
      id: 4,
      question: 'Do you take any tests before giving a web design certificate?',
      answer: 'Yes, after completing your training, we conduct a test for web design certification based on the topics covered in the course.',
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
          Know more about our Web Design Certification Course in Jaipur
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
