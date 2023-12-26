import React from "react";
import HomeHero from "./home-hero";
import ManageSection from "./manage-section";
import SuccessStories from "./success-stories";
import TopFooter from "@/components/TopFooter";
function HomeContainer() {
  return (
    <main>
      <HomeHero />
      <ManageSection />
      <SuccessStories />
      <TopFooter />
    </main>
  );
}

export default HomeContainer;
