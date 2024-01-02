"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

const faqList = [
  {
    id: 1,
    question: 'What services does TrackOnWeb IT Solutions offer?',
    answer: 'TrackOnWeb IT Solutions provides a wide range of services including web development, mobile app development, digital marketing, cloud solutions, and IT consulting.',
  },
  {
    id: 2,
    question: 'How can I request a quote for my project?',
    answer: 'To get a quote for your project, you can fill out the contact form on our website, and our team will get in touch with you to discuss your requirements.',
  },
  {
    id: 3,
    question: 'Is TrackOnWeb experienced in working with diverse industries?',
    answer: 'Yes, TrackOnWeb IT Solutions has experience working with various industries such as healthcare, finance, e-commerce, and more. Our team adapts solutions to fit the unique needs of different sectors.',
  },
  {
    id: 4,
    question: 'What technologies does TrackOnWeb specialize in?',
    answer: 'Our expertise includes but is not limited to technologies such as React, Node.js, Python, Django, React Native, AWS, and more. We stay updated with the latest trends in the tech industry.',
  },
  {
    id: 5,
    question: 'How do I inquire about job opportunities at TrackOnWeb?',
    answer: 'For career opportunities at TrackOnWeb IT Solutions, you can visit our Careers page on the website or send your resume to careers@trackonweb.com. We are always looking for talented individuals to join our team.',
  },
];


const Faq = () => {
  const [expanded, setExpanded] = useState('panel1'); 

  const handleChange = (panel) => (event) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <div className='bg-[#f3f7fd] '>
      <div className='container mx-auto '>
        <div className=' pt-8'>
          <h3 className='text-[#2f327d] lg:text-[34px] lg:text-center text-start text-[26px] font-[700] leading-10 tracking-wider lg:mx-10 xl:mx-20 mx-4 '>Frequently Asked Questions on Digital Marketing</h3>

          <div className=' py-10 lg:mx-10 xl:mx-20 mx-4 '>
            {faqList.map((item) => (
              <div key={item.id} className={`mb-4 ${expanded === `panel${item.id}` ? 'bg-[#0588b0] text-white rounded-t-lg' : ''}`}>
                <div
                  className={`border-b border-gray-300 ${
                    expanded === `panel${item.id}` ? 'border-b-0 ' : ''
                  }`}
                >
                  <div
                    className="cursor-pointer py-3 px-4 flex  justify-between items-center"
                    onClick={handleChange(`panel${item.id}`)}
                  >
                    <h2 className="text-lg font-semibold flex justify-center items-center gap-2"><FaQuestionCircle/>{item.question}</h2>
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
      </div>
    </div>
  );
}

export default Faq;
