import Image from 'next/image'
import React from 'react'

const technologiesList =[
    {
        id: 1,
        Technology: 'html5',
        img: '/html5.png'
    },
    {
        id: 2,
        Technology: 'css3',
        img: '/css3.png'
    },
    {
        id: 3,
        Technology: 'bootstrap',
        img: '/bootstrap.png'
    },
    {
        id: 4,
        Technology: 'jQuery',
        img: '/download (6).png'
    },
    
    {
        id: 5,
        Technology: 'MUI',
        img: '/download (3).png'
    },
    {
        id: 6,
        Technology: 'Tailwind',
        img: '/download.jpg'
    },
    {
        id: 7,
        Technology: 'Scss',
        img: '/download (5).png'
    },
    {
        id: 8,
        Technology: 'Wordpress',
        img: '/wordpress.png'
    },
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
      Technology: 'Wordpress',
      img: '/wordpress.png'
  },
  {
      id: 9,
      Technology: 'Php',
      img: '/pngimg.com - php_PNG43.png'
  },
  {
      id: 9,
      Technology: 'Python',
      img: '/python.png'
  },
  
 
  
  
]

const Technologies = () => {
  return (
    <div className='bg-[#0588b0] text-black '>
     <div className='container mx-auto'>
        
     <div
          className={`flex  flex-col gap-3 justify-center items-center  pt-10 xl:mx-20 lg:mx-10 mx-4`}
        >
          <h3 className="text-white text-center lg:text-[34px] text-[28px] font-[700]">
          Languages and Tools of Web Development (2024) you will master<span className=""></span>
          </h3>
          <span className='text-[16px] lg:text-[20px] font-medium text-[#f3f3f3] text-center'>With the Trackonweb master web development in 2024 course, you will master GitHub, Chrome Developer Tools, VS Code, HTML, CSS, SCSS, Tailwind CSS, Bootstrap, JavaScript (JS), ReactJS, React-Bootstrap, NodeJS, MongoDB, Mongoose, Express JS, APIs, Redux, Middleware, and more.</span>
         
        </div>
        <div  className={`grid gap-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  justify-items-center  xl:mx-20 lg:mx-10 mx-4 pt-20 pb-20 `}>
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
