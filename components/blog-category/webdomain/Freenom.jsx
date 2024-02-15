import Link from 'next/link'
import React from 'react'

const Freenom = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              1. Freenom: <Link href={'https://www.freenom.com/'} target='_blank' className='font-normal text-blue-600'>(https://www.freenom.com/) </Link>:-
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            "Free Domains with Unique Extensions"
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            Freenom offers free domain names with extensions like .ml, .ga, .cf, .gq, and .tk. Ideal for personal projects and experimentation.
            </span>
            </div>
    </div>
  )
}

export default Freenom
