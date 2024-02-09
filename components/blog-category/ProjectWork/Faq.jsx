"use client"

import React, { useState } from 'react';

const faqList = [
  {
    id: 1,
    question: 'Can you provide help for this project or a relevant project?',
    answer: `Yes, we can assist with the above project. Simply fill out our contact form and provide details about your query. We will offer the guidance you need through a call or email.`,
  },
  {
    id: 2,
    question: 'Can you create this project for my company?',
    answer: `Certainly! Our company offers a wide range of IT services, including the creation of web and mobile apps. Fill out our contact form to get a quote and discuss how we can create the project for your company.`,
  },
  {
    id: 3,
    question: 'What is the pricing of the above project?',
    answer: `Typically, it involves a substantial and continuous investment of money. Our company owns a dummy project similar to the above on Figma, which you can acquire from us at a very reasonable cost.`,
  },
  {
    id: 4,
    question: 'What is the "Best Remote Location Project Work Idea"?',
    answer: `The "Best Remote Location Project Work Idea" is an advanced web application designed to connect tech professionals with optimal remote work environments, including cafes, hotels, restaurants, and more.`,
  },
  {
    id: 5,
    question: 'How does the platform enhance productivity for tech professionals?',
    answer: `The platform enhances productivity by providing a seamless connection to remote workspaces with features such as fast Wi-Fi, accessibility, online booking, detailed timing information, and customization options for various work preferences.`,
  },
  {
    id: 6,
    question: 'What are the key goals of the project?',
    answer: `The project aims to facilitate seamless remote work, enhance the user experience, foster a community-driven selection process, support cafe owners, increase revenue for businesses, and fill the gap for diverse work environments.`,
  },
  {
    id: 7,
    question: 'How does the platform support cafe owners?',
    answer: `Cafe owners can register and manage profiles on the platform, attracting remote workers and creating a mutually beneficial relationship through features like online booking and detailed information updates.`,
  },
  {
    id: 8,
    question: 'Can users customize their search for remote locations?',
    answer: `Yes, users can use advanced search and filtering options to narrow down their choices based on specific requirements such as Wi-Fi speed, noise level, power outlets, and proximity to public transport.`,
  },
  {
    id: 9,
    question: 'Is there a real-time ratings and reviews feature?',
    answer: `Yes, users can view real-time ratings and reviews submitted by other professionals, contributing to a community-driven selection process for remote workspaces.`,
  },
  {
    id: 10,
    question: 'What technologies are used in the development of the platform?',
    answer: `The frontend is developed using React with Redux for state management, the backend utilizes Node.js and Express.js with MongoDB as the database. The application is hosted on AWS, and Git/GitHub is used for version control.`,
  },
  {
    id: 11,
    question: 'How is user authentication and authorization handled?',
    answer: `Secure user authentication and authorization are implemented using cookies and sessions to maintain a seamless login state and control access to protected routes.`,
  },
  {
    id: 12,
    question: 'Are there plans for future updates and improvements?',
    answer: `Yes, the project has a roadmap for continuous improvement, including the introduction of features such as seminar and hall booking, night places to work, and ongoing enhancements based on user feedback and emerging technologies.`,
  },
  {
    id: 13,
    question: 'How can businesses benefit from the platform?',
    answer: `Businesses can benefit by partnering with the platform, participating in partnership programs, and gaining exposure to a community of tech professionals seeking remote work environments, contributing to increased revenue and business success.`,
  },
  {
    id: 14,
    question: 'Is there a mobile application in development?',
    answer: `There are considerations for developing a mobile application to provide users with flexibility and enhanced accessibility from their smartphones.`,
  },
  {
    id: 15,
    question: 'How is user feedback collected and utilized for improvements?',
    answer: `The platform incorporates a robust user feedback mechanism to gather insights on performance, ensuring continuous improvement based on real user experiences and needs.`,
  },
  {
    id: 16,
    question: 'Are there plans for global expansion?',
    answer: `Yes, the project aims to explore opportunities for global expansion, making the platform accessible to remote professionals and cafe owners worldwide.`,
  },
  {
    id: 17,
    question: 'How does the platform address sustainability?',
    answer: `Sustainability initiatives are introduced, promoting eco-friendly practices within the remote work ecosystem and encouraging cafe owners to adopt environmentally conscious policies.`,
  },
  {
    id: 18,
    question: 'Is the platform inclusive and user-friendly for individuals with diverse needs?',
    answer: `Yes, accessibility features are incorporated to ensure the platform is inclusive and user-friendly for individuals with diverse needs and requirements, promoting an inclusive remote work environment.`,
  },
  {
    id: 19,
    question: 'How does the platform ensure security and privacy?',
    answer: `The platform prioritizes data security and privacy by implementing industry-standard encryption protocols and access controls to protect user information against unauthorized access.`,
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
    <div className=' bg-slate-100 '>
      <div className='container mx-auto '>
        <div className='lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 pb-20'>
          <div className=' w-full pt-10'>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] text-center font-[600] tracking-wide capitalize'>
          Project FAQ’s
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
                    <h2 className=' text-[16px] font-[600] tracking-wide '>{item.question}</h2>
                    <span className='text-[16px] font-bold'>+</span>
                  </div>
                </div>
                {expanded === item.id && (
                  <div className='py-3 px-4 border-b-2'>
                    <p className='lg:text-base text-[14px] '>{item.answer}</p>
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className='lg:text-[16px] text-[14px] font-normal'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-normal'>
                        {item.url}
                      </a>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                      <span className='lg:text-[16px]  text-[14px] font-normal'>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></span>
                      <span className='lg:text-[16px] text-[14px] font-normal'>{item.li2}</span>
                      <span className='lg:text-[16px] text-[14px] font-normal'>{item.li3}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className='flex flex-col justify-center items-start gap-5'>
                <span className='font-[600] tracking-wide text-[18px] px-4'>Conclusion</span>
                <span className='px-4 pb-4'>The "Best Remote Location Project Work Idea" not only meets the growing demand for remote work options but also acts as a bridge between professionals and cafes, contributing to increased productivity and satisfaction in evolving work satisfaction.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Faq
