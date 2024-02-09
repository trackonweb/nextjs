import React from 'react'

const Overlooking = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className="lg:text-[20px] text-[16px] font-bold tracking-wide border-b-2 border-b-black pb-2">
              5. Overlooking Memory Leaks :-
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            Memory leaks can impact the performance of your application. Be mindful of objects that are no longer needed, and use tools like Chrome DevTools to identify and fix memory leaks in your JavaScript code.
            </span>
            </div>
    </div>
  )
}

export default Overlooking
