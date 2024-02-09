"use client"

import React, { useState } from 'react';

const faqList = [
  {
    id: 1,
    question: 'What is Graphic designing?',
    answer: `Graphic designing is the creative practice of planning and projecting visual content, encompassing typography, illustration, and photography, for diverse purposes such as branding, advertising, and web design. In this digital age, it surrounds us, from mobile apps to billboards, communicating brand messages and ideas effectively. Designers, applying layout techniques and visual hierarchy, craft visually appealing content to optimize user experience while conveying specific messages and influencing perceptions through their designs.`,
  },
  {
    id: 2,
    question: 'How long does it take to complete a graphic design certification course?',
    answer: `Our graphic designing course is specially designed for beginners which takes 6 months to complete.`,
  },
  {
    id: 3,
    question: 'What tools are used in graphic designing?',
    answer: `The famous tools used in graphic designing are Adobe Photoshop, Adobe InDesign, Sketch, Illustrator, Coral Draw, Lightroom, Figma, and Canva.`,
  },
  {
    id: 4,
    question: 'What software or tools are covered in graphic design certification courses?',
    answer: `Trackonweb Graphic Designing Course includes popular design tools Adobe Photoshop, Adobe InDesign, Illustrator, Coral Draw, Lightroom, Figma, Canva, and more.`,
  },
 
  {
    id: 5,
    question: 'Can graphic design certification help in job placement?',
    answer: 'Yes, certifications can enhance your employability and provide a competitive edge in job searches. Also, we help you to get placement after completing our graphic designing certification course. ',
   
    
 
  },
  {
    id: 6,
    question: 'What jobs can I get after the Graphic designing course?',
    answer: `After completing a Graphic designing course, you can work on roles such as Graphic Designer, UI/UX Designer, or Web Designer, creating visually appealing content for diverse platforms. Explore opportunities as an Illustrator, Motion Graphics Designer, or Brand Identity Designer, specializing in various aspects of visual communication. Additionally, consider roles like Digital Marketing Designer, Art Director, or even pursue freelance work or entrepreneurship in the dynamic field of graphic design.`,
   
 
  },
  {
    id: 7,
    question: 'What are the benefits of taking a Graphic design course?',
    answer: 'Enrolling in the Trackonweb Graphic Designing course offers numerous benefits, including skill development, diverse career opportunities with reputed brands, portfolio enhancement, industry-recognized certification, lifetime support, job assurance, and more.',
   
    
 
  },
  {
    id: 8,
    question: 'How long does it take to learn Graphic design?',
    answer: `Learning the basics of designing typically takes 1-2 months, while acquiring in-depth knowledge of design tools may require 6 months to 1 year. Specializing in a specific tool is an ongoing process that involves continuous learning and refinement of skills.`,
  },
  {
    id: 9,
    question: 'Which course is best for Graphic designing?',
    answer: `Trackonweb's advanced Graphic design course is the best for learning graphic design. It includes a free internship opportunity and hands-on experience working on live projects.`,
  },
  {
    id: 10,
    question: 'Can I become a Graphic designer in 3 Months?',
    answer: `Yes, it is possible to become a Graphic designer within 3 months, while a foundational understanding can be achieved in 3 months, reaching a professional level typically takes around six months or more.`,
  },
  {
    id: 11,
    question: 'Is the Graphic designing course easy?',
    answer: `Trackonweb's graphic design course is specially designed for beginners, starting from scratch. Here, you can easily learn graphic design step by step.`,
  },
  {
    id: 12,
    question: 'How to start Graphic designing?',
    answer: 'Here are some steps start to learning Graphic design.',
    li1: `Understand Design Principles: Learn basics like color theory, typography, layout, and composition.`,
    li2: `Get the Right Tools: Familiarize yourself with graphic design software like Adobe Photoshop or Illustrator.`,
    li3: `Practice Regularly: Apply what you learn through hands-on projects, starting with simple designs.`,
    li4: `Explore Design Resources: Use tools like Adobe Color and Google Fonts, and explore stock image websites.`,
    li5: `Specialize Based on Interest: Explore areas like web design, branding, or illustration to find your niche.`,
    li6: `Consider Mentorship: Seek guidance from experienced designers for personalized advice.`,


   
    
 
  },
  {
    id: 13,
    question: 'Graphic designing course fees?',
    answer: `Trackonweb Graphic designing course starts from 8999/- Rupees. `,
  },
  {
    id: 14,
    question: 'Who is Suitable for Graphic Designing?',
    answer: `Graphic designing is suitable for persons who are interested in creating visual arts have a passion for design and can do creative thinking to create unique and visually appealing designs with adaptability skills for new tools. `,
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
        <div className='lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 py-20'>
          <div className=' w-full'>
          <h3 className='text-[#2f327d]  lg:text-[34px] text-[22px] font-[700] capitalize'>
          FAQs about our Advanced Graphic Designing Certification in Jaipur
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
                    <div className='flex flex-col lg:flex-row justify-start items-start gap-2'>
                      <span className='lg:text-[16px] text-[14px] font-medium'>{item.p} </span>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className='text-blue-600 lg:text-[16px] text-[12px] font-medium'>
                        {item.url}
                      </a>
                    </div>
                    {
                      expanded === item.id && (
                        <ul className='flex flex-col justify-start items-start gap-1  '>
                      <li className='lg:text-[16px]  text-[14px] '>{item.li1}<a href={item.url1} rel="noopener noreferrer" className='text-blue-600'>
                        {item.url1}
                      </a></li>
                      <li className='lg:text-[16px] text-[14px] '>{item.li2}</li>
                      <li className='lg:text-[16px] text-[14px] '>{item.li3}</li>
                      <li className='lg:text-[16px] text-[14px] '>{item.li4}</li>
                      <li className='lg:text-[16px] text-[14px] '>{item.li5}</li>
                      <li className='lg:text-[16px] text-[14px] '>{item.li6}</li>
                    </ul>
                      )
                    }
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
