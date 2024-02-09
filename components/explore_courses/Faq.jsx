"use client"

import React, { useState } from 'react';

const faqList = [
  
  {
    id: 1,
    question: 'Which course is best for career development?',
    answer: 'Fill out our contact form to get free career counseling, our courses cater to various career paths. Explore the "Mastery in Web Development 2024," "The Ultimate 2024 Graphic Design," "Flutter Revolution: Mobile App Development," "Excellence in Digital Marketing," "Become a Senior UI/UX Designer," and "Responsive Web Design Expert" for options that align with your career goals.',
  },
  {
    id: 2,
    question: 'How many years of experience do Trackonweb experts have?',
    answer: 'Trackonweb experts boast extensive industry experience. An average trainer at Trackonweb has more than 4-5 years of experience. Our seasoned professionals bring a wealth of knowledge to ensure quality education.',
  },
  {
    id: 3,
    question: 'What are the course benefits?',
    answer: 'Enrolling in Trackonweb courses offers numerous benefits, including hands-on skill development, expert guidance, real-world project experience, and personalized support. Additionally, our commitment to industry exposure and lifetime access ensures a transformative and comprehensive learning experience.',
  },
  {
    id: 4,
    question: 'Will I get a job if I enroll in the Trackonweb course?',
    answer: 'Trackonweb has a solid track record of 100% placement. While job placement is subject to individual effort and market conditions, our courses are designed to equip you with the skills and knowledge sought after by employers, enhancing your chances of securing a job in your chosen field.',
   
  },
  {
    id: 5,
    question: 'How much time does it take to receive the certificate?',
    answer: 'Once you complete the course, you will receive the certificate within 1-2 days.',
  },
 
  
];
const Faq = () => {
  const [expanded, setExpanded] = useState(faqList[0].id);

  const handleChange = (panel) => () => {
    setExpanded((prevExpanded) =>
      prevExpanded === panel ? null : panel
    );
  };

  return (
    <div className=' bg-slate-100 lg:h-[700px]'>
      <div className='container mx-auto '>
        <div className='lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 py-20'>
          <div className=' w-full'>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] font-[700] capitalize'>
            Frequently Asked Questions about Our  Courses
          </h3>
          
          </div>
         

          <div className=' w-full '>
            {faqList.map((item) => (
              <div key={item.id} className='mb-4'>
                <div
                  className={`border-b-2 ${
                    expanded === item.id ? 'border-b-0' : ''
                  }`}
                >
                  <div
                    className='cursor-pointer py-3 px-4 flex  justify-between items-start '
                    onClick={handleChange(item.id)}
                  >
                    <h2 className=' text-[16px] font-semibold'>{item.question}</h2>
                    <span className='text-[16px] font-bold'>+</span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4'>
                    <p className='lg:text-base text-[14px] '>{item.answer}</p>
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className='lg:text-[16px] text-[14px] font-medium'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-medium'>
                        {item.url}
                      </a>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <span className='lg:text-[16px]  text-[14px] font-medium'>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></span>
                      <span className='lg:text-[16px] text-[14px] font-medium'>{item.li2}</span>
                      <span className='lg:text-[16px] text-[14px] font-medium'>{item.li3}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Faq
