"use client";

import React, { useState } from "react";

const Faq = () => {
  return (
    <div className=" bg-slate-100 ">
      <div className="container mx-auto ">
        <div className="lg:mx-10 xl:mx-20 mx-4  flex flex-col justify-center items-center gap-10 py-20">
          <div className=" w-full">
            <h3 className="text-[#2f327d]  lg:text-[34px] text-[22px] font-[700] capitalize">
              FAQs Related to the Web Development Certification Jaipur
            </h3>
          </div>

          <div className=" w-full bg-white ">
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    What is web development?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Web development is creating and maintaining websites, web
                    apps. web portals or e-commerce include Key points:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                    <li>
                      <span className="font-semibold">Front-end:</span> UI
                      design, HTML, CSS, JavaScript.
                    </li>
                    <li>
                      <span className="font-semibold">Back-end:</span>{" "}
                      Server-side programming, database management, security.
                    </li>
                    <li>
                      <span className="font-semibold">Full-stack:</span>{" "}
                      Combines front-end and back-end skills.
                    </li>
                    <li>
                      <span className="font-semibold">Web Technologies:</span>{" "}
                      Frameworks like React, Node.js, and databases (MySQL,
                      MongoDB).
                    </li>
                    <li>
                      <span className="font-semibold">Development Tools:</span>{" "}
                      IDEs, Git, browser developer tools.
                    </li>
                    <li>
                      <span className="font-semibold">Responsive Design:</span>{" "}
                      Ensures functionality on various devices.
                    </li>
                    <li>
                      <span className="font-semibold">Web Standards:</span>{" "}
                      Adherence to HTML, CSS, HTTP standards, and security
                      (HTTPS).
                    </li>
                    <li>
                      <span className="font-semibold">
                        Testing and Debugging:
                      </span>{" "}
                      Rigorous testing, and debugging for performance.
                    </li>
                  </ul>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    Why should I do a website development course?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Web development is crucial due to its demand across tech and
                    non-tech industries. Companies need web developers for tasks
                    like website creation, maintenance, web apps, e-commerce,
                    and more. Doing a website development course is beneficial
                    for:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                    <li>
                      <span className="font-semibold">In-Demand Skillset:</span>{" "}
                      Businesses seek professionals to establish and manage
                      their online presence.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Career Opportunities:
                      </span>{" "}
                      Offers diverse paths like front-end, back-end, full-stack
                      development, UI/UX design, and web security.
                    </li>
                    <li>
                      <span className="font-semibold">Entrepreneurship:</span>{" "}
                      Empowers individuals to bring ideas to life, whether it's
                      a startup, blog, or e-commerce site.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Remote Work Possibilities:
                      </span>{" "}
                      Allows for remote work, aligning with the trend of
                      flexible work arrangements.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Continuous Learning:
                      </span>{" "}
                      In a dynamic field, continuous learning is essential to
                      stay updated on technologies and frameworks.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Creativity and Problem-Solving:
                      </span>{" "}
                      Involves creative design and analytical problem-solving,
                      fostering a well-rounded skillset.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Contribution to the Digital World:
                      </span>{" "}
                      Web developers shape how people access information,
                      communicate, and interact online.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Collaboration and Teamwork:
                      </span>{" "}
                      In professional settings, web developers collaborate with
                      designers, content creators, and peers, honing teamwork
                      and communication skills.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Understanding Technology:
                      </span>{" "}
                      Provides insights into the technology behind daily-used
                      websites and apps.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Personal Development:
                      </span>{" "}
                      Beyond technical skills, learning web development
                      cultivates problem-solving, attention to detail, patience,
                      and resilience—valuable qualities in various aspects of
                      life.
                    </li>
                  </ul>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    How to become a web developer?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Becoming a web developer involves a series of steps. Here's
                    a general guide on how to become a web developer:
                  </p>
                  <div className="flex flex-col justify-center items-start gap-2   pt-3">
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 1 - Define Your Goals:
                      </span>
                      <span>
                        Web development is a vast field including (Front-End,
                        Back-End, Mern Stack, Full-Stack, etc.) first research
                        and select the best suitable for you.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 2 - Learn the Basics:
                      </span>
                      <span>
                        Start with the fundamental web technologies: HTML, CSS,
                        and JavaScript. Understand how websites are structured,
                        styled, and made interactive.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 3 - Master Front-End Technologies: (what users see)
                      </span>
                      <span>
                        Go for front-end development with frameworks like React,
                        Angular, or Vue.js. Learn about responsive design for
                        various devices.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 4 - Explore Back-End Development: (server-side
                        operations)
                      </span>
                      <span>
                        Choose a back-end language (e.g., Node.js, Python, Ruby)
                        and a web framework. Understand server-side development
                        and database management.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 5 - Understand Databases:
                      </span>
                      <span>
                        Learn about databases such as MySQL, PostgreSQL, or
                        MongoDB. Understand how to interact with databases from
                        a web application.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 6 - Full-Stack Development:
                      </span>
                      <span>
                        Combine front-end and back-end skills to become a
                        full-stack developer. Gain proficiency in both
                        client-side and server-side development.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 7 - Version Control:
                      </span>
                      <span>
                        Learn version control systems like Git for tracking
                        changes in your code.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 8 - Build Projects:
                      </span>
                      <span>
                        Apply your knowledge by working on real projects. Build
                        a portfolio showcasing your projects and skills.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 9 - Explore Additional Technologies:
                      </span>
                      <span>
                        Familiarize yourself with tools like Webpack, Babel, and
                        Task Runners. Understand web security principles.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 10 - Stay Updated:
                      </span>
                      <span>
                        Web development is a dynamic field; stay informed about
                        the latest technologies and trends. Follow industry
                        blogs, attend webinars, and participate in online
                        communities.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 11 - Networking:
                      </span>
                      <span>
                        Connect with other developers through forums, social
                        media, and local meetups. Seek mentorship and guidance
                        from experienced developers.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 12 - Build a Portfolio:
                      </span>
                      <span>
                        Showcase your projects, skills, and achievements in a
                        well-organized portfolio. Include descriptions of the
                        problems you solved and the technologies you used.
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-semibold">
                        Step 13 - Apply for Internships or Junior Positions:
                      </span>
                      <span>
                        Gain practical experience by applying for internships or
                        entry-level positions. Use these opportunities to
                        further enhance your skills and learn from experienced
                        professionals.
                      </span>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    From where I can Do a web development course with a Free
                    Internship?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    We, Trackonweb provide web development courses with free
                    Internships. Get Industry-recognized web developer
                    certification after course completion and work over 16+
                    Projects and live projects under expert guidance.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    which is the Easiest way to learn web development?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>

              <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                  As we suggest to our learner’s easiest way to learn web
                  development is to start: learning step by step below
                </p>
                <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                  <li>(Front-end) - HTML, CSS, and JavaScript.</li>
                  <li>(framework) - Bootstrap, ReactJS, AngularJS.</li>
                  <li>(Back-end) – NodeJS, ExpressJS</li>
                  <li>(Database) – Such as MongoDB, and Mongoose</li>
                  <li>
                    (Version Control) – Git for tracking changes in your code.
                  </li>
                  <li>
                    (Full-Stack) – Combine front-end and back-end and gain
                    proficiency in both client-side and server-side development.
                  </li>
                  <li>
                    Now Build a portfolio and explore additional technologies
                    like Webpack, Babel, Task Runner, etc.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    what does a web developer do?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>

              <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                  A web developer is a professional responsible for designing,
                  building, and maintaining websites, web apps, e-commerce, and
                  web portals. Their role encompasses various tasks related to
                  both the front end (what users see) and the back end
                  (server-side operations) of a website Include.
                </p>
                <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                  <li>Front-end development</li>
                  <li>Client-side scripting</li>
                  <li>Back-end Development</li>
                  <li>Full-stack development</li>
                  <li>Web Architecture and Framework</li>
                  <li>Version control</li>
                  <li>Web security</li>
                  <li>Testing, debugging optimization, etc.</li>
                </ul>
              </div>
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    what is the average salary of a web developer in India?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>

              <div className="py-3 px-4 ">
                <p className="lg:text-base text-[14px] ">
                  currently, the average salary of a web developer in India is
                  ₹25000 to ₹40000 thousand rupees per month. Usually, it relies
                  on experience which can raise to 6 to 12 LPA.
                </p>
              </div>
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    what does the web development course include?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    In 2024, our Master Web Development Course is designed to
                    provide a comprehensive and hands-on learning experience.
                    The course includes the following modules:
                  </p>
                  <ul className="flex flex-col justify-center items-start gap-1 list-decimal pl-6 pt-3">
                    <li>
                      <span className="font-semibold">Web Designing: </span>{" "}
                      HTML, CSS, CSS Frameworks: Bootstrap and Tailwind CSS,
                      SCSS (Sass)
                    </li>
                    <li>
                      <span className="font-semibold">
                        Frontend Development:{" "}
                      </span>
                      JavaScript (JS), ReactJS, React-Bootstrap.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Back-end Development:{" "}
                      </span>
                      JavaScript (JS), Node.js, Node.js Framework: ExpressJS,
                      Middleware Concepts
                    </li>
                    <li>
                      <span className="font-semibold">Database: </span>MongoDB,
                      Mongoose (an Object Data Modeling library for MongoDB and
                      Node.js)
                    </li>
                    <li>
                      <span className="font-semibold">
                        Projects and Placement:{" "}
                      </span>
                      Live Project Work, Certification, Resume Building,
                      Interview Preparation
                    </li>
                    <li>
                      <span className="font-semibold">Free Internship: </span>
                      Opportunities for hands-on experience through a free
                      internship
                    </li>

                    <li>
                      <span className="font-semibold">
                        Testing and Debugging:
                      </span>{" "}
                      Rigorous testing, and debugging for performance.
                    </li>
                  </ul>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    Are web development in high demand?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Yes, web development is in high demand. The increasing
                    reliance on digital technologies has led to a growing need
                    for websites, web applications, and online services,
                    resulting in a continuous demand for skilled web developers.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    Can I become a web developer in 3 Months?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Yes, you can join our 3-month web development course, we
                    train you as a web developer within 3 months.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    Expected trend of a web developer in the future?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    In the future, web development trends include continued
                    demand, emphasis on full-stack development, JavaScript
                    dominance, serverless architecture, E-commerce, Web Portals,
                    Progressive Web Apps (PWAs), AI and chatbot integration,
                    cybersecurity skills, blockchain usage, cross-platform
                    development, collaboration tools, evolving web standards,
                    and increased focus on remote work skills.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    What is the duration of the web development course?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    At Trackonweb, the web development course duration is 6
                    months including a free internship.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    what does a front-end developer do?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    A front-end developer is responsible for crafting the visual
                    and interactive aspects of a website or web application.
                    Their role involves utilizing HTML, CSS, and JavaScript to
                    design and implement the user interface, ensuring an optimal
                    and engaging user experience.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    what does a backend developer do?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    A backend developer actively engages in server-side
                    development, oversees database management, and orchestrates
                    the logic behind the scenes to guarantee the seamless
                    operation of websites or web applications.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    What is the difference between a Frontend developer and a
                    Backend developer?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    A Front-end developer is responsible for the design and user
                    interface of websites, emphasizing the client-side aspects
                    to ensure an aesthetically pleasing and responsive user
                    experience. A Back-end developer oversees server-side
                    operations, database management, and the implementation of
                    business logic to support the overall functionality of
                    websites or applications.
                  </p>
                </div>
              }
            </div>
            <div className="mb-4 ">
              <div className={`border-b-2`}>
                <div className="cursor-pointer py-3 px-4 flex  justify-between items-start ">
                  <h2 className=" text-[16px] font-semibold ">
                    Is the web development course beneficial?
                  </h2>
                  <span className="text-[16px] font-bold">+</span>
                </div>
              </div>
              {
                <div className="py-3 px-4 ">
                  <p className="lg:text-base text-[14px] ">
                    Yes, the web development course is indeed beneficial.
                    According to data, most industries actively seek web
                    developers, and the demand for certified professionals in
                    this field is consistently rising. To become a certified web
                    developer, you can consider joining our course, which
                    includes a free internship.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
