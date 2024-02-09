

import WebsiteHosting from "@/components/blog-category/websitehosting"
import BlogForm from "@/components/blog/BlogForm"

import Link from "next/link"

export default function Page(){
    return (

        <>
        <div className="bg-[#0588b0] text-white">
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 xl:mx-20 lg:mx-10 mx-4 pt-20 pb-10 ">
          <div className=" w-full flex flex-col justify-start items-start">
           
            <div className=" ">
            <h1 className=" lg:text-[27px] text-[20px] font-bold tracking-wider py-6 capitalize">
              "13 best platforms for free website hosting in 2024"
            </h1>
            <div className="flex justify-start items-center lg:gap-2 gap-1">
              <Link href={"/"} className=" lg:text-[16px] text-[12px]">
                Home
              </Link>
              <span className=" font-bold">/</span>
              <Link href={"/blog"} className=" lg:text-[16px] text-[12px]">
                blog
              </Link>
              <span className=" font-bold">/</span>
              <span className=" lg:text-[16px] text-[12px]">
                free-website-hosting
              </span>
            </div>
          
           
        </div>
        </div>
       </div>
      </div>
        </div>
        <div className="xl:mx-20 lg:mx-10 mx-4">
       <div className="container mx-auto">
       <div  className="w-full flex justify-between gap-5 ">
            <div className="lg:w-[70%] w-full">
            <WebsiteHosting/>
            </div>
            <div className="lg:w-[30%] sticky h-screen  top-20 hidden lg:flex mt-5 ">
               <BlogForm/>
            </div>
        </div>
       </div>
       
        </div>
        
        </>
    )
}

export function generateMetadata(){
    return {
        title: "13 Best Platforms for Free Website Hosting in 2024",
        description:
          `Create websites on a budget with our guide to free hosting. Discover the 13 Best platforms for free website hosting in 2024`,
         
       
    }
  }