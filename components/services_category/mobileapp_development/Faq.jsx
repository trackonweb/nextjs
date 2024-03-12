
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
      question: "What kinds of mobile apps do you develop?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  At Trackonweb, we specialize in creating various types of mobile apps, including:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                      <span className="font-semibold">Informational Apps:</span>We can design apps that provide valuable information about your company, products, or services.
                    </li>
                     <li>
                      <span className="font-semibold">E-commerce Apps:</span>{" "}
                      Our expertise extends to building user-friendly mobile platforms, enabling you to sell your products online seamlessly.
                    </li>
                    <li>
                      <span className="font-semibold">Custom Web Applications:</span>{" "}
                      If you have specific requirements, we can develop personalized mobile applications tailored to meet your unique needs.
                     </li>
                     <li>
                       <span className="font-semibold">Industry-Specific Apps:</span>{" "}
                       With experience across diverse sectors, we've crafted mobile apps for healthcare, real estate, small businesses, and more.
                     </li>
                   
                  </ul>
                </div>
      )
       
    },
    
    {
      question: "How can Trackonweb help my business with mobile app development?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Trackonweb is committed to bringing your mobile app ideas to life. Whether you need a simple information app or a complex e-commerce solution, we have the expertise to tailor our services to your business requirements. Our goal is to enhance your online presence and provide solutions that resonate with your audience.
                  </p>
                 
              </div>
      ),
    },
    {
      question: "Why choose Trackonweb for mobile app development?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Trackonweb stands out for its dedication to creating cost-effective, innovative, and user-friendly mobile apps. We take pride in our ability to understand your business needs and deliver high-quality results within your budget. With experience in various industries, we ensure your mobile app aligns with industry standards and surpasses your expectations.
                  </p>
                 
              </div>
      ),
    },
   
    {
      question: "How do I get started with Trackonweb mobile app development services?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  Getting started is easy! Simply reach out to us through our contact channels, and our team will guide you through the process. We'll discuss your ideas, requirements, and goals to kickstart the development of a mobile app that aligns perfectly with your business objectives.
  </p>
  
</div>
)
    },
    {
      question: "Can Trackonweb create apps for my specific industry?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Absolutely! Trackonweb has a proven track record of developing apps for a variety of industries, including healthcare, real estate, small businesses, and more. We understand the unique demands of each industry and tailor our mobile app solutions to address specific challenges, ensuring your app meets industry standards and enhances your business presence.
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
            FAQs about Our Top-Notch Mobile App Development Services
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









