import React from 'react'

const Category = () => {
  return (
    <div className=' xl:mx-20 lg:mx-10 mx-4 pb-10'>
        <div className='container mx-auto'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-items-center'>
        <div className='bg-white shadow-md rounded-md p-5 border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Live Projects and Industry Exposure</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Study Material and Regular Assessments</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>Free Internship with 24x7 Support</span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>4 Months of Continuous learning </span>
      </div>
      <div className='bg-white shadow-md p-5  border-l-8 border-l-cyan-600 w-full'>
     <span className='font-medium text-base'>20+ Industry Projects and Case Studies</span>
      </div>
        </div>
        </div>
     
    </div>
  )
}

export default Category
