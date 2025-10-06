import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import ContactUs from "@/components/Contact";
import FinancialSolutions from "@/components/FinancialSolutions";
import InvestmentOptions from "@/components/InvestmentOptions";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonial";
import CalculatorSection from "@/components/CalculatorSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Stats/>
      <FinancialSolutions/>
      <InvestmentOptions/>
      <CalculatorSection/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      
      
    </>
      )
}
