import React from 'react'

const Manipulation = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              7. Poorly Optimized DOM Manipulation :-
            </span>
            <span className=" text-[14px]  pt-3">
            Inefficient DOM manipulation can impact the speed of your web page. Optimize DOM manipulation by caching elements, minimizing reflows and repaints, and using efficient selectors.
            </span>
            </div>
    </div>
  )
}

export default Manipulation
