import AboutSectionOne from "@/components/about/AboutSectionOne";
import AboutSectionTwo from "@/components/about/AboutSectionTwo";
import Brands from "@/components/brands/Brands";
import ChurchServices from "@/components/church/ChurchService";
import ScrollUp from "@/components/commons/ScrollUp";
import Contact from "@/components/contact/Contact";
import EventBanner from "@/components/event/EventBanner";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Video from "@/components/video/Video";
import { fetchEvents } from "@/lib/actions/event.actions";


export default async function Home() {
  const events = await fetchEvents();
  const event = events[0]
  return (
    <>

      <Hero />
      {event &&   <EventBanner event={event} />}
      <Features />
      <ChurchServices />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
