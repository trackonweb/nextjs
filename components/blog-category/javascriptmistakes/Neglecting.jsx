import React from 'react'

const Neglecting = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start   pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              3. Neglecting Error Handling :-
            </span>
            <span className="  text-[14px] leading-6 pt-3">
            Neglecting error handling can lead to unexpected issues and make debugging more challenging. Always implement proper error handling techniques using try, catch, and finally blocks:
            </span>
            <span className="  text-[14px]  pt-3">
            javascript code: 
            </span>
            <div className=" flex flex-col gap-3 w-full lg:text-[20px] tracking-wide text-center text-white text-[14px] font-medium  mt-3 px-7 py-3 bg-[#0588b0]">
              <span>{`try {`}</span>
              <span>{`  // Your code here`}</span>
              <span>{`} catch (error) {`}</span>
              <span>{`console.error("An error occurred:", error);`}</span>
              <span>{`} finally {`}</span>
              <span>{`// Code to execute regardless of an error`}</span>
            </div>
            
            <span className=' text-[14px] pt-3'>This ensures a more resilient and reliable codebase.</span>
            </div>
    </div>
  )
}

export default Neglecting
