import React from "react";
import AboutHero from "./about-hero";
import MeetSection from "./meet-section";
import SomeClients from "./some-clients";
import TopFooter from "@/components/TopFooter";

function AboutContainer() {
  return (
    <main>
      <AboutHero />
      <MeetSection />
      <SomeClients />
      <TopFooter />
    </main>
  );
}

export default AboutContainer;
