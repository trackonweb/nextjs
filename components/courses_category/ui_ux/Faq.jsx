
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
      question: "What is UI UX?",
      answer:
        "UI/UX, or User Interface/User Experience, involves designing digital products to enhance user interactions. UI focuses on visual and interactive elements, such as layout and color schemes. UX, on the other hand, encompasses overall user experience, including usability, accessibility, and emotional response. In summary, UI addresses aesthetics, while UX ensures a holistic and quality user journey.",
    },
    
    {
      question: "What is the difference between UI and UX?",
      answer: (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs  uppercase bg-[#0588b0] text-white dark:bg-gray-700 dark:text-gray-400">
     <tr>
       <th scope="col" className="px-6 py-3 ">
       Aspect
       </th>
      <th scope="col" className="px-6 py-3">
      UI (User Interface)
      </th>
      <th scope="col" className="px-6 py-3">
      UX (User Experience)
       </th>
      
     </tr>
   </thead>
  <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Focus
      </th>
      <td className="px-6 py-4">
      Visual and interactive design elements
       </td>
       <td className="px-6 py-4">
       Overall user experience, usability, accessibility
      </td>
    
     </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Components
       </th>
     <td className="px-6 py-4">
      Layout, color schemes, typography, interactive features
      </td>
      <td className="px-6 py-4">
      User journey, satisfaction, emotional response
       </td>
     
     </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Goal
       </th>
       <td className="px-6 py-4">
      Enhance the product's visual appeal and presentation
       </td>
       <td className="px-6 py-4">
       Optimize the entire user interaction and experience
      </td>
     
    </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Emphasis
      </th>
      <td className="px-6 py-4">
    Aesthetics and presentation
   </td>
   <td className="px-6 py-4">
   Holistic quality of the user's journey
   </td>
      
    </tr>
   
   
    
   
  </tbody>
</table>
        </div>
      ),
    },
    {
      question: "What are the roles and responsibilities of a UI Designer?",
      answer:
        "A UI Designer is responsible for creating visually appealing and interactive elements of a digital product. This includes designing layouts, color schemes, and typography, and ensuring a cohesive and engaging user interface.",
    },
    {
      question: "What are the roles and responsibilities of a UX Designer?",
      answer:
        "A UX Designer focuses on the overall user experience, ensuring usability, accessibility, and user satisfaction. Responsibilities include user research, creating wireframes and prototypes, and collaborating to optimize the end-to-end journey for a seamless and enjoyable interaction with the product.",
    },
    {
      question: "How can I join a UI UX Design course in Jaipur?",
      answer:
        "To enroll in the UI/UX Designer course, visit the course page and complete either the contact form or the free demo class form.",
    },
    {
      question: "Which Companies Hire UI UX Designer and why?",
      answer:
        "The demand for skilled UI/UX designers is significant, with companies such as Amazon, Google, Microsoft, Apple, Adobe, Accenture, and more actively seeking talented professionals in this field.",
    },
    {
      question: "List of UI UX design Tools?",
      answer:
        "Here is a list of UI/UX designing tools: Sketch, Figma, Adobe XD, Canva, Illustrator, InVision, and UsabilityHub.",
    },
    {
      question: "In how much time I can become a UI UX Designer?",
      answer:
        "With focused and consistent effort, you can become a skilled UI/UX designer within 3-4 months however, the time it takes to become a UI/UX designer can vary based on factors such as your prior experience, the intensity of your learning, and the resources you use.",
    },
   
  ];

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto">
        <div className="lg:mx-10 xl:mx-20 mx-4 flex flex-col justify-center items-center gap-10 py-20">
          <div className="w-full">
            <h3 className="text-[#2f327d] lg:text-[34px] text-[22px] font-[700] capitalize">
              Inquiries about the Mobile App Development Certification in Jaipur
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






