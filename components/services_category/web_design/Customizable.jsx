import React from "react";
import { FaArrowRight } from "react-icons/fa";

const serviceList = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "Crafting tailor-made web solutions to meet the unique needs of your business, ensuring a personalized and high-performing online presence.",
  },
  {
    id: 2,
    title: "Customer Relationship Management (CRM)",
    description:
      "Implementing CRM solutions to streamline customer interactions, enhance communication, and optimize business processes for improved efficiency.",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Harnessing the power of cloud infrastructure to provide scalable, secure, and collaborative solutions, ensuring flexibility and seamless integration.",
  },
  {
    id: 4,
    title: "Third-Party Integrations (CRM and more)",
    description:
      "Integrating third-party tools and services, including CRM systems, to enhance functionality and provide a seamless user experience.",
  },
  {
    id: 5,
    title: "Workflow Management",
    description:
      "Optimizing and automating business workflows to improve efficiency, productivity, and overall operational performance.",
  },
  {
    id: 6,
    title: "Enterprise Web Development",
    description:
      "Delivering robust web solutions tailored for enterprise-level businesses, ensuring scalability, security, and advanced features.",
  },
  {
    id: 7,
    title: "E-Commerce, B2B & B2C",
    description:
      "Creating customized e-commerce solutions for both business-to-business (B2B) and business-to-consumer (B2C) scenarios, maximizing online sales.",
  },
  {
    id: 8,
    title: "Any Custom Business Application",
    description:
      "Developing bespoke business applications tailored to your specific requirements, providing innovative solutions for diverse business processes.",
  },
];

const Customizable = () => {
  return (
    <div className="bg-[#fff6f3] lg:h-[650px]">
      <div className="container mx-auto py-10">
        <div className="flex flex-col justify-center items-center mx-4 lg:mx-10 xl:mx-20 gap-5">
          <h2 className="text-[#2f327d] lg:text-[34px] lg:text-center text-start text-[22px] font-[700] leading-10 tracking-wider">
            Empower Your Online Presence with Fully Customizable, High-Quality,
            and Robust Websites!
          </h2>
          <span className="text-[#0588b0] lg:text-center text-start text-[16px] font-medium ">
            Elevate Your Digital Presence with Seamless User Experiences - We're
            Recognized Among Top Custom Web Development Companies!:
          </span>
        </div>

        <div className=" flex flex-col lg:flex-row  gap-6 mx-4 lg:mx-10 xl:mx-20 py-9 ">
          <div className="flex flex-col justify-center items-start gap-3 lg:w-[60%] w-full h-full">
            <h4 className="text-[16px] font-bold tracking-wider">
              WEB DEVELOPMENT COMPANY
            </h4>
            <span className="text-[14px] font-normal  leading-7 text-justify">
              Welcome to Trackonweb – Your Premier Destination for Exceptional
              Website Development! Discover the Power of Premier, Modern, and
              Cutting-Edge Technologies with Trackonweb, where we craft awesome
              web solutions that redefine digital excellence. Our commitment to
              process-driven development sets us apart, ensuring swift
              product-to-market delivery and unparalleled user experiences.At
              Trackonweb, we're not just a website development company; we're
              architects of online brilliance. We exclusively rely on premier,
              modern, and worthy technologies to bring your web projects to
              life. Our team is dedicated to staying at the forefront of
              industry trends, ensuring that your digital presence is not just
              current but visionary.Our global expertise positions us as a
              reliable partner for businesses seeking customized web development
              solutions. Our team is the backbone of our success. Comprising
              Magento certified developers and skilled professionals in HTML5,
              CSS3, Joomla, WordPress, PHP, JavaScript, ASP.NET, Drupal, they
              are dedicated to making every project worth your time and dollars.
            </span>
          </div>
          <div className="flex flex-col justify-center items-start gap-2 lg:w-[40%]">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="flex justify-center items-start gap-2"
              >
                <span className="p-2 bg-blue-400 text-white rounded-full">
                  <FaArrowRight />
                </span>
                <span className="text-[16px]">{service.title}</span>
              </div>
            ))}

            <div className="flex justify-center  items-start mt-4">
              <button
                type="button"
                class="text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center "
              >{`Get Quote >`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
