
import Image from "next/image"
import logo from "../../public/assests/Logo.svg"
import  Facebook  from "../../public/assests/Facebook.svg"
import  Twitter  from "../../public/assests/X.svg"
import  Feed  from "../../public/assests/Feed.svg"
import Link from "next/link"

export default function Footer(){
    return(
        <>
        <div className="pt-[60px] pb-[40px]">
            <div className="flex justify-center items-center gap-x-[12px]">
                <Image src={logo} alt="logo"/>
                <h3 className="text-[#36485C] font-bold text-[17px]">Tahira Rajput</h3>
                
            </div>
            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[36485C] sm:flex-row 
            sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
                
            </ul>
            <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">© Copyright 2024. Your Site. All rights reserved.</p>

            <div className="flex items-center justify-center  gap-x-[56px] pt-[40px] ">
                <Image src={Facebook} alt="Facebook"/>
                <Image src={Twitter} alt="Twitter "/>
                <Image src={Feed} alt="Feed"/>
            </div>
        </div>
        </>
    )
}