import Image from "next/image";
import React from "react";

const Director = () => {
  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto py-10">
        <div
          className={`flex flex-col justify-center lg:items-center items-start lg:space-y-3 space-y-1 lg:mx-10 xl:mx-20 mx-4`}
        >
          <span className=" text-[#0588b0] lg:text-center text-start text-[20px] font-medium uppercase">
            WE ARE AWESOME
          </span>

          <h3 className="text-[#2f327d] lg:text-[34px] text-[28px] font-[700]">
            Our <span className="text-[#2f327d] "> Managing Directors</span>
          </h3>
          <span className="text-[#696984] lg:text-center text-start text-[17px] font-medium tracking-wider">
            Trackonweb is a collective of creative and hardworking individuals
            who have come together to create the dream team
          </span>
        </div>

        <div
          className={`flex lg:flex-row flex-col sm:flex-row justify-center items-center gap-8 xl:mx-20 lg:mx-10 mx-4 pt-9`}
        >
          <div className="flex flex-col justify-center items-start  gap-[12px] ">
            <div>
              <Image
                src="/1704191511326.JPEG"
                width={280}
                height={250}
                alt=""
                className="object-contain rounded-xl "
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 p-3">
              <span className="text-[#0a033c] text-[20px] font-[700]">
                Akash Kothari
              </span>
              <span className="text-[16px] font-medium">Founder</span>
              <span className="text-[16px] font-medium">
                info@trackonweb.com
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  gap-[12px] ">
            <div>
              <Image
                src="/A_sir.jpg"
                width={300}
                height={200}
                alt=""
                className="object-contain rounded-xl "
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-2 p-3">
              <span className="text-[#0a033c] text-[20px] font-[700]">
                Akshat Sharma
              </span>
              <span className="text-[16px] font-medium">Co-Founder</span>
              <span className="text-[16px] font-medium">
                info@trackonweb.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Director;
