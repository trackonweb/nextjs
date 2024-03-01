
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
      question: "What kind of websites do you build?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  We specialize in building a wide variety of websites, including:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                      <span className="font-semibold">Informational websites:</span>We can create informative websites that showcase your company, products, or services.
                    </li>
                     <li>
                      <span className="font-semibold">E-commerce websites:</span>{" "}
                      We can build user-friendly e-commerce platforms that allow you to sell your products online.
                    </li>
                    <li>
                      <span className="font-semibold">Web applications:</span>{" "}
                      We can develop custom web applications to meet your specific needs.
                     </li>
                     <li>
                       <span className="font-semibold">Industry-specific websites:</span>{" "}
                       We have experience creating websites for businesses in a variety of industries, including healthcare, real estate, small businesses, and more.
                     </li>
                    
                  </ul>
                </div>
      )
       
    },
    
    {
      question: "What's included in your development process?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   Our development process is collaborative and transparent, ensuring you're involved every step of the way. It typically involves:
                  </p>
                   <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">In-depth consultation:</span>{" "}
                       We'll work closely with you to understand your vision, target audience, and desired functionalities.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Strategic planning:
                      </span>{" "}
                      We'll create a comprehensive roadmap for your website, outlining key features, timeframe, and budget.
                    </li>
                     <li>
                       <span className="font-semibold">Design and development:</span>{" "}
                       Our skilled team will bring your vision to life, focusing on user experience and visual appeal
                    </li>
                    <li>
                      <span className="font-semibold">
                      Testing and launch
                      </span>{" "}
                      We'll thoroughly test your website across various devices and browsers before launch.
                    </li>
                    <li>
                     <span className="font-semibold">
                     Ongoing support
                    </span>{" "}
                    We offer ongoing maintenance and support plans to ensure your website stays up-to-date and secure.
                    </li>
                     
                   </ul>
              </div>
      ),
    },
    {
      question: "How much does website development cost?",
      answer:
        (
          <div className="py-3 px-4 ">
          <p className="lg:text-base text-[14px] ">
          The cost of your website will depend on various factors, including its complexity, features, and ongoing maintenance needs. We offer transparent pricing options and work closely with you to find a solution that fits your budget.
          </p>
         
        </div>
        )
    },
   
    {
      question: "What are the benefits of choosing Trackonweb for development?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  Here's what sets us apart:
  </p>
  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">Experienced and passionate team: :</span>{" "}
                       Our developers and designers are highly skilled and driven to create exceptional websites.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Commitment to quality:
                      </span>{" "}
                      We prioritize crafting websites that not only look amazing but also deliver optimal user experience and performance.
                    </li>
                     <li>
                       <span className="font-semibold">Clear communication:</span>{" "}
                       We keep you informed throughout the process, ensuring your voice is heard and your vision is realized
                    </li>
                    <li>
                      <span className="font-semibold">
                      	Scalable solutions
                      </span>{" "}
                      We build websites that can grow with your business, adapting to your evolving needs.
                    </li>
                    <li>
                     <span className="font-semibold">
                     Cost-effectiveness
                    </span>{" "}
                    We offer competitive pricing and work with you to find a solution that fits your budget.
                    </li>
                     
                   </ul>
</div>
)
    },
    {
      question: "How can I get started?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Simple! Contact us today for a free consultation. We'd love to discuss your website vision and answer any questions you may have. Let's turn your website dream into a thriving reality!
                </p>
                <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                  <p>Additionally, here are some of the key highlights from the provided content:</p>
                  <li>Trackonweb offers a wide range of web development services, including web apps, e-commerce, small business solutions, web portals, and healthcare and education websites.</li>
                  <li>They use a variety of technologies, including PHP, Node JS, React, WordPress, Next JS, Python, Angular JS, and Vue JS.</li>
                  <li>They offer affordable, responsive, and SEO-friendly websites.</li>
                  <li>They have a 24/7 Help Desk and a team of experienced and creative professionals.</li>
                 
                </ul>
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
            FAQs about Our Top-Notch Website Development Services
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









