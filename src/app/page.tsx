
import Hero from "./components/Hero";
import ProductNav from "./components/ProductNav";
import Stats from "./components/Stats";
import Testimonial from "./components/Faq";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductNav />
      <AboutUs />
      <Testimonial />
    </>
  )
}
