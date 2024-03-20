
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import ProductNav from "./components/ProductNav";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <>
      <WhatsApp />
      <Hero />
      <Stats />
      <ProductNav />
      <Testimonial />
      <CTA />
    </>
  )
}
