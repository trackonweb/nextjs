import Image from 'next/image'
import React from 'react'

const technologiesList =[
  {
    id: 1,
    Technology: 'Flutter',
    img: '/flutter.png'
},
{
    id: 2,
    Technology: 'React Native',
    img: '/react-native.png'
},
{
    id: 3,
    Technology: 'IOS',
    img: '/ios.png'
},
{
    id: 4,
    Technology: 'Android',
    img: '/android.png'
},
  
  
]

const Technologies = () => {
  return (
    <div className='bg-[#0588b0] text-black '>
     <div className='container mx-auto'>
        
     <div
          className={`flex  flex-col gap-3 justify-center items-center  pt-10 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-white text-center lg:text-[34px] text-[28px] font-[600] tracking-wide">
          Discover Our Mobile App Development Services
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
  )
}

export default Technologies
