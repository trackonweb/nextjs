import React from 'react'

const Category = () => {
  return (
    <div className=' xl:mx-20 lg:mx-10 mx-4 pb-10'>
        <div className='container mx-auto'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-items-center'>
        <div className='bg-white shadow-md rounded-md p-5 border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>14+ Basic and Advanced Projects </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Training on Advanced Tools</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Internship Opportunity </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>35+ Assignments </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Recognize Certificate </span>
      </div>
        </div>
        </div>
     
    </div>
  )
}

export default Category
