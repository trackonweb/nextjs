import Image from 'next/image'
import React from 'react'

const technologiesList =[
    {
        id: 1,
        Technology: 'react js',
        img: '/react.png'
    },
    {
        id: 2,
        Technology: 'html5',
        img: '/html5.png'
    },
    {
        id: 3,
        Technology: 'css3',
        img: '/css3.png'
    },
    {
        id: 4,
        Technology: 'bootstrap',
        img: '/bootstrap.png'
    },
    
    {
        id: 5,
        Technology: 'node js',
        img: '/node.png'
    },
    {
        id: 6,
        Technology: 'mongodb',
        img: '/mongodb.png'
    },
    {
        id: 7,
        Technology: 'javascript',
        img: '/javascript.png'
    },
    {
        id: 8,
        Technology: 'Wordpress',
        img: '/wordpress.png'
    },
    
    
]

const Technologies = () => {
  return (
    <div className='bg-[#fff6f3] text-black py-10'>
     <div className='container mx-auto'>
     <div
          className={`flex flex-col justify-center items-center space-y-2 xl:mx-20 lg:mx-10 mx-4 `}
        >
         

          <h3 className="text-[#2f327d] lg:text-[34px] text-[22px] font-[700] leading-10">
          Technologies <span className="text-[#0588b0] ">you will learn</span>
          </h3>
          <span className="text-black text-center  lg:text-[18px] text-[14px] font-[400]">
          "Trackonweb IT Solutions leverages cutting-edge technologies to deliver innovative software solutions, ensuring efficiency, reliability, and seamless integration for your business success."
          </span>
        </div>
        <div  className={`flex flex-wrap gap-5  justify-items-center  xl:mx-20 lg:mx-10 mx-4 pt-16 pb-10 `}>
           {
            technologiesList.map((item,index)=>{
                return  <div key={index} className='bg-white p-[25px] flex-1 shadow flex flex-col justify-center items-center gap-3'>
                <div>
                    <Image src={item.img} width={70} height={70} alt='' className='object-contain'/>
                </div>
                <span className='text-black capitalize font-medium'>{item.Technology}</span>
            </div>
            })
           }
           
        </div>
     </div>
    </div>
  )
}

export default Technologies
