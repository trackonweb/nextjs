"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const faqList = [
  {
    id: 1,
    question: 'What services does Trackonweb IT Solutions offer?',
    answer: 'Trackonweb IT Solutions provides a wide range of services including web development, mobile app development, digital marketing, cloud solutions, and IT consulting.',
  },
  {
    id: 2,
    question: 'How can I request a quote for my project?',
    answer: 'To get a quote for your project, you can fill out the contact form on our website, and our team will get in touch with you to discuss your requirements or you can contact us at +91 8233330466 ',
  },
  {
    id: 3,
    question: 'Is Trackonweb experienced in working with diverse industries?',
    answer: 'Yes, Trackonweb IT Solutions has experience working with various industries such as healthcare, finance, e-commerce, and more. Our team adapts solutions to fit the unique needs of different sectors.',
  },
  {
    id: 4,
    question: 'What technologies does Trackonweb specialize in?',
    answer: 'Our expertise includes but is not limited to technologies such as React, Node.js, Python, Django, React Native, AWS, and more. We stay updated with the latest trends in the tech industry.',
  },
  {
    id: 5,
    question: 'How do I inquire about job opportunities at Trackonweb?',
    answer: 'For career opportunities at Trackonweb IT Solutions, you can submit your resume and details on our  ',
    p: 'LinkedIn account :',
    url: 'https://www.linkedin.com/company/trackonweb/',
  },
  {
    id: 6,
    question: 'How can I contact Trackonweb?',
    answer: 'For contact, you can visit our Contact Us page or reach us through our email at trackonwebIT@gmail.com and by phone at +91 8233330466',
  },
  {
    id: 7,
    question: 'How can I enroll in the course? ',
    answer: '',
    url1: 'https://trackonweb.com/explore_courses',
    li1: '•	Visit our courses page ',
    li2: '•	Select your course',
    li3: '•	Fill Book a free demo form  ',
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
    <div className=' bg-slate-100 lg:h-[800px]'>
      <div className='container mx-auto '>
        <div className='lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 py-20'>
          <div className=' w-full'>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] font-[600] tracking-wide capitalize'>
            Frequently Asked Questions about Our Services and Courses
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
                    <h2 className=' text-[16px] font-semibold tracking-wide'>{item.question}</h2>
                    <span className='text-[16px] font-bold'><MdKeyboardArrowDown/></span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4'>
                    <p className=' text-[14px] font-normal '>{item.answer}</p>
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className=' text-[14px] font-normal'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-normal'>
                        {item.url}
                      </a>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <span className='lg:text-[16px]  text-[14px] font-normal'>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></span>
                      <span className=' text-[14px] font-normal'>{item.li2}</span>
                      <span className=' text-[14px] font-normal'>{item.li3}</span>
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
