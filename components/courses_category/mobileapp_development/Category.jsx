import React from 'react'

const Category = () => {
  return (
    <div className=' xl:mx-20 lg:mx-10 mx-4 pb-10'>
        <div className='container mx-auto'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-items-center'>
        <div className='bg-white shadow-md rounded-md p-5 border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Android App Development</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Cross-Platform Development </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Native App Development</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>App Testing, Debugging and Security</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Application Optimization and Maintenance</span>
      </div>
        </div>
        </div>
     
    </div>
  )
}

export default Category
