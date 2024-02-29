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
      question: "What is Cross-Platform Mobile App Development?",
      answer:
        "Cross-platform mobile app development involves creating mobile applications that can operate on various operating systems, such as iOS, Android, and Windows, using a single codebase. This method allows developers to write code once and deploy the app across multiple platforms, streamlining the development process. Technologies like Flutter and React Native are commonly employed, offering an effective way to reach a broader audience while maintaining a consistent user experience across different devices.",
    },
    {
      question: "How can I use Flutter?",
      answer: (
        <ul>
          <li>Installation: Install Flutter by downloading it from the official website and setting up an IDE like Visual Studio Code.</li>
          <li>Project Initialization: Create a new Flutter project using the command flutter create project_name.</li>
          <li>Development: Modify the Dart code in the lib directory to customize the app's UI and functionality.</li>
          <li>Testing and Debugging: Utilize Flutter's hot reload for faster development, and write tests using the built-in framework.</li>
          <li>Deployment: Build the app for release using flutter build and refer to the official documentation for further guidance.</li>
        </ul>
      ),
    },
    {
      question: "The difference between Flutter and React Native?",
      answer: (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-[#0588b0] text-white dark:bg-gray-700 dark:text-gray-400">
     <tr>
      <th scope="col" className="px-6 py-3 ">
      Feature
       </th>
       <th scope="col" className="px-6 py-3">
      Flutter
       </th>
       <th scope="col" className="px-6 py-3">
       React Native
       </th>
      
    </tr>
   </thead>
   <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Language
       </th>
       <td className="px-6 py-4">
       Dart
       </td>
       <td className="px-6 py-4">
       JavaScript (React)
      </td>
    
     </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       User Interface
       </th>
       <td className="px-6 py-4">
      Custom UI toolkit for consistent design
       </td>
       <td className="px-6 py-4">
       Uses native components for platform look
       </td>
     
     </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Performance
      </th>
      <td className="px-6 py-4">
      High performance with native ARM code
      </td>
      <td className="px-6 py-4">
      Good performance, may require native modules
       </td>
     
     </tr>
   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Development Speed
       </th>
      <td className="px-6 py-4">
      Fast development with hot reload
       </td>
       <td className="px-6 py-4">
       Hot reload, not as instantaneous as Flutter
      </td>
      
    </tr>
     <tr>
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Community
       </th>
       <td className="px-6 py-4">
       Growing community, smaller
       </td>
      <td className="px-6 py-4">
      Larger community, extensive libraries
      </td>
     
    </tr>
   <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      Popularity
      </th>
       <td className="px-6 py-4">
      Gaining popularity, suitable for startups
      </td>
       <td className="px-6 py-4">
       Widely adopted, favored by enterprises
       </td>
     
     </tr>
    <tr>
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Integration
       </th>
       <td className="px-6 py-4">
       Full integration into the app
       </td>
       <td className="px-6 py-4">
     Integration can be affected by native modules
    </td>
     
     </tr>
     <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Learning Curve
       </th>
      <td className="px-6 py-4">
       Steeper learning curve due to Dart
      </td>
      <td className="px-6 py-4">
      Easier for developers familiar with JavaScript and React
       </td>
         </tr>
   </tbody>
          </table>
        </div>
      ),
    },
    {
      question: "iOS App Development Tools?",
      answer: (
        <ul>
        <li>Xcode: Official IDE for iOS development.</li>
        <li>Swift: Apple's programming language for iOS.</li>
        <li>Interface Builder: Visual design tool within Xcode</li>
        <li>Simulator: A testing tool for simulating iOS devices</li>
        <li>CocoaPods: Dependency manager for third-party libraries.</li>
        <li>GitHub: Version control platform for collaborative development</li>
        <li>Firebase: Google's platform for app development services.</li>
        <li>TestFlight: Apple's beta testing platform for pre-release versions</li>
        <li>Instruments: Profiling tool for performance analysis.</li>
        <li>Cocoa Touch: UI framework for iOS app development</li>
      </ul>
      ),
    },
    {
      question: "how can I learn to create cross-platform mobile applications?",
      answer:
        "To acquire skills in creating cross-platform mobile applications, consider enrolling in the Trackonweb Mobile App Development course. Our professionals will guide you step by step, providing comprehensive training in cross-platform mobile app development proficiency. Take advantage of this course to enhance your expertise in building applications that can run on multiple platforms.",
    },
    {
      question: "Demand for Mobile App Developers in India?",
      answer:
        "In India, more and more people want mobile apps, as shown by the 3.553 million on the Play Store and 1.642 million on the Apple Store. This means there's a big demand for people who create apps for Android, iOS, and others. Being a mobile app developer is important because it helps businesses reach more people, make their apps better, and compete well in India. So, if you're a developer, there are lots of chances to do cool things and make a difference in India's growing app world.",
    },
    {
      question: "What will be the average salary of a mobile app developer in India in 2024?",
      answer:
        "There is a significant demand for skilled mobile application developers in India, with the average salary ranging between 5-8 LPA. This figure is continuously increasing due to the growing demand in the industry. The average salary of a Mobile App Developer in India varies based on factors such as experience, location, and the employing company.",
    },
    {
      question: "How can I join a Mobile App Development course in Jaipur?",
      answer:
        "To enroll in our Mobile App Development course in Jaipur, you can fill out the Trackonweb contact form to get a free demo class. We will contact you via call or email to confirm your demo class. Alternatively, you can reach us at the mobile number +91 8233330466.",
    },
    {
      question: "What jobs can I get after the Mobile App Development course?",
      answer:
        "After completing a Mobile App Development course, you can pursue jobs like Mobile App Developer, where you create apps for phones. Other options include a UI/UX Designer, focusing on the app's look and feel, or a Quality Assurance Tester, ensuring the app works well.",
    },
    {
      question: "What are the benefits of taking a Mobile app development course?",
      answer:
        "By enrolling in the Trackonweb Mobile App Development course, you'll gain numerous benefits, including training by professionals, placement assistance, resume building, interview preparation, real-life project work, internship opportunities, a recognized certification, self-development, 40+ assignments, regular tests, and much more.",
    },
    {
      question: "What are the latest tools and languages in Mobile app Development?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  here are some tools and languages in used in mobile app development:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                  <li className="lg:text-base text-[14px] font-semibold ">
                   Programming Languages:
                 <ul className="list-disc pl-3">
                      <li  className="lg:text-base text-[14px] font-normal">Swift (iOS)</li>
                      <li  className="lg:text-base text-[14px] font-normal ">Kotlin (Android)</li>
                      <li  className="lg:text-base text-[14px] font-normal">Dart (Flutter for cross-platform)</li>
                  </ul>
                  </li>
                  <li className="lg:text-base text-[14px] font-semibold ">
                   Frameworks:
                 <ul className="list-disc pl-3">
                       <li  className="lg:text-base text-[14px] font-normal">Flutter</li>
                       <li  className="lg:text-base text-[14px] font-normal ">React Native</li>
                     
                   </ul>
                   </li>
                   <li className="lg:text-base text-[14px] font-semibold ">
                   Integrated Development Environments (IDEs):
                   <ul className="list-disc pl-3">
                       <li  className="lg:text-base text-[14px] font-normal">Xcode (iOS)</li>
                       <li  className="lg:text-base text-[14px] font-normal ">Android Studio (Android)</li>
                       <li  className="lg:text-base text-[14px] font-normal ">Visual Studio Code (Cross-platform)</li>
                     
                   </ul>
                   </li>
                   <li className="lg:text-base text-[14px] font-semibold ">
                   Version Control:
                   <ul className="list-disc pl-3">
                       <li  className="lg:text-base text-[14px] font-normal">Git</li>
                     
                     
                  </ul>
                  </li>
                   <li className="lg:text-base text-[14px] font-semibold ">
                 Backend Development:
                  <ul className="list-disc pl-3">
                       <li  className="lg:text-base text-[14px] font-normal">Node.js</li>
                      <li  className="lg:text-base text-[14px] font-normal">Firebase</li>
                     
                     
                  </ul>
                   </li>
                  <li className="lg:text-base text-[14px] font-semibold ">
                  Testing and Debugging:
                  <ul className="list-disc pl-3">
                      <li  className="lg:text-base text-[14px] font-normal">Testing and Debugging</li>
                      <li  className="lg:text-base text-[14px] font-normal">JUnit, Espresso (Android)</li>
                     
                     
                  </ul>
                  </li>
                  <li className="lg:text-base text-[14px] font-semibold ">
                  Continuous Integration/Continuous Deployment (CI/CD):
                  <ul className="list-disc pl-3">
                      <li  className="lg:text-base text-[14px] font-normal">Jenkins</li>
                       <li  className="lg:text-base text-[14px] font-normal">ravis CI</li>
                      <li  className="lg:text-base text-[14px] font-normal">CircleCI</li>
                     
                     
                   </ul>
                   </li>
                   <li className="lg:text-base text-[14px] font-semibold ">
                   Containerization:
                  <ul className="list-disc pl-3">
                       <li  className="lg:text-base text-[14px] font-normal">Docker</li>
                      
                     
                     
                  </ul>
                  </li>
                    </ul>
                </div>
      ),
    },
    {
      question: "What duration of to become a mobile app developer?",
      answer:
        "Typically, it takes approximately 6 months to become a proficient mobile app developer. However, Trackonweb's cross-platform Mobile App Development course with Flutter is uniquely designed for beginners, featuring a 4-month learning period. This comprehensive program not only covers theoretical concepts but also offers a practical edge through a dedicated internship opportunity. By working on live projects, participants can apply their skills, ensuring they emerge as skilled and well-rounded mobile app developers.",
    },
    {
      question: "Which course is better for becoming a Mobile App developer in Jaipur?",
      answer:
        "Trackonweb's Cross-Platform Mobile App Development with Flutter course is highly recommended for aspiring mobile app developers in Jaipur. This course not only provides comprehensive training but also focuses on the practical application of skills through real-world projects.",
    },
    {
      question: "How to start Mobile app development?",
      answer: (
        <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                  Here are some steps to start mobile app development:
                   </p>
                 
                   <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                     <li>
                       <span className="font-semibold">Choose Platform: </span>{" "}
                       Decide between iOS (Swift) or Android (Kotlin/Java).
                    </li>
                 <li>
                     <span className="font-semibold">
                       Learn Programming Basics: 
                       </span>{" "}
                      Grasp fundamental programming concepts.
                    </li>
                    <li>
                       <span className="font-semibold">Set Up Development Environment: </span>{" "}
                       install an IDE like Xcode or Android Studio.
                    </li>
                    <li>
                       <span className="font-semibold">
                      Understand App Architecture: 
                       </span>{" "}
                      Familiarize with mobile app structure.
                    </li>
                   
                    <li>
                      <span className="font-semibold">
                    Online Courses: 
                      </span>{" "}
                       enroll in relevant online courses.
                     </li>
                     <li>
                      <span className="font-semibold">Build and Test: </span>{" "}
                     Start with small projects to apply learning.
                    </li>
                   
                      
                  
                  </ul>
                  
                 </div>
      ),
    },
    {
      question: "Mobile app development course fees?",
      answer:
        "At Trackonweb, we offer various Mobile App Development courses designed for beginners and intermediates, with fees starting at 6999/- rupees. Our courses aim to provide comprehensive learning experiences, enabling individuals to establish a solid foundation in mobile app development.",
    },
{
  question: "Mobile app development course syllabus?",
  answer: (
   <>
   
              
        
           <div className="mb-4 ">
            
              
                 <div className="py-3 px-4 ">
                   <p className="lg:text-base text-[14px] ">
                   The modules covered include 
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                    <li>
                      
                     Introduction to Mobile App Development
                   </li>
                    <li>
                     
                    	React Native Fundamentals
                     </li>
                    <li>
                      
                    Flutter Basic
                    </li>
                    <li>
                     
                    Backend Development with NodeJS and MongoDB 
                    </li>
                   
                    <li>
                      
                    Integrating Backend with Mobile Apps
                    </li>
                    <li>
                   
                    Advanced Tools and Features
                    </li>
                    <li>
                   
                    Real-world Projects and Hands-on Experience
                   </li>
                   <li>
                   
                   	Project Deployment and Optimization
                   </li>
                  
                </ul>
                 <p className="lg:text-base text-[14px] pt-4 ">
                  To download the complete syllabus for our Cross-Platform Mobile App Development course, please fill out our contact form on our website 
                  </p>
                  </div>
                  </div>
   </>
  ),
}
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



