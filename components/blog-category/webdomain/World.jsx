import Link from 'next/link'
import React from 'react'

const World = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              5. FreeNom World: <Link href={'https://www.freenom.world/'} target='_blank' className='font-normal text-blue-600'>(https://www.freenom.world/)  </Link>:-
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            "Diverse Free Domain Extensions"
            </span>
            <span className=" leading-6 text-[14px]  pt-3">
            Similar to Freenom, FreeNom World provides free domain registrations with various extensions. Create unique domain names for your projects.
            </span>
            </div>
    </div>
  )
}

export default World
