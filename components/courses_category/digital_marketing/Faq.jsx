"use client"

import React, { useState } from 'react';

const faqList = [
  {
    id: 1,
    question: 'What is Digital Marketing?',
    answer: `Digital marketing represents a strategic approach to promoting products, services, or brands through online channels. It encompasses a diverse array of activities, including search engine optimization (SEO), social media marketing, content marketing, email marketing, and more. The primary objective is to reach a broader audience utilizing platforms such as Google, Facebook, and YouTube, employing both paid and organic methods to enhance visibility.`,
  },
  {
    id: 2,
    question: 'What is SEO?',
    answer: `SEO, or Search Engine Optimization, stands as a critical facet of digital marketing. It involves optimizing online content to improve its visibility on search engines like Google. The ultimate goal is to enhance organic (non-paid) search engine results, increasing the likelihood of a website or content appearing higher in search rankings`,
  },
  {
    id: 3,
    question: 'Can I Become a Freelancer After Completing a Digital Marketing Certification Course?',
    answer: `Certainly, upon completing a digital marketing course certification, you can delve into freelancing opportunities. The skills acquired in various digital marketing domains, including SEO, Google Ads, Content Marketing, YouTube Marketing, and other course-covered concepts, make freelancing a viable career path. The course provides comprehensive guidance on building a freelance profile, setting pricing, and acquiring high-paying clients and projects.`,
  },
  {
    id: 4,
    question: 'What Topics are Covered in the Digital Marketing Certification Course Curriculum?',
    answer: `The comprehensive course curriculum spans a wide range of topics, including but not limited to SEO, search engine marketing, social media marketing, content marketing, email marketing, WordPress, graphic design, and analytics. Specifics may vary, so it's recommended to explore the detailed curriculum for a comprehensive understanding.`,
  },
 
  {
    id: 5,
    question: 'Is the Digital Marketing Course Suitable for Beginners?',
    answer: '',
   
    li1: '•	Specifically designed for beginners with no prior experience.',
    li2: '•	Comprehensive introduction to digital marketing concepts and strategies.',
 
  },
  {
    id: 6,
    question: 'Are There Any Practical Aspects or Hands-On Projects in the Course?',
    answer: '',
   
    li1: '•	98% dedicated to practical aspects, including 20+ industry-demanding projects.',
    li2: '•	2% covers theory and fundamentals.',
 
  },
  {
    id: 7,
    question: 'Can I Do a Part-Time Job After Completing the Digital Marketing Course?',
    answer: '',
   
    li1: '•	Yes, common to pursue part-time jobs post-course completion.',
    li2: '•	Opportunities include roles like Freelance Content Creator, Email Marketing Coordinator, Paid Advertising Specialist, etc.',
 
  },
  {
    id: 8,
    question: 'Who Can Enroll in a Digital Marketing Course?',
    answer: `Digital marketing courses cater to a varied audience, encompassing high school graduates (11th and 12th pass), college graduates, professionals in the workforce, homemakers, individuals in sales and marketing, entrepreneurs, proprietors, freelancers, corporate staff, and those actively seeking employment opportunities.`,
  },
  {
    id: 9,
    question: 'What Is the Average Digital Marketer Salary in Jaipur?',
    answer: `In Jaipur, digital marketer salaries vary based on skills and experience, typically ranging between ₹25,000 to ₹60,000. It can rise even higher based on demand, reflecting diverse skill sets and expertise.`,
  },
  {
    id: 10,
    question: 'What Is the Ideal Age to Learn Digital Marketing?',
    answer: `There is no specific age requirement to learn digital marketing; it's beneficial at any stage. Whether initiating a career or seeking a change, acquiring digital marketing skills is advantageous for personal and professional growth`,
  },
  {
    id: 11,
    question: 'Do you Provide an internship after the course?',
    answer: `Yes, We Provide 2-month free internship after the course completion. `,
  },
 
  // {
  //   id: 12,
  //   question: 'What Can I Achieve After Completing the Digital Marketing Course?',
  //   answer: 'After completing the Digital Marketing Course, you can:',
   
  //   li1: '•	Discover roles like digital marketing manager, SEO specialist, and social media strategist through platforms like LinkedIn and Indeed. Leverage Freelancing Opportunities:',
  //   li2: '•	Utilize acquired skills for freelancing on platforms like Upwork, offering digital marketing services. Start Your Agency:',
  //   li3: '•	Consider launching your digital marketing agency for businesses seeking online visibility. Specialize in SEO, SEM, or Social Media:',
  //   li4: '•	Focus on areas like SEO, SEM, or social media marketing for in-depth specialization. Continuous Learning:',
  //   li5: '•	Stay updated through continuous learning and implement strategies for business growth.',
  //   li6: '',
  //   li7: '',
  //   li8: '',

  // },
  // {
  //   id: 13,
  //   question: 'What Career Opportunities Exist in Digital Marketing?',
  //   answer: 'In the dynamic field of digital marketing, numerous career opportunities include:',
   
  //   li1: '•	Digital Marketing Manager',
  //   li2: '•	Freelance Content Creator',
  //   li3: '•	SEO Specialist',
  //   li4: '•	Affiliate Marketer',
  //   li5: '•	Social Media Strategist',
  //   li6: '•	Digital Marketing Consultant',
  //   li7: '•	Content Marketing Manager',
  //   li8: '•	Graphic Design Assistant',
  //   li9: '•	Email Marketing Coordinator',
  //   li10: '• Social Media Influencer',
  //   li11: '•	Paid Advertising Specialist',
  //   li12: '•	Web Developer with Digital Marketing Skills',
  //   li13: '•	Analytics Expert',
  //   li14: '•	Email Marketing Specialist',
  //   li15: '•	E-commerce Marketing Manager',
  //   li16: '•	Video Marketing Specialist',
   
 
  // },
  
  
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
          FAQs Related to the Digital Marketing Course Certification Jaipur
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
