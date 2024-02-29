import React from 'react'

const Upgrading = () => {
  return (
    <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
    <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
      7. Upgrading to React 19: A Step-by-Step Guide :-
    </span>
    <span className="  leading-6  text-[15px]  pt-3">
    Embracing the power of React 19 is exciting, but it requires a smooth upgrade process. Here's a simple guide to help you through it:
    </span>
    <ul className="list-decimal">
          <li className="ml-6 pt-5 leading-6  text-[15px]">
            <span className="font-semibold">Compatibility Check: </span>
            <ul className="list-disc">
                    <li className="ml-6 pt-3 leading-6  text-[15px]">
                    Use tools like react-codemod to identify potential compatibility issues.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                  	Address any deprecated features or libraries in your project.
                  </li>
                    </ul>
          </li>
          <li className="ml-6 pt-5 leading-6  text-[15px]">
            <span className="font-semibold">Dependency Update: </span>
            <ul className="list-disc">
                    <li className="ml-6 pt-3 leading-6  text-[15px]">
                Leverage package managers like npm or yarn to update your project's dependencies.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                  Ensure you're tapping into the latest functionalities of React 19.
                  </li>
                    </ul>
          </li>
          
        </ul>
    </div>
  )
}

export default Upgrading
