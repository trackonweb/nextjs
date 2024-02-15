import React from 'react'

const Testing = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
            5. Testing and Debugging Tools :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Jest: </span>Jest, a JavaScript testing framework, prioritizes simplicity and speed. It ensures that developers can conduct comprehensive testing while maintaining an efficient development pace.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">Chrome DevTools: </span>A browser-based development tool, Chrome DevTools facilitates debugging, profiling, and performance analysis. Its features empower developers to optimize code for better user experiences.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Testing
