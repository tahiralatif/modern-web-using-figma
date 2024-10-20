import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import  Features  from "@/components/Features";
import Faq from "@/components/Faq";
import Pricing from "@/components/pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home(){
  return(
   <>
   <Navbar/>
   <Hero />
   <div className="px-[20px] lg:container lg:px-20 mx-auto">
    <Features/>
    <Faq/>
    <Pricing/>
    <Cta/>
    <Footer/>
    </div>
   </>)
}