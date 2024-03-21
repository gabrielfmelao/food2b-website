
import Hero from "./components/Hero";
import ProductNav from "./components/ProductNav";
import Stats from "./components/Stats";
import Testimonial from "./components/Faq";
import WhatsApp from "./components/WhatsApp";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <WhatsApp />
      <Hero />
      <Stats />
      <ProductNav />
      <AboutUs />
      <Testimonial />
    </>
  )
}
