import Image from "next/image"
import Logo from "../../public/assests/Logo.svg"
import User from "../../public/assests/User.svg"
import Menu from "../../public/assests/Menu.svg"
import Link from "next/link"

const navLinks = [
    {name: "Features"},
    {name:"Pricing"},
    {name: "Enterprise"},
    {name: "Careers"},
]



export default function Navbar (){

    return(
       
            <nav className="flex w-full items-center justify-between py-[16px] px-[20] lg:container lg:mx-auto lg:px-20 ">
                <div className="flex items-center justify-around">
                    <Image src={Logo} alt="Logo"/>

                   
                    <Link href="/">

                    <div className="hidden lg:flex">
                    {navLinks.map((item, index) =>  (
                        <p className="text-[#36485c] font-medium pl-[74px] gap-x-[56px]" key={index}>  {item.name}</p>
                    ))}
                    </div>

                    
                    
                    </Link>
                   
                    
                </div>


                
                <div className=" flex gap-x-7">
                <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]"><Link href="/">Open an Account</Link></p>

                    {/* pforile icon */}
                    <div className="flex items-center gap-x-2">
                        <Image src={User} alt="User Profile"/>


                        <span className="hidden lg:block
                        
                        font-medium text-[#36485c ]"><Link href="/">Sign in</Link></span>
                    </div>

                    {/* menu icon */}
                    <Image src={Menu} alt="Menu button" className="lg:hidden"/>
                </div>
            </nav>
       
    )
}