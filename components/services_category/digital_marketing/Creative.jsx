import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Creative = () => {
  return (
    <div className={`bg-[#2f327d]  `} >
    <div className="container mx-auto ">
    
     <div className="xl:mx-20 flex lg:flex-row flex-col lg:mx-10 mx-4 py-6">
     <div className="lg:w-1/2 w-full">
        <Image src='/HD_M209_05-removebg-preview.png' width={600} height={600} alt=" " className="object-contain"/>
     </div>
     <div className="lg:w-1/2 w-full flex flex-col  justify-center items-start ">
     <span className="text-white  lg:text-[32px] text-[22px] font-bold tracking-wider "> Innovative Design, Seamless Functionality:</span>

     <span className="text-white text-justify lg:text-[17px] text-[14px] font-normal leading-7 mt-5">Embark on a digital journey like never before with our avant-garde web designs that captivate and engage. Our intuitive solutions seamlessly blend creativity with functionality, ensuring your online presence not only stands out but also delivers exceptional user experiences.</span>
     <div className="flex justify-start items-start gap-5  pt-9">
     <Link href={'/contact'} className="text-white bg-[#0588b0] hover:bg-[#64dfcb]  font-medium rounded-md lg:text-[16px] text-[10px] px-7 py-4 text-center ">{`Work with us`}</Link>
        
      
     </div>
     </div>
    
     </div>
   
    
    </div>

</div>
  )
}

export default Creative
