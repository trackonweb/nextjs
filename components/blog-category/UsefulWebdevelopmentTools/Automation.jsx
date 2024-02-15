import React from 'react'

const Automation = () => {
  return (
    <div>
        <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
            7. Automation and Build Tools :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Gulp: </span>Gulp, a task automation toolkit, efficiently handles tasks like minification and compilation. Its automation capabilities streamline development workflows, saving time and effort.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">Webpack (repeated for clarity): </span>Beyond performance optimization, Webpack also excels in automating build processes. It bundles, compiles, and transforms code and assets, contributing to a smooth development pipeline.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Automation

