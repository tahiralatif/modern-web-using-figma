import Image from "next/image"
import arrow from "../../public/assests/arrow.png"

export default function Cta(){
    return(
        <>
        <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] 
        px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[89px]">Monitor your website like a pro</h1>

            <p className="text-white pt-6 lg:pt-[48px] text-[20px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>

            {/* Buttons */}
            <div className="mt-[40px] flex flex-col w-full items-center  lg:mt-[56px] lg:flex-row lg:justify-center lg:gap-x-[40px]">
                <button className="py-[16px] px-[32px] hover:bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:text-white bg-white rounded-[4px] text-pink-500 w-fit lg:font-medium">
                    Try for free</button>
                <button className="flex  justify-center items-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0 lg:font-medium">
                   Contact Sales <span><Image src={arrow} alt=" learn more"/></span></button>
            </div>

             </div></>
    );
};