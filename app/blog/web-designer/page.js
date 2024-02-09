

import WebDesigner from "@/components/blog-category/webdesigner"

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
              "How to Become a Web Designer in 2024"
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
                web-designer
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
            <WebDesigner/>
            </div>
            <div className="lg:w-[30%] sticky h-screen  top-20 hidden  lg:flex mt-5 ">
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
        title: "How to Become a Web Designer in 2024: A Complete Guide",
        description:
          `Become a successful web designer in 2024 by choosing the right courses to build a stellar portfolio. Stay ahead in the competitive world of web design`,
         
       
    }
  }