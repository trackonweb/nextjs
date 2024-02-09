
'use client'
import Image from "next/image";
import NOTFound from '../public/Ilustration.svg'
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function NotFound(){
    const router = useRouter();

    const handleButton = ()=>{
        router.push('/')
    }
    return(
        <>
        <div className=" lg:h-screen h-full pt-20 ">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-5 xl:mx-20 lg:mx-10 mx-4">
                    <div className="lg:w-1/2 w-full flex flex-col lg:justify-start lg:items-start justify-center items-center">
                    <h1 className="lg:text-[36px] text-[26px] font-[700] text-start">Oops....</h1>
                    <h5 className="text-[20px] font-medium text-start py-2">Page not found</h5>
                    <p className="text-[16px] text-center lg:text-start">This Page doesn't exist or was removed!<br/> We suggest you back to home</p>
                    <button onClick={handleButton} className="bg-[#0588b0] hover:bg-[#64dfcb] duration-500 rounded-md text-white uppercase px-7 py-4 font-medium text-[16px] tracking-wider my-5 flex justify-center items-center gap-2"><FaArrowLeft/>Back to home</button>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center items-center">
                        <Image src={NOTFound} alt="page not found" objectFit="contain"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}