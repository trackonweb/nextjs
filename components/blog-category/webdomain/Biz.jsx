import Link from 'next/link'
import React from 'react'

const Biz = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className="lg:text-[20px] text-[16px] font-bold tracking-wide border-b-2 border-b-black pb-2">
              4. Biz.nf: <Link href={'https://www.biz.nf/'} className='font-normal text-blue-600'>(https://www.biz.nf/)  </Link>:-
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            "Free Domain Hosting Services"
            </span>
            <span className=" lg:text-[16px] text-[14px]  pt-3">
            Biz.nf offers free domain hosting services with a free subdomain. Suitable for small websites or personal blogs.
            </span>
            </div>
    </div>
  )
}

export default Biz
