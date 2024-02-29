"use client"

import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp  } from "react-icons/fa";

const faqList = [
  {
    id: 1,
    question: 'What is web design?',
    answer: `Web design is the strategic process of organizing visual elements, layout, and content to create a user-friendly, dynamic, and visually appealing website. This involves utilizing coding languages such as HTML, HTML5, CSS, JavaScript, and frameworks like Bootstrap. Additionally, for designing UI/UX and structuring website architecture, proficiency in tools like Figma and Canva is essential.`,
  },
  {
    id: 2,
    question: 'What is frontend design?',
    answer: `Frontend design is part of web design. It focuses on creating the visual and interactive elements that users see and interact with on a website.`,
  },
  {
    id: 3,
    question: 'Why web designing is important?',
    answer: `In the digital era, billions daily search for information, answers, and shopping. Responsive web design is crucial, going beyond aesthetics to enhance brand identity and engagement. In a competitive market, dynamic web designs are essential for user retention and optimal customer conversion. Web designing is imperative for businesses to effectively engage users, build credibility, and succeed in today's dynamic field.`,
  },
  {
    id: 4,
    question: 'How can I join a web design course?',
    answer: `To Join our web design course, you can fill out our contact form or fill book a free demo class form. We will reach you through a call or email for your demo class confirmation.`,
  },
 
  {
    id: 5,
    question: 'What jobs can I get after the web designing course?',
    answer: 'After a web designing course, you can pursue roles such as Web Designer, Front-End Developer, UI/UX Designer, or explore full-stack development, including back-end. Other options include Graphic Designer, Digital Marketing Specialist, and E-commerce Developer. You can work independently as a Freelancer or Entrepreneur, providing web design services.',
   
    
 
  },
  {
    id: 6,
    question: 'What are the benefits of taking a web designing course?',
    answer: `Trackonweb's responsive web design course offers a lifetime of benefits for your web design skills, allowing you to explore diverse career paths in front-end, UI/UX, Web development, and even digital marketing. Our expert trainers provide hands-on training with live projects and over 16 industry-relevant assignments also, Access extensive study materials anytime to sharpen your skills.`,
   
 
  },
  {
    id: 7,
    question: 'What are the latest tools and languages in web design?',
    answer: 'In contemporary web design, the latest tools and languages include Figma for collaborative interface design, Tailwind CSS, and SCSS for efficient styling, and Vue.js/React.js for dynamic web applications. Additionally, emerging technologies like WebAssembly (Wasm) and Progressive Web App (PWA) techniques are gaining prominence, while the adoption of WebP and tools like Canva for graphics enhance visual content. Essential languages like HTML5 and CSS frameworks like Bootstrap remain foundational for modern web design.',
   
    
 
  },
  {
    id: 8,
    question: 'Is a web design course easy?',
    answer: `Learning web design can be approachable, especially for beginners, with many resources available. However, mastery requires consistent practice and staying updated on evolving technologies. Also, you may join a web designing course to gain expertise in web development. `,
  },
  {
    id: 9,
    question: 'How much time it takes to learn web design?',
    answer: `Learning the basics of HTML and CSS may take a few weeks, while mastering JavaScript, frameworks, and design principles could take 3-4 months. The time it takes to learn web design varies based on factors such as prior experience, the depth of knowledge desired, and the complexity of skills acquired`,
  },
  {
    id: 10,
    question: 'Which course is better for web designing?',
    answer: `The Trackonweb's latest responsive web designing course in 2024 is superior for web designing. It offers real-time project exploration, encompassing 16+ industry-relevant projects and 32+ assignments. Additionally, the course provides excellent career opportunities and job security upon completion. All classes are led by industry experts and lifelong support with 24x7 assistance is ensured for continuous learning and growth.`,
  },
  {
    id: 11,
    question: 'Can I become a web designer in 3 Months?',
    answer: `Yes, it is possible to become a skilled web designer within three months, even if you come from a non-technical background. As a swift step, you can enroll in our responsive web design course for three months to gain expertise in web design.`,
  },
  {
    id: 12,
    question: 'How to start web designing?',
    answer: 'Here are some steps start to learning web design.',
    li1: `Start by understanding basic website architecture.`,
    li2: `Learn HTML and CSS for foundational skills. Explore SCSS, Tailwind CSS, and the CSS framework Bootstrap.`,
    li3: `Explore design principles and UI/UX.`,
    li4: `Practice with projects.`,
    li5: `Advance, learning JavaScript and its frameworks like ReactJS and Vue.JS`,


   
    
 
  },
  {
    id: 13,
    question: 'Who can do the web designing?',
    answer: `Becoming a web designer is easy! anyone, especially those interested in creating visually appealing websites, can pursue web design - It is most suitable for beginners with creative minds, problem-solving skills, imaginative thinking, and the ability to design innovative solutions, as well as for those looking to enhance their digital skills. `,
  },
  {
    id: 14,
    question: 'Web designing course fees?',
    answer: `We provide multiple web design courses, specially designed for beginners and intermediates, with fees starting from 3999/- rupees.`,
  },
  {
    id: 15,
    question: 'web designing course syllabus?',
    answer: `The syllabus of Trackonweb’s latest responsive web designing course in 2024 covers web architecture, the building blocks of a website, UI/UX design, HTML5, CSS, Tailwind CSS, SCSS, and includes the CSS Framework Bootstrap, among other topics.`,
  },
  {
    id: 16,
    question: 'web designing course near me?',
    answer: `Trackonweb provides the best responsive web design courses in Jaipur with the latest tools and technologies in 2024. Here, you are trained by industry professionals, and you apply your knowledge on live projects under expert guidance.`,
  },
  {
    id: 17,
    question: 'Web designing course in Hindi',
    answer: `Our web designing course is available in both Hindi and English, where our experts provide you with step-by-step web design knowledge, from fundamentals to advanced topics, in the language of your convenience.`,
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
          FAQs Related to The Responsive Web Design Certification in Jaipur
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
                    <span className='text-[16px] font-bold'><FaAngleDown/></span>
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
