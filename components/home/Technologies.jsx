'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import React from 'react'


const technologiesList =[
    {
        id: 1,
        Technology: 'react js',
        alt: 'react js',
        img: '/react.png'
    },
    {
        id: 2,
        Technology: 'html5',
        alt: 'html5',
        img: '/html5.png'
    },
    {
        id: 3,
        Technology: 'css3',
        alt: 'css3',
        img: '/css3.png'
    },
    {
        id: 4,
        Technology: 'bootstrap',
        alt: 'bootstrap',
        img: '/bootstrap.png'
    },
    {
        id: 5,
        Technology: 'flutter',
        alt: 'flutter',
        img: '/flutter.png'
    },
    {
        id: 6,
        Technology: 'node js',
        alt: 'node js',
        img: '/node.png'
    },
    {
        id: 7,
        Technology: 'mongodb',
        alt: 'mongodb',
        img: '/mongodb.png'
    },
    {
      id: 8,
      Technology: 'React Native',
      alt: 'React Native',
      img: '/react-native.png'
  },
  {
      id: 9,
      Technology: 'IOS',
      alt: 'IOS',
      img: '/ios.png'
  },
  {
      id: 10,
      Technology: 'Android',
      alt: 'Android',
      img: '/android.png'
  },
   
  {
    id: 11,
    Technology: 'Angular js',
    alt: 'Angular js',
    img: '/angular.png'
},
{
    id: 12,
    Technology: 'Vue js',
    alt: 'Vue js',
    img: '/vue.png'
},
{
  id: 13,
  Technology: 'Python',
  alt: 'Python',
  img: '/python.png'
},
    
    
]

const Technologies = () => {
    const settings = {
      
        infinite: true, // Set to true for infinite loop
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className={`bg-white `}>
    <div className='container py-6 mx-auto'>
      <div className='flex justify-center items-center'>
        <div className='lg:w-[1024px] md:w-[768px] xl:w-[1280px] w-full overflow-hidden mx-auto'>
          <Slider {...settings}>
            {technologiesList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start py-10 px-10 cursor-pointer"
                  style={{ margin: '0 10px' }} 
                >
                  <div className='flex justify-center items-center'>
                    <Image src={item.img} width={85} height={85} alt='' className='object-contain rounded-full' />
                  </div>
                  <h3 className='uppercase text-[16px] text-center font-medium pt-5'>{item.Technology}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Technologies
