
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
      question: "What types of graphic design services do you offer?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  We offer a comprehensive range of graphic design services to cater to various needs. Some of our key offerings include:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                      <span className="font-semibold">Logo Design:</span>We create unique and impactful logos that represent your brand identity.
                    </li>
                     <li>
                      <span className="font-semibold">Branding and Identity Design:</span>{" "}
                      Develop a cohesive brand identity with our services, including business cards, letterheads, and other brand collateral.
                    </li>
                    <li>
                      <span className="font-semibold">Print Design:</span>{" "}
                      From brochures and posters to banners and packaging, we design high-quality print materials to enhance your marketing efforts.
                     </li>
                     <li>
                       <span className="font-semibold">Digital Media Design:</span>{" "}
                       Engage your audience online with visually appealing graphics for social media posts, digital ads, and website elements.
                     </li>
                     <li>
                       <span className="font-semibold">Illustrations:</span>{" "}
                       Our skilled illustrators can bring your ideas to life with custom illustrations for various purposes.
                     </li>
                     <li>
                       <span className="font-semibold">UI/UX Design:</span>{" "}
                       Ensure a seamless and visually pleasing user experience with our user interface and user experience design services.
                     </li>
                     <li>
                       <span className="font-semibold">Infographics:</span>{" "}
                       Communicate complex information effectively through visually engaging infographics.
                     </li>
                  </ul>
                </div>
      )
       
    },
    
    {
      question: "How do you ensure that the graphic design process is collaborative?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   We prioritize collaboration throughout the graphic design process to ensure your vision is accurately represented. Our collaborative approach includes:
                  </p>
                   <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">Initial Consultation:</span>{" "}
                       We start with a detailed discussion to understand your goals, preferences, and the message you want to convey through the design.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Regular Feedback Sessions:
                      </span>{" "}
                      Throughout the design process, we schedule regular feedback sessions to present concepts, receive your input, and make necessary adjustments.
                    </li>
                     <li>
                       <span className="font-semibold">Open Communication:</span>{" "}
                       Our team maintains open lines of communication, allowing you to reach out with questions, concerns, or additional ideas at any stage of the project.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Interactive Prototypes
                      </span>{" "}
                      For complex designs, we may create interactive prototypes, giving you a tangible feel of the design and the opportunity to provide feedback before the finalization.
                    </li>
                    <li>
                     <span className="font-semibold">
                     Revision Rounds
                    </span>{" "}
                    We include multiple revision rounds in our process, ensuring that the design aligns perfectly with your expectations.
                    </li>
                     
                   </ul>
              </div>
      ),
    },
    {
      question: "How do you determine the cost of graphic design services?",
      answer: (
        <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   The cost of graphic design services can vary based on the scope and complexity of the project. Some factors that influence the pricing include:
                  </p>
                   <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">Scope of Work:</span>{" "}
                       The number and complexity of design elements, such as the type of graphics, illustrations, or branding materials needed.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Project Complexity:
                      </span>{" "}
                      The intricacy of the design, whether it's a simple logo design or a comprehensive branding package, can affect the overall cost.
                    </li>
                     <li>
                       <span className="font-semibold">Number of Revisions:</span>{" "}
                       The number of revision rounds required to fine-tune the design to your satisfaction may impact the overall cost.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Timeline:
                      </span>{" "}
                      The urgency of the project and the turnaround time required can influence pricing.
                    </li>
                    <li>
                     <span className="font-semibold">
                     Usage Rights:
                    </span>{" "}
                    If the graphic designs will be used for commercial purposes or have specific usage rights, this may affect the cost.
                    </li>
                     
                   </ul>
              </div>
      ),
    },
   
    {
      question: "How does Trackonweb handle revisions and feedback during the graphic design process?",
      answer:
(
  <div className="py-3 px-4 ">
  <p className="lg:text-base text-[14px] ">
  We understand that your input is crucial in creating designs that meet your expectations. Our approach to revisions and feedback is designed to ensure your satisfaction:
  </p>
  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">Collaborative Feedback Sessions:</span>{" "}
                       We schedule regular feedback sessions where we present design concepts and gather your thoughts. These sessions allow for real-time discussions and adjustments.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Transparent Revision Rounds:
                      </span>{" "}
                      Our graphic design services typically include multiple revision rounds. This transparent approach ensures that you have the opportunity to provide feedback and request changes within the agreed-upon scope.
                    </li>
                     <li>
                       <span className="font-semibold">Clear Communication Channels:</span>{" "}
                       We maintain clear communication channels throughout the design process. You can reach out to us with your feedback, questions, or requests at any stage, fostering an open and collaborative working relationship.
                    </li>
                    <li>
                      <span className="font-semibold">
                      Interactive Prototypes:
                      </span>{" "}
                      For complex designs, we may create interactive prototypes, allowing you to experience the design in a tangible way. This helps gather more specific feedback on functionality and aesthetics.
                    </li>
                    <li>
                     <span className="font-semibold">
                     Flexible and Responsive:
                    </span>{" "}
            vWe are responsive to your feedback and flexible in making adjustments. Your satisfaction is our priority, and we work diligently to ensure the final designs align seamlessly with your vision.
                    </li>
                     
                   </ul>
</div>
)
    },
    {
      question: "Can I provide input and revisions during the design process?",
      answer:
       (
        <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                Absolutely! We value your input throughout the design journey. After presenting initial concepts, we encourage you to share your thoughts and any specific preferences you may have. We offer a collaborative approach, allowing for revisions to ensure the final design not only meets but exceeds your expectations.
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
            FAQs about Our Top-Notch Graphic Design Services
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









