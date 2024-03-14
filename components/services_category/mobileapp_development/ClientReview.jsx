"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const Learners = [
  
    {
      id: 1,
      title: "Emily Anderson",
      description: "I'm amazed by TrackonWeb mobile app development services! Their innovative solutions have transformed our ideas into reality. The app is user-friendly, visually appealing, and performs flawlessly. Highly recommend!"
    },
    {
      id: 2,
      title: "Michael Brown",
      description: "TrackonWeb mobile app development expertise has been outstanding! They understood our requirements perfectly and delivered a high-quality app within the stipulated time frame. Their professionalism and dedication are commendable. Thank you!"
    },
    {
      id: 3,
      title: "Sophia Martinez",
      description: "We're delighted with TrackonWeb mobile app development services! They created an app that exceeded our expectations in terms of functionality and design. Their team's communication and support throughout the project were exceptional. Couldn't be happier!"
    },
    {
      id: 4,
      title: "William Johnson",
      description: "TrackonWeb mobile app development solutions have been phenomenal! They built an app that perfectly aligns with our business goals and user needs. The app's performance and user experience are top-notch. They're truly a reliable partner for app development!"
    }
  
  
 
];

const ClientReviews = () => {
  const settings = {
    infinite: true, // Set to true for infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={`bg-[url('/istockphoto-1358014313-612x612.jpg')] bg-cover bg-center bg-fixed`}>
       <div className='bg-[rgba(0,0,0,0.48)]  py-20 '>
       <div className="container mx-auto">
        <div
          className={`flex flex-col justify-center items-center space-y-2  pb-16 mx-4`}
        >
          <h3 className="text-white text-center lg:text-[34px] text-[28px] font-[700]">
          Experience the Delight of Satisfied Clients with Our Remarkable Work
          </h3>
        </div>
        <div
          className={`lg:w-[1024px] md:w-[768px] xl:w-[1280px] w-full overflow-hidden mx-auto`}
        >
          <Slider {...settings}>
            {Learners.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex  justify-center  items-center    cursor-pointer gap-6   "
                >
                 <div className="h-[350px] flex flex-col justify-start items-start  border  p-[25px] shadow-md shadow-transparent overflow-hidden rounded-md">
                 <div className="flex flex-col justify-start items-start gap-3">
                    <FaQuoteLeft className="text-[30px]  text-yellow-400" />
                    <span className="lg:text-[18px] text-[16px] text-white tracking-wide  leading-relaxed">
                      {item.description}
                    </span>
                  </div>

                  <span className="text-white text-[22px] font-medium  mt-5 mb-2">
                    {item.title}
                  </span>
                 </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
       </div>
     
    </div>
  );
};

export default ClientReviews;
