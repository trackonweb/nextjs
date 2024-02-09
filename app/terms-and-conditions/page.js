import Terms from "@/components/terms";
import Link from "next/link";
import { FaRegWindowMinimize } from "react-icons/fa";

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
                terms-and-conditions
              </span>
            </div>
            <span className="text-white lg:text-[32px] text-[22px] font-semibold tracking-wider ">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>
      <Terms />
    </>
  );
}


export function generateMetadata(){
    return {
        title: "Terms and Conditions – Trackonweb",
        description:
          "Navigate Trackonweb.com with confidence by understanding our Terms and Conditions. Read our (Terms and Conditions) before you explore!",
       
    }
}
