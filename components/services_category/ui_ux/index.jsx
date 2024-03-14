import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ui from "../../../public/ui.png"


const UiuxServices = () => {
  return (
    <div className={`bg-gradient-to-r from-[#0588b0] to-[#0588b0] via-black-28  `}>
      <div className="container mx-auto ">
       <div className="xl:mx-20 lg:mx-10  mx-4">
       <div className="flex  justify-between gap-7 items-center w-full h-full pt-28 pb-20 ">
            <div className=" md:w-1/2 w-full flex flex-col justify-start items-start  gap-4">
            <span className="text-white  lg:text-[32px] text-[22px] capitalize font-bold tracking-wider ">
            Navigate the Future with Our Exceptional UI/UX Services
            </span>
            <span className="text-white lg:text-[17px] text-[14px] mt-3">
            Embark on a journey of digital excellence with Trackonweb IT Solution's unparalleled UI/UX services. Our dedicated team breathes life into your visions, seamlessly merging design and functionality to propel your business to unprecedented heights.Witness your ideas transform into captivating online experiences, each detail meticulously curated for user engagement. With Trackonweb by your side, realize the full potential of your dreams through expertly crafted UI/UX services.
            </span>
          <div className="mt-7 flex justify-start items-start">
          <Link
                href={"/contact"}
                class="hover:text-white border hover:bg-transparent border-white bg-white text-[#0588b0] duration-500 transition-all font-medium shadow-md rounded-md lg:text-[16px] text-[12px] px-8 py-3 text-center flex justify-center items-start uppercase tracking-wide"
              >
                let's connect
              </Link>
          </div>
            </div>
            <div className=" hidden md:flex w-1/2">
                <div className="">
                <Image
              src={Ui}
            
              alt="Web Development "
              className="object-cover"
            />
                </div>
            </div>
        </div>
       </div>
       
      </div>
    </div>
  );
};

export default UiuxServices;
