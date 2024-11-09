 import check from "../../public/assests/check.svg"
 import Image from "next/image"
 
 export default function Pricing (){
    return(
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
            Flexible plans for you
            </h1>
            <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
                No hidden fees!</p>

            <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
                <div className="w-full rounded-[8px] hover:bg-green-100 bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">Free Trial</h3>

                        <p className="text-[#36485C] pt-[12px] lg:text-[18px]">Perfect for testing the waters</p>

                        <h2  className="pt-4 font-medium text-2xl lg:text-[32px]">
                            0$ <span className="text-[#5F7896]">/mo</span></h2>

                        <ul className="flex flex-col gap-y-2 pt-4  text-[#5F7896]">
                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark"/></span>
                            Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark"/></span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark"/></span>
                                Consectetur adipiscing elit
                            </li>

                            
                        </ul>
                       
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] hover:bg-gradient-to-tr from-blue-400 to-teal-400 hover:text-white text-[#4328EB] font-medium">Start Trial</button>
                </div>

                {/* card 2 */}

                <div className="w-full rounded-[8px] bg-[#4328EB] hover:bg-gray-800 p-6 flex flex-col ]">
                    <div>
                        <h3 className="text-[#FFFF] font-medium text-[18px] lg:text-xl">Business</h3>

                        <p className="text-[#F4F8FA] pt-[12px] lg:text-[18px]">Perfect for small businesses</p>

                        <h2  className="pt-4 font-medium text-2xl lg:text-[32px] text-[#F4F8FA]">
                            $500 <span className="text-[#F4F8FA]">/mo</span></h2>

                        <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
                            <li className="flex items-center gap-x-2 ">
                                <span><Image src={check} alt="ceckMark"/></span>
                            Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark"/></span>
                                Consectetur adipiscing elit
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark"/></span>
                                Sed do eiusmod tempor incididunt 
                            </li>

                            <li className="flex items-center gap-x-2">
                                <span><Image src={check} alt="ceckMark" className="text-white"/></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-2">
                                <span ><Image src={check} alt="ceckMark"/></span>
                                Consectetur adipiscing elit
                            </li>
                        </ul>
                       
                    </div>
                    <button className="mt-[16px] rounded-[4px] hover:bg-gradient-to-tl from-blue-500 to-white bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
                </div>

                {/* card 3 */}

                <div className="w-full rounded-[8px] hover:bg-green-100 bg-[#f5f4ff] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl">Enterprise</h3>

                        <p className="text-[#36485C] pt-[12px] lg:text-[18px]">Perfect for big companies</p>

                        <h2  className="pt-4 font-medium text-2xl lg:text-[32px]">
                            Custom</h2>
                            <p className="pt-4 text-[16px] text-[#36485C]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                 </p>
                            <p className="pt-2 text-[16px] text-[#36485C]"> 
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                       
                    </div>
                    <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium hover:bg-gradient-to-tr from-blue-400 to-teal-400 hover:text-white">Contact Us</button>
                </div>
            </div>
        </div>
    )
}