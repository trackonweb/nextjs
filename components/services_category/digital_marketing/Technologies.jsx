import Image from 'next/image';
import React from 'react';

const technologiesList = [
  {
    id: 1,
    Technology: 'google analytics',
    img: '/download (10).png'
},
{
    id: 20,
    Technology: "google my business",
    img: "/download (5).jpg",
  },
  {
    id: 12,
    Technology: 'open ai chatgpt ',
    img: '/download (18).png'
},
  {
    id: 6,
    Technology: 'Meta ads manager',
    img: '/download (3).jpg'
},
{
    id: 11,
    Technology: 'google tag manager',
    img: '/download (17).png'
},
{
    id: 2,
    Technology: 'google ads',
    img: '/download (11).png'
},
{
    id: 3,
    Technology: 'semrush',
    img: '/download (12).png'
},
{
    id: 4,
    Technology: 'YouTube Studio',
    img: '/images (2).png'
},

{
    id: 5,
    Technology: 'Meta',
    img: '/download (13).png'
},

{
    id: 7,
    Technology: 'sendinblue',
    img: '/images (3).png'
},
{
    id: 8,
    Technology: 'grammarly',
    img: '/download (14).png'
},
{
    id: 9,
    Technology: 'ubersuggest',
    img: '/download (15).png'
},
{
    id: 10,
    Technology: 'html',
    img: '/download (16).png'
},



{
    id: 13,
    Technology: 'moz',
    img: '/download (19).png'
},
{
    id: 14,
    Technology: 'yoast',
    img: '/download (4).jpg'
},
{
    id: 15,
    Technology: 'search console ',
    img: '/download (20).png'
},
{
    id: 16,
    Technology: 'google trends',
    img: '/download (20).png'
},
{
    id: 17,
    Technology: 'mailchimp',
    img: '/download (21).png'
},
{
    id: 18,
    Technology: 'ahrefs',
    img: '/download (22).png'
},
{
    id: 19,
    Technology: 'Canva',
    img: '/download (2).jpg',
  },
{
    id: 20,
    Technology: "Wordpress",
    img: "/wordpress.png",
  },
];

const Technologies = () => {
  return (
    <div className='bg-[#0588b0] text-black '>
    <div className='container mx-auto'>
       
    <div
         className={`flex  flex-col gap-3 justify-center items-center  pt-10 xl:mx-20 lg:mx-10 mx-4`}
       >
         <h3 className="text-white text-center lg:text-[34px] text-[28px] font-[600] tracking-wide">
         Explore Our Digital Marketing Solutions
         </h3>

        
       </div>
       <div  className={`grid gap-5 grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  place-items-center justify-center  xl:mx-20 lg:mx-10 mx-4 pt-10 pb-20 `}>
          {
           technologiesList.map((item,index)=>{
               return  <div key={index} className='bg-white p-[25px] w-[170px] h-[170px] shadow flex flex-col justify-center items-center gap-3 rounded-md'>
               <div>
                   <Image src={item.img} width={70} height={70} alt='' className='object-contain'/>
               </div>
               <span className='text-black capitalize text-center font-medium'>{item.Technology}</span>
           </div>
           })
          }
          
       </div>
    </div>
   </div>
  );
};

export default Technologies;
