import React from 'react'

const StrictMode = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start   pb-5 p-4">
            <span className="lg:text-[20px] text-[16px] font-bold tracking-wide border-b-2 border-b-black pb-2">
              2. Not Using Strict Mode :-
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            Strict mode in JavaScript is a set of rules that helps catch common coding mistakes and prevents the use of problematic features. To implement strict mode, simply add the following line to the top of your JavaScript file:
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            javascript code: 
            </span>
            <span className=" lg:text-[20px] tracking-wide text-white text-[14px] font-medium  mt-3 px-7 py-3 bg-[#0588b0]">
            "use strict"; 
            </span>
            <span className='lg:text-[16px] text-[14px] pt-3'>This simple addition can enhance code quality by catching errors that might otherwise go unnoticed.</span>
            </div>
    </div>
  )
}

export default StrictMode
