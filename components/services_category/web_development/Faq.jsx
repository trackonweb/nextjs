"use client"

import React, { useState } from 'react';

const faqList = [
  {
    id: 1,
    question: 'What sets Trackonweb apart in web development?',
    answer: `Trackonweb excels with a skilled team, innovative solutions, and a commitment to delivering excellence in every project.`,
  },
  {
    id: 2,
    question: 'How does Trackonweb ensure client satisfaction?',
    answer: `Client satisfaction is our priority. We prioritize open communication, tailored solutions, and consistent support throughout the development process.`,
  },
  {
    id: 3,
    question: 'What web development services does Trackonweb offer?',
    answer: `Trackonweb provides end-to-end web development services, including custom website design, application development, e-commerce solutions, and more.`,
  },
  {
    id: 4,
    question: 'How does Trackonweb approach the web development process?',
    answer: `We follow a strategic process involving client consultation, conceptualization, design, development, testing, and deployment, ensuring a seamless and effective workflow.`,
  },
 
  {
    id: 5,
    question: 'How does Trackonweb ensure website responsiveness?',
    answer: 'We prioritize responsive design, ensuring that websites and applications adapt seamlessly to various devices, providing an optimal user experience.',
   
 
  },
  {
    id: 6,
    question: 'What kind of support does Trackonweb provide post-development?',
    answer: 'We offer ongoing support and maintenance services, ensuring that your website or application continues to function seamlessly, with a dedicated 24/7 help desk for assistance.',
   
  
 
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
    <div className=' bg-slate-50 '>
      <div className='container mx-auto '>
        <div className='lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 py-20'>
          <div className=' w-full'>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] font-[700] capitalize'>
          Why Trackonweb? Your Top Choice for Exceptional Web Development Solutions
          </h3>
          
          </div>
         

          <div className=' w-full bg-white '>
            {faqList.map((item) => (
              <div key={item.id} className='mb-4 '>
                <div
                  className={`border-b-2 ${
                    expanded === item.id ? 'border-b-0' : ''
                  }`}
                >
                  <div
                    className='cursor-pointer py-3 px-4 flex  justify-between items-start '
                    onClick={handleChange(item.id)}
                  >
                    <h2 className=' text-[16px] font-semibold '>{item.question}</h2>
                    <span className='text-[16px] font-bold'>+</span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4 border-b-2'>
                    <p className='lg:text-base text-[14px] '>{item.answer}</p>
                   
                    
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
