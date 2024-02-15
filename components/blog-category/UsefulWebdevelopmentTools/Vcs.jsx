import React from 'react'

const Vcs = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className="text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
            3. Version Control Systems (VCS) :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Git: </span>Git, a distributed version control system, plays a pivotal role in tracking changes. With GitHub and GitLab as reliable hosting repositories, Git ensures collaborative and efficient project management.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">SVN (Apache Subversion): </span> For projects with specific requirements, SVN serves as a centralized version control system. Well-suited for intricate project structures, it provides a solid foundation for version control.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Vcs
