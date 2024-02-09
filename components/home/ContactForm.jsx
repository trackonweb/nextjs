import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <section class="bg-white ">
         <div className='mx-auto container'>
         <div class="py-8 lg:py-16 px-4 lg:mx-10 xl:mx-20 mx-4 ">
  <h3 className='text-[#2f327d] text-center lg:text-[34px] text-[28px] font-[700]'>Contact <span className='text-[#0588b0]'>Us</span></h3>
      <p class="mb-8  lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
     <div className='flex flex-col justify-center items-center  lg:flex-row gap-7'>
        <div className='lg:w-1/2 w-full'>
            <Image src='/contact.jpg' width={600} height={600} className='object-contain'/>
        </div>
     <form action="#" class="space-y-8 lg:w-1/2 w-full">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@xyz.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0588b0] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
     </div>
  </div>
         </div>
</section>
    </div>
  )
}

export default ContactForm
