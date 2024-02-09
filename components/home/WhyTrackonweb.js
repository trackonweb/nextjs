import Image from 'next/image';
import React from 'react'
import Why from '../../public/why.png'


const list = [
  {
    id: 1,
    title: 'Your Success, Our Goal',
    description: `At Trackonweb, your success is not just a goal, it's our unwavering commitment. We dedicate ourselves to ensuring that every step of our collaboration is geared towards achieving and exceeding your business objectives.`,
  },
  {
    id: 2,
    title: 'Innovation Partners',
    description: `: Beyond being a service provider, we're your innovation partners in the digital realm. Let's join forces to enhance your digital presence and position your business for lasting success.`,
  },
  {
    id: 3,
    title: 'Customized Solutions',
    description: ': Embrace unique solutions tailored to your business. Our team meticulously crafts solutions aligned with your specific needs, ensuring an approach that resonates with your goals.',
  },
  {
    id: 4,
    title: 'Navigators of Digital Transformation',
    description: 'Dive into the era of digital transformation with confidence. Our expert team will guide you through the intricacies of modernization, unlocking fresh opportunities and efficiencies for your business.',
  },
  {
    id: 5,
    title: 'Customer-Focused Commitment',
    description: 'Your success is at the forefront of our commitment. Trackonweb maintains a customer-centric approach, fostering open communication and collaboration throughout our partnership, prioritizing your satisfaction.',
  },
]

const WhyTrackonweb = () => {
  return (
    <div className='bg-[#0588b0] py-10 '>
    <div className='container mx-auto'>
     <div className='flex flex-col lg:flex-row justify-center lg:items-start items-center xl:mx-20 lg:mx-10 mx-4  gap-8'>
        <div className='lg:w-1/2 w-full'>
            <Image src={Why}  alt='why trackonweb' objectFit='contain'/>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-3">
            <h3 className='text-white text-[34px] font-[700]'>Why <span className='text-white '>Trackonweb</span></h3>
            
           {
            list.map((item,index)=>{
              return<div key={index}>
              <span className='text-[16px] font-medium text-gray-200'>{item.title}: <span className='text-[14px] font-normal'>{item.description}</span> </span>
              
            </div>
            })
           }
           
            
        </div>
     </div>
    </div>
    </div>
  )
}

export default WhyTrackonweb
