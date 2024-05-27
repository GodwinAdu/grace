import AboutSectionOne from "@/components/about/AboutSectionOne";
import AboutSectionTwo from "@/components/about/AboutSectionTwo";
import Brands from "@/components/brands/Brands";
import ChurchServices from "@/components/church/ChurchService";
import ScrollUp from "@/components/commons/ScrollUp";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Video from "@/components/video/Video";


export default function Home() {
  return (
    <>
     
      <Hero />
      <Features />
      <ChurchServices />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
