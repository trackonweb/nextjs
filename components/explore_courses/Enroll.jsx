'use client'
import { useState,useEffect } from 'react';

import Model from './Model';

const Enroll = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoFormClick = () => {
    setShowDemoForm(!showDemoForm);
  };
 
  useEffect(() => {
    // Set the overflow property of the body based on the state of showContact
    document.body.style.overflow = showDemoForm ? 'hidden' : 'auto';

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showDemoForm]);
  return (
    <div className={`  `}>
      <div className=" flex justify-center items-center py-20">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-center items-center gap-6 py-20 xl:px-20 lg:px-10 px-4  w-full bg-[#0588b0] rounded-lg overflow-hidden">
          <div className="absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -right-16 -top-16"></div>
          <div className="absolute  z-0 w-40 h-40 bg-teal-400 rounded-full -left-16 -bottom-16"></div>
            <div className="flex flex-col justify-center items-center  w-full ">
              <h2 className="lg:text-[32px] text-[22px] text-center text-white font-[600] tracking-wide">
                Book Your Demo Class Today!
              </h2>
              <span className="lg:text-[16px] text-[14px] font-normal tracking-wide text-center text-white mt-5">
                Start your journey! Join our demo class to experience how our
                our course can accelerate your career growth and open doors to
                exciting opportunities. Don’t miss this chance to elevate your
                skills. Enroll now!
              </span>
              <button
                className="relative py-2 px-8 mt-10 text-black text-base font-[600] tracking-wide rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan-500 before:to-cyan-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0 capitalize"
                onClick={handleDemoFormClick}
              >
                Register for free demo
              </button>
            </div>
          </div>
          <div className=' flex justify-center items-center'>
        {showDemoForm && <Model setShowDemoForm={setShowDemoForm}/>}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Enroll;
