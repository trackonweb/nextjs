
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
      question: "What makes Trackonweb's UI/UX design services stand out?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  Trackonweb excels in combining creativity with functionality, ensuring intuitive interfaces and a visually compelling user experience.
                  </p>
           
                </div>
      )
       
    },
    
    {
      question: "Can Trackonweb handle both web and mobile UI/UX design projects?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Absolutely! We specialize in designing user-friendly interfaces for both web and mobile applications.
                  </p>
                
              </div>
      ),
    },
    {
      question: "How does Trackonweb ensure a seamless user journey?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Our team employs interactive prototyping, usability testing, and a strategic approach to UX design to guarantee a smooth and enjoyable user experience.
                  </p>
               
              </div>
      ),
    },
   
    {
      question: "What industries do Trackonweb's UI/UX services cater to?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  We have experience across various industries, tailoring our services to meet the unique needs of clients in healthcare, e-commerce, finance, and more.
  </p>

</div>
)
    },
    {
      question: "What steps does Trackonweb take to stay abreast of UI/UX design trends?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Our team actively engages in continuous learning, industry research, and attends design conferences to remain at the forefront of emerging trends and technologies.
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
            FAQs about Our Top-Notch  UI & UX design Services
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









