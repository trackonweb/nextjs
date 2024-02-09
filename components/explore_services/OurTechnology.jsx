import Image from 'next/image'
import React from 'react'

const technologiesList =[
    {
        id: 1,
        Technology: 'javascript',
        img: '/javascript.png'
    },
    
    {
        id: 2,
        Technology: 'Angular js',
        img: '/angular.png'
    },
    {
        id: 3,
        Technology: 'Vue js',
        img: '/vue.png'
    },
    {
        id: 4,
        Technology: 'react js',
        img: '/react.png'
    },
    {
        id: 5,
        Technology: 'Next js',
        img: '/download (4).png'
    },
    
    {
        id: 6,
        Technology: 'node js',
        img: '/node.png'
    },
    {
        id: 7,
        Technology: 'mongodb',
        img: '/mongodb.png'
    },
    {
        id: 8,
        Technology: 'html5',
        img: '/html5.png'
    },
    {
        id: 9,
        Technology: 'css3',
        img: '/css3.png'
    },
    {
        id: 10,
        Technology: 'bootstrap',
        img: '/bootstrap.png'
    },
    {
        id: 11,
        Technology: 'jQuery',
        img: '/download (6).png'
    },
    
    {
        id: 12,
        Technology: 'MUI',
        img: '/download (3).png'
    },
    {
        id: 13,
        Technology: 'Tailwind',
        img: '/download.jpg'
    },
    {
        id: 14,
        Technology: 'Scss',
        img: '/download (5).png'
    },
    {
        id: 15,
        Technology: 'Flutter',
        img: '/flutter.png'
    },
    {
        id: 16,
        Technology: 'React Native',
        img: '/react-native.png'
    },
    {
        id: 17,
        Technology: 'IOS',
        img: '/ios.png'
    },
    {
        id: 18,
        Technology: 'Android',
        img: '/android.png'
    },
    {
        id: 19,
        Technology: 'Photoshop',
        img: '/download (7).png',
      },
      {
        id: 20,
        Technology: 'Coreldraw',
        img: '/download (1).jpg',
      },
      {
        id: 21,
        Technology: 'illustrator',
        img: '/download (8).png',
      },
      {
        id: 22,
        Technology: 'Figma',
        img: '/download (9).png',
      },
      {
        id: 23,
        Technology: 'Canva',
        img: '/download (2).jpg',
      },
      {
        id: 24,
        Technology: 'Wordpress',
        img: '/wordpress.png'
    },
    {
        id: 25,
        Technology: 'Python',
        img: '/python.png'
    },
    {
        id: 26,
        Technology: 'Php',
        img: '/pngimg.com - php_PNG43.png'
    },
    
]

const OurTechnology = () => {
  return (
    <div className='bg-[#fff6f3] text-black py-10'>
     <div className='container mx-auto'>
     <div
          className={`flex flex-col justify-center items-center space-y-2 xl:mx-20 lg:mx-10 mx-4 `}
        >
         

          <h3 className="text-[#2f327d] lg:text-[34px] text-[28px] font-[700] leading-10">
            Our <span className="text-[#0588b0] ">Technologies</span>
          </h3>
          <span className="text-black text-center  lg:text-[22px] text-[16px] font-[400]">
          "Trackonweb IT Solutions leverages cutting-edge technologies to deliver innovative software solutions, ensuring efficiency, reliability, and seamless integration for your business success."
          </span>
        </div>
        <div  className={`grid gap-5 grid-cols-2 md:grid-cols-5 sm:grid-cols-5 lg:grid-cols-7 justify-items-center  xl:mx-20 lg:mx-10 mx-4 pt-16 pb-10 `}>
           {
            technologiesList.map((item,index)=>{
                return  <div key={index} className='bg-white p-[25px] shadow flex flex-col justify-center items-center gap-3'>
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

export default OurTechnology
