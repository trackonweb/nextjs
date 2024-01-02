import DemoForm from "../common/DemoForm";


const Enroll = () => {
  
  return (
    <div
      className={`bg-[url('/business-visual-data-analyzing-technology-by-creative-computer-software_31965-47514.jpg')] bg-cover bg-center bg-fixed  `}
    >
      <div className='bg-[rgba(0,0,0,0.56)]'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row gap-6 py-10 xl:px-20 lg:px-10 px-4  w-full'>
           <DemoForm/>
            <div className='flex flex-col gap-5 lg:w-1/2 w-full '>
              <h2 className='text-[32px] text-white font-semibold'>
                Book Your Demo Class Today!
              </h2>
              <span className='text-[16px] text-justify text-white'>
                Start your journey! Join our demo class to experience how our
                our course can accelerate your career growth and open doors to
                exciting opportunities. Don’t miss this chance to elevate your
                skills. Enroll now!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
