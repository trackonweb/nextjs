
"use client";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp  } from "react-icons/fa";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleQuestion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const faqData = [
    {
      question: "What sets Trackonweb's web design services apart?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  Trackonweb excels in blending creativity with functionality, providing tailor-made solutions for a standout online presence.
                  </p>
           
                </div>
      )
       
    },
    
    {
      question: "Can Trackonweb handle both small and large-scale web design projects?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Absolutely! We cater to businesses of all sizes, ensuring personalized and impactful web design solutions.
                  </p>
                
              </div>
      ),
    },
    {
      question: "Can Trackonweb assist with website redesign projects?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Certainly! We offer website redesign services to enhance and modernize existing interfaces, improving both aesthetics and functionality.
                  </p>
               
              </div>
      ),
    },
   
    {
      question: " How does Trackonweb approach SEO in web design projects?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  Our in-house SEO experts optimize visuals and content, ensuring your website is search engine-friendly for increased online visibility.
  </p>

</div>
)
    },
    {
      question: "What steps does Trackonweb take to stay updated on web design trends?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Our team actively engages in continuous learning, industry research, and stays informed about emerging trends to provide cutting-edge web design solutions.
                </p>
              
              </div>
       )
   
       }
  ];

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto">
        <div className="lg:mx-10 xl:mx-20 mx-4 flex flex-col justify-center items-center gap-10 py-20">
          <div className="w-full">
            <h3 className="text-[#2f327d] lg:text-[34px] text-[22px] font-[700] capitalize">
            FAQs about Our Top-Notch  Web design Services
            </h3>
          </div>

          <div className="w-full bg-white">
            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className={`border-b-2`}>
                  <div
                    className="cursor-pointer py-3 px-4 flex justify-between items-start"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h2 className="text-[16px] font-semibold">{item.question}</h2>
                    <span className="text-[16px] font-bold">{expandedIndex === index ? <FaAngleUp/> : <FaAngleDown/>}</span>
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className="py-3 px-4">{typeof item.answer === 'string' ? <p className="lg:text-base text-[14px] ">{item.answer}</p> : item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;









