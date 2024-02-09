import React from 'react'

const Category = () => {
  return (
    <div className=' xl:mx-20 lg:mx-10 mx-4 pb-10'>
        <div className='container mx-auto'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-items-center'>
        <div className='bg-white shadow-md rounded-md p-5 border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>15+ Projects and Regular Assessments </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>User-friendly and Dynamic Designs</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Free Internship with a Certificate</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Latest 2024 Tools, Languages and Framework</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Live Projects hands-on under Senior Guidance </span>
      </div>
        </div>
        </div>
     
    </div>
  )
}

export default Category
