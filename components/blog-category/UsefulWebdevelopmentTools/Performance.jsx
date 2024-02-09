import React from 'react'

const Performance = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className="lg:text-[20px] text-[18px] font-bold tracking-wide border-b-2 border-b-black pb-2">
            6. Performance Optimization Tools :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5">
                    <span className="font-semibold">Lighthouse: </span>An open-source, automated tool, Lighthouse focuses on improving web page quality. Conducting audits for performance, accessibility, and more, it provides actionable insights for optimization.
                  </li>
                  <li className="ml-6 pt-3">
                    <span className="font-semibold">Webpack: </span>As a module bundler for JavaScript applications, Webpack optimizes and bundles assets. It plays a vital role in enhancing performance by ensuring efficient code delivery.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Performance
