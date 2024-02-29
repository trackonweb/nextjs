import React from 'react'

const Asset = () => {
  return (
    <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
    <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
      5. Asset Loading: Control in Your Hands :-
    </span>
    <span className="  leading-6  text-[15px]  pt-3">
    React 19 gives you greater control over how your application loads and manages assets:
    </span>
    <ul className="list-decimal">
          <li className="ml-6 pt-5 leading-6  text-[15px]">
            <span className="font-semibold">Code Splitting: </span><br/>Divide your application code into smaller bundles, allowing users to download only what they need for the current view. This significantly improves initial load times and overall performance.
          </li>
          <li className="ml-6 pt-5 leading-6  text-[15px]">
            <span className="font-semibold">Lazy Loading: </span><br/>Delay the loading of non-critical components until they are needed, optimizing performance and enhancing the user experience.
          </li>
          
        </ul>
    </div>
  )
}

export default Asset
