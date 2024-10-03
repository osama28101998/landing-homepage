import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Testimonials from "./components/testimonials";
import FAQSection from "./components/faqsection";
import CallToAction from "./components/calltoaction";

export default function Home() {
  return (
    <div className="bg-[#14121F] ">
      <Hero />
      <Feature />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </div>
  );
}
