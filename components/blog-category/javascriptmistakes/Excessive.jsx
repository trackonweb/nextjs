import React from 'react'

const Excessive = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className="lg:text-[20px] text-[16px] font-bold tracking-wide border-b-2 border-b-black pb-2">
              6. Excessive Use of Global Variables :-
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            Using too many global variables can lead to naming conflicts and make your code harder to maintain. Opt for local variables within functions and blocks to encapsulate your code and avoid unintended consequences.
            </span>
            </div>
    </div>
  )
}

export default Excessive
