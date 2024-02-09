import Refund from "@/components/refund";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={`bg-[#2f327d]  `}>
        <div className="container mx-auto">
          <div className=" flex flex-col  justify-center gap-3 items-start xl:mx-20 lg:mx-10 mx-4 pt-20 pb-4">
            <div className="flex justify-start items-center gap-3">
              <Link
                href={"/"}
                className="text-white lg:text-[20px] text-[16px]"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <span className="text-[#64dfcb] lg:text-[20px] text-[16px]">
                refund-policy
              </span>
            </div>
            <span className="text-white lg:text-[32px] text-[22px] font-semibold tracking-wider ">
              Refund Policy
            </span>
          </div>
        </div>
      </div>
      <Refund />
    </>
  );
}

export function generateMetadata(){
    return {
        title: "Refund Policy – Trackonweb",
        description:
          "This page defines our Refund Policy. By purchasing our products, you implicitly agree to our Privacy Policy and Terms and Conditions.",
       
    }
}
