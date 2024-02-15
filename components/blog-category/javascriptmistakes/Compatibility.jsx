import React from 'react'

const Compatibility = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              4. Ignoring Cross-Browser Compatibility :-
            </span>
            <span className="  text-[14px] leading-6   pt-3">
            Failing to consider cross-browser compatibility can result in code that works inconsistently across different browsers. Test your code on multiple browsers and use tools like Babel for transpiling to ensure compatibility.
            </span>
            </div>
    </div>
  )
}

export default Compatibility
