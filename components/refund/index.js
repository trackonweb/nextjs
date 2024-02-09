import React from "react";

const Refund = () => {
  return (
    <div className="bg-slate-100 py-8">
      <div className="container mx-auto">
        <div className="bg-white flex flex-col justify-center items-start gap-3 lg:px-16 p-4 lg:mx-10 xl:mx-20 mx-4 ">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-[14px] font-formal leading-5 text-justify ">
              Thank you for choosing our courses or services. We strive to
              provide a rewarding experience for users as they explore,
              evaluate, and purchase our courses or services, whether through
              instructor-led or self-paced training. As with any online
              purchase, certain terms and conditions govern our Refund Policy.
              By making a purchase, you agree to adhere to our Privacy Policy,
              Terms of Use, and Refund Policy.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <h5 className="text-[15px] font-bold ">
              CANCELLATION AND REFUNDS: ONLINE/OFFLINE CLASSROOM LEARNING
            </h5>
            <p className="text-[14px] font-formal leading-5 text-justify ">
              Trackonweb reserves the right to postpone or cancel an event due
              to instructor illness or force majeure events (such as floods,
              earthquakes, political instability, pandemic situations like
              COVID-19, etc.).
            </p>
            <ul className="px-4 list-disc">
              <li className="text-[14px] font-formal leading-5 text-justify ">
                Refund requests will not be accepted if you have attended
                online/offline classroom training for more than three days or
                have accessed/downloaded course material from the learning
                portal.{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                No refund will be provided for discounted courses.{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                If the delegate fails to attend the scheduled sessions, no
                refund will be provided{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                In case of a refund, the tax amount will not be included
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                If learners wish to re-attend the online/offline instructor-led
                classes for the purchased course and if there is no availability
                of the batch shortly, the maximum refund applicable will be 10%
                of the total amount paid.{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                No refund will be provided, and access will be revoked if the
                course is found to be shared with others or accessed by multiple
                users, or if the course purchase intention is to copy the
                material/content. The account will be blocked immediately.{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                Note: All refunds will be processed within 30 working days, post
                review and approval of any such request.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <h5 className="text-[15px] font-bold ">
              CANCELLATION AND REFUNDS: SERVICES
            </h5>
            <ul className="px-4 list-disc">
              <li className="text-[14px] font-formal leading-5 text-justify ">
                As per our policy, charges are applied on a monthly or quarterly
                basis for providing services. In the event of discontinuation of
                services by the client or us, no refund will be provided by
                Trackonweb.{" "}
              </li>
              <li className="text-[14px] font-formal leading-5 text-justify">
                The company is not liable for any changes in the client’s loss,
                including errors, omissions, loss, or damage via products,
                services, or resources.{" "}
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
        <h5 className='text-[15px] font-bold '>For refund or queries</h5>
                <p className='text-[14px] font-formal leading-5 text-justify '>For refund or queries mail us on <span className="font-bold">info@trackonweb.com</span></p>
                <p className='text-[14px] font-formal leading-5 text-justify '> <span className="font-bold">Please Note – </span>Any dispute, difference, or question arising between the parties or any person claiming under them, related to or arising out of this agreement or its subject matter, shall be referred to a sole arbitrator by the first party. The arbitrator's award shall be final and binding on the parties. The venue of arbitration will be Jaipur (Rajasthan). All disputes shall be subject to the jurisdiction of the Courts of <span className="font-bold">Jaipur (Rajasthan)</span>, India</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Refund;
