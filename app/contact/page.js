import Contact from "@/components/contact/Contact";
import Map from "@/components/contact/Map";
import Link from "next/link"
import { FaRegWindowMinimize } from "react-icons/fa";
export default function Page(){
    return(
        <>
        <div
        className={`bg-[url('/finger-pressing-social-network-button-touch-screen_1112-489.avif')] bg-cover bg-center lg:bg-fixed `}
      >
        <div className="bg-[rgba(0,0,0,0.56)]">
          <div className="container mx-auto">
            <div className=" flex flex-col  justify-center items-center xl:mx-20 lg:mx-10 mx-4 pt-28 pb-10 ">
              <span className="text-white lg:text-[40px] text-[26px] text-center  font-bold tracking-wider ">
              Connect with Us: Let's Shape the Future Together!
              </span>
              <div className="flex justify-start items-center gap-4 py-5">
                <Link
                  href={"/"}
                  className="text-white lg:text-[20px] text-[16px]"
                >
                  Home
                </Link>
                <span className="text-white font-bold">/</span>
                <span className="text-teal-400 lg:text-[20px] text-[16px]">
                  contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Contact/>
        <Map/>
       
        </>
    )
}