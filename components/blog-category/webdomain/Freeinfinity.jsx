import Link from 'next/link'
import React from 'react'

const Freeinfinity = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              3.  InfinityFree: <Link href={'https://infinityfree.net/'} target='_blank' className='font-normal text-blue-600'>(https://infinityfree.net/)  </Link>:-
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            "Free Domain Hosting Solutions"
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            While primarily a hosting provider, InfinityFree often includes a free subdomain with hosting. Perfect for those seeking an all-in-one solution.
            </span>
            </div>
    </div>
  )
}

export default Freeinfinity
