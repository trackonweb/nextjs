import Link from 'next/link'
import React from 'react'

const Better = () => {
  return (
    <div className={`bg-[url('/abstract-classic-blue-screensaver_23-2148421853.avif')] bg-cover bg-center bg-fixed `}>
    <div className='container mx-auto'>
        <div >
      
            <div className='lg:flex-row flex flex-col  justify-center lg:items-center items-start gap-5  h-full xl:mx-20 lg:mx-10 mx-4 py-24'>
             <div className='flex flex-col justify-center items-center gap-5'>
            
                 <h2 className='lg:text-[60px] text-[30px] font-bold lg:text-start text-center text-white'>Better IT Solutions & Services
at your Fingertips</h2>
<Link href={'/explore-services'}  class="text-black  bg-white hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-9 py-4 text-center tracking-wider">Learn More</Link>
                 </div> 
              
            </div>
        </div>
    </div>
    </div>
  )
}

export default Better
