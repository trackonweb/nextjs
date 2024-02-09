import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Discuss = () => {
  return (
    <div className={'bg-[#2f327d]'}>
    <div className='container mx-auto'>
        <div >
      
            <div className='lg:flex-row flex flex-col  justify-between lg:items-center items-start gap-5  h-full xl:mx-20 lg:mx-10 mx-4 py-24'>
             <div className='flex flex-col justify-center items-start gap-5'>
             <span className='text-white text-[18px] font-normal '>We'are here to help to grow your business</span>
                 <h2 className='text-[32px] font-bold text-start text-white'>Looking for the Best IT Business Solutions?</h2>
                 </div> 
                 <div className="flex justify-start items-start gap-5  py-5">
                <div>
                <Link href={'/contact'} type="button" className="text-black  bg-white hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-9 py-4 text-center tracking-wider capitalize">let's connect </Link>
                </div>
           
             </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Discuss
