import React from 'react'

const Directives = () => {
  return (
    <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
    <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
      6. Directives: use client and use server:-
    </span>
    <span className="  leading-6  text-[15px]  pt-3">
    React 19 introduces experimental directives like use client and use server to mark specific code sections for execution either solely on the client-side or on the server-side during rendering. This enables developers to create hybrid applications that leverage the strengths of both environments, potentially improving performance and flexibility.
    </span>
    </div>
  )
}

export default Directives
