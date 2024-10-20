import Image from "next/image"
import BlueArrow from "../../public/assests/blue-button.svg"
import gradiant from "../../public/assests/Gradient.svg"
import HeroImage from "../../public/assests/Image.svg"
import Google from "../../public/assests/Google.svg"
import Slack from "../../public/assests/Slack.svg"
import truspiolot from "../../public/assests/Trustpilot.svg"
import CNN from "../../public/assests/CNN.svg"
import cluth from "../../public/assests/Clutch.svg"

export default function Hero(){
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
            <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">Start monitoring your website like a pro</h1>
            <p className="text-center pt-6 font-medium text-[#36485cn] lg:text-[18px] lg:leading-7">
            Get a bird's eye view with our customizable 
            dashboard. Stay on top of things! Revamp your
             work process with our game-changing feature.
              Boost productivity and efficiency!
            </p>
            <div className="flex w-full pt-8 justify-center gap-x-5">
                <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white
                 rounded-[4px] lg:w-fit">Try for free</button>
                <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">View Pricing <span><Image src={BlueArrow } alt="learn more "/></span></button>
            </div>
            </div>
            <div className="relative flex h-full w-full justify-center"> 
                <Image src={gradiant} alt="gradiant" className="h-[500px] w-full object-cover lg:h-auto"/>

                <div className="absolute bottom-5 flex w-full flex-col items-center ">
                    <Image src={HeroImage} alt="hero" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"/>

                    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 lg:justify-evenly">
                        <p className="text-[#FFFFFF] text-center lg:text-[18px] ">Trusted by these companies</p>
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px[20px] align-middle lg:grid-cols-5">
                            <Image src={Google} alt=""/>
                            <Image src={Slack} alt=""/>
                            <Image src={truspiolot} alt=""/>
                            <Image src={CNN} alt=""/>
                            <Image src={cluth} alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}