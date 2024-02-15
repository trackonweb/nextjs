import React from 'react'

const Ides = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
            2. Integrated Development Environments (IDEs) :-
            </span>
            <div className="flex flex-col gap-2 mt-4">
            <span className=" text-[16px] font-semibold tracking-wide ">(a). Front-end Development Tools :-</span>
            <ul className="list-disc">
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold ">Visual Studio Code (VSCode): </span> VSCode stands out as a lightweight, versatile, and customizable IDE. With a plethora of extensions supporting various languages and frameworks, it has become a staple for front-end developers seeking efficiency.
                  </li>
                  <li className="ml-6 pt-3 leading-6 text-[15px] ">
                    <span className="font-semibold">Sublime Text: </span> Known for its speed and simplicity, Sublime Text is a fast and efficient IDE. The extensive community support and package ecosystem make it a favorite among developers looking for a seamless coding experience.
                  </li>
                 
                </ul>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
            <span className="text-[16px] font-semibold tracking-wide ">(b). Back-end Development Tools :-</span>
            <ul className="list-disc">
                  <li className="ml-6 pt-3 leading-6 text-[15px]">
                    <span className="font-semibold">IntelliJ IDEA: </span> Specialized for Java development, IntelliJ IDEA is a powerhouse with powerful features for code analysis and debugging. It caters to the intricate needs of Java developers, ensuring a smooth development workflow.
                  </li>
                  <li className="ml-6 pt-3 leading-6 text-[15px]">
                    <span className="font-semibold">PyCharm: </span> For Python developers, PyCharm offers advanced coding assistance and project navigation. Its intuitive interface makes it an ideal choice for those diving into Python-centric back-end development.
                  </li>
                 
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Ides
