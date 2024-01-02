"use client"
import React, { useState } from 'react';

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
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event) => {
    setExpanded(expanded === panel ? null : panel);
  };
  return (
    <div className='bg-[#f3f7fd] '>
    <div className='container mx-auto '>
        <div className='lg:mx-10 xl:mx-20 mx-4  flex justify-center  flex-col lg:flex-row gap-3'>
            <div className='lg:w-1/2 w-full h-[400px] flex flex-col justify-center items-start gap-4'>
              <h3 className='text-[20px] font-bold text-[#0588b0]'>FAQ</h3>
              <h4 className='lg:text-[32px] text-[28px] text-[#2f327d] font-semibold'>Most common question<br/> about our services</h4>
              <button type="button" className="text-white bg-[#0588b0] hover:bg-[#64dfcb]  focus:outline-none focus:bg-[#64dfcb]  font-medium rounded-md text-sm px-6 py-3 text-center  ">{`View All `}</button>
            </div>

         <div className='lg:w-1/2 w-full lg:py-20 '>
         {faqList.map((item) => (
        <div key={item.id} className="mb-4">
          <div
            className={`border-b border-gray-300 ${
              expanded === `panel${item.id}` ? 'border-b-0' : ''
            }`}
          >
            <div
              className="cursor-pointer py-3 px-4 flex flex-col justify-between items-start "
              onClick={handleChange(`panel${item.id}`)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
             
            </div>
          </div>
          {expanded === `panel${item.id}` && (
            <div className="py-3 px-4">
              <p className="text-base">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
         </div>


        </div>
    </div>
    </div>
  )
}

export default Faq
