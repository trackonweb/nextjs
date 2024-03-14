import Image from 'next/image';
import React from 'react';

const technologiesList = [
  {
   
    Technology: 'Figma',
    img: '/download (9).png',
  },
  {
  
    Technology: 'illustrator',
    img: '/download (8).png',
  },
 
  {
 
    Technology: 'Canva',
    img: '/download (2).jpg',
  },
  {
 
    Technology: 'adobe xd',
    img: '/adobexd1.png',
  },
  {
 
    Technology: 'InVision',
    img: '/inv.png',
  },
  {
 
    Technology: 'UsabilityHub',
    img: '/downloa (6).jpg',
  },
];

const Technologies = () => {
  return (
    <div className='bg-[#0588b0] text-black '>
    <div className='container mx-auto'>
       
    <div
         className={`flex  flex-col gap-3 justify-center items-center  pt-10 xl:mx-20 lg:mx-10 mx-4`}
       >
         <h3 className="text-white text-center lg:text-[34px] text-[28px] font-[600] tracking-wide">
         Explore Our UI/UX Design Expertise
         </h3>

        
       </div>
       <div  className={`grid gap-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  place-items-center justify-center  xl:mx-20 lg:mx-10 mx-4 pt-10 pb-20 `}>
          {
           technologiesList.map((item,index)=>{
               return  <div key={index} className='bg-white p-[25px] w-[170px] h-[170px] shadow flex flex-col justify-center items-center gap-3 rounded-md'>
               <div>
                   <Image src={item.img} width={70} height={70} alt='' className='object-contain'/>
               </div>
               <span className='text-black capitalize text-center font-medium'>{item.Technology}</span>
           </div>
           })
          }
          
       </div>
    </div>
   </div>
  );
};

export default Technologies;
