import Link from 'next/link'
import React from 'react'

const Biz = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              4. Biz.nf: <Link href={'https://www.biz.nf/'} target='_blank' className='font-normal text-blue-600'>(https://www.biz.nf/)  </Link>:-
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            "Free Domain Hosting Services"
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            Biz.nf offers free domain hosting services with a free subdomain. Suitable for small websites or personal blogs.
            </span>
            </div>
    </div>
  )
}

export default Biz
