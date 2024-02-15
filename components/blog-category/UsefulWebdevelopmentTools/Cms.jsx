import React from 'react'

const Cms = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
            9. Content Management Systems (CMS) :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">WordPress: </span>WordPress, a user-friendly and widely used CMS, provides extensive themes and plugins for customization. It remains a top choice for various website development projects.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">Drupal: </span>As a powerful and flexible CMS, Drupal is suitable for complex and scalable websites. Its robust features make it a preferred option for developers seeking versatility.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Cms
