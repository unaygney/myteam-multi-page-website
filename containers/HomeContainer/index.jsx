import React from "react";
import HomeHero from "./home-hero";
import ManageSection from "./manage-section";
import SuccessStories from "./success-stories";
function HomeContainer() {
  return (
    <main>
      <HomeHero />
      <ManageSection />
      <SuccessStories />
    </main>
  );
}

export default HomeContainer;
