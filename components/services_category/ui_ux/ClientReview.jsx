"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const Learners = [
  
    {
      id: 1,
      title: "Sarah Johnson",
      description: "I'm impressed by TrackonWeb UI/UX services! Their designs have greatly enhanced our app's usability and aesthetics. They're responsive, professional, and deliver exceptional results. Highly recommended!"
    },
    {
      id: 2,
      title: "John Smith",
      description: "TrackonWeb UI/UX expertise has been instrumental in improving our digital products. Their attention to detail and creative approach have resulted in interfaces that resonate with our international audience. Thank you!"
    },
    {
      id: 3,
      title: "Emma Brown",
      description: "We're thrilled with TrackonWeb UI/UX services! Their designs have brought our website to life, enhancing user experience and engagement. Their team is dedicated, talented, and highly professional. Couldn't be happier!"
    },
    {
      id: 4,
      title: "David Wilson",
      description: "TrackonWeb UI/UX solutions have exceeded our expectations! Their intuitive designs and user-friendly interfaces have significantly improved customer satisfaction and retention. They're truly a cut above the rest!"
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
