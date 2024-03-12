
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
      question: "How can digital marketing benefit my business?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  Digital marketing can significantly benefit your business by enhancing online visibility, reaching a targeted audience, increasing brand awareness, and driving customer engagement. It is a cost-effective way to promote your products or services and achieve measurable results.
                  </p>
                
                </div>
      )
       
    },
    
    {
      question: "What sets Trackonweb's digital marketing services apart from others?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Trackonweb stands out through its personalized approach, data-driven strategies, and continuous adaptation to industry trends. Our focus on comprehensive analytics, social media dominance, and cost-effective solutions ensures that your digital marketing efforts yield maximum impact.
                  </p>
                 
              </div>
      ),
    },
    {
      question: " Can you explain the role of social media in digital marketing?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Social media plays a crucial role in digital marketing by providing a platform for direct interaction with your audience. We create compelling social media campaigns, focusing on platforms like Facebook, Instagram, Twitter, and LinkedIn to build brand presence, foster engagement, and drive traffic to your website.
                  </p>
                 
              </div>
      ),
    },
   
    {
      question: "How will I know if the digital marketing efforts are effective?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  We prioritize transparency and provide comprehensive reporting and analysis. Regular updates, detailed performance reports, and key metrics will be shared with you. This allows you to track the effectiveness of the campaigns and understand the return on investment (ROI) for your digital marketing initiatives.
  </p>
  
</div>
)
    },
    {
      question: "Can you work with businesses in specific industries?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Yes, Trackonweb has experience working across diverse sectors, including healthcare, real estate, small businesses, and more. Our industry-specific expertise allows us to tailor digital marketing strategies that address the unique challenges and opportunities within each sector.
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
            FAQs about Our Top-Notch Digital Marketing Services
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









