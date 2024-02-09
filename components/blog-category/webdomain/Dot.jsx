import Link from 'next/link'
import React from 'react'

const Dot = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className="lg:text-[20px] text-[16px] font-bold tracking-wide border-b-2 border-b-black pb-2">
              2. Dot.tk: <Link href={'http://www.dot.tk/'} className='font-normal text-blue-600'>(http://www.dot.tk/) </Link>:-
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            "Short and Memorable Domain Names"
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            Dot.tk provides free domain names with the .tk extension. Create short and memorable domain names for your online ventures.
            </span>
            </div>
    </div>
  )
}

export default Dot
