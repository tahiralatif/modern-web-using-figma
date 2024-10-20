import Image from "next/image"

import Feature1 from "../../public/assests/feature-1.svg"
import Feature2 from "../../public/assests/feature-2.svg"
import Feature3 from "../../public/assests/feature-3.svg"
import check from "../../public/assests/check.svg"
import bluebutton from "../../public/assests/blue-button.svg"
import greenbutton from "../../public/assests/green-button.svg"
import pinkbutton from "../../public/assests/pink-button.svg"



export default function Features(){
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-20">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt="image 1" className="hidden w-1/2 sm:block"/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium lg:text-[18px] text-[#0085FF]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px] text-[#172026]">
                        Simplify your sales monitoring                       
                    </h1>
                    <Image src={Feature1} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
                    <p className="py-6 text-[#334357] text-[18px]">Stay on top of things and revamp your work process with our game-changing feature. 
                        Get a bird's eye view with our customizable dashboard. </p>
                        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Lorem ipsum dolor sit amet
                            </li>

                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Consectetur adipiscing elit
                            </li>

                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Sed do eiusmod tempor incididunt ut labore 
                            </li>

                        </ul>
                        <p className="flex items-center gap-x-2 pt-6 font-medium text-[#0085FF] lg:text-[18px]">
                            Learn More  <span>
                            <Image src={bluebutton} alt="Learn More"/>
                            </span></p>
                </div>

            </div>


            <div className="flex flex-col gap-x-6 sm:flex-row">

                <Image src={Feature2} alt="image 1" className="hidden w-1/2 sm:block"/>

                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">

                    <h3 className="font-medium lg:text-[18px] text-[#00A424]">Customer Support</h3>

                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px] text-[#172026]">
                    Get in touch with your customers                     
                    </h1>
                    <Image src={Feature2} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
                    <p className="py-6 text-[#334357] text-[18px]">Stay on top of things and revamp your work process with our game-changing 
                        feature. Get a bird's eye view with our customizable dashboard.  </p>
                        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Lorem ipsum dolor sit amet
                            </li>

                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Consectetur adipiscing elit
                            </li>

                            <li className="flex items-center gap-x-2 text-[#36485C]">
                            <span>
                            <Image src={check} alt="checkmark"/>
                            </span>
                            Sed do eiusmod tempor incididunt ut labore 
                            </li>

                        </ul>
                        <p className="flex items-center gap-x-2 pt-6 font-medium text-[#00A424] lg:text-[18px]">
                        Learn More  <span>
                            <Image src={greenbutton} alt="Learn More"/>
                            </span></p>
                </div>

            </div>
            {/* feature 3 ...... */}
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt="image 1" className="hidden w-1/2 sm:block"/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium lg:text-[18px] text-[#EB2891]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px] text-[#172026]">
                    Monitor your site’s new subscribers                       
                    </h1>
                    <Image src={Feature3} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
                    <p className="py-6 text-[#334357] text-[18px]">Stay on top of things and revamp your work process with our game-changing feature. 
                        Get a bird's eye view with our customizable dashboard. </p>



                        <div className="flex w-full gap-x-[24px]  text-[#172026]">
                            <div className="w-1/2 flex flex-col gap-y-3">
                               <h3 className="text-[20px] font-medium">100+</h3>
                               <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
                            </div>
                            <div className="w-1/2 flex flex-col gap-y-3 ">
                                <h3 className="text-[20px] font-medium">800+</h3>
                                <p className="text-[#36485c]">Conse adipiscing elit</p>
                            </div>

                        </div>
                        <p className="flex items-center gap-x-2 pt-6 font-medium text-[#EB2891] lg:text-[18px]">
                            Learn More  <span>
                            <Image src={pinkbutton} alt="Learn More"/>
                            </span></p>
                </div>

            </div>


            
        </div>
    )
}