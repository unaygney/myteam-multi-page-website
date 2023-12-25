import React from "react";

function HomeHero() {
  return (
    <section className="bg-[#014E56] relative pt-8 lg:bg-hero-image-1 lg:bg-left-top bg-no-repeat ">
      <div className="container mx-auto bg-hero-image bg-no-repeat bg-bottom lg:bg-right-bottom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:text-start lg:justify-start items-center gap-4 px-6 md:px-0 text-white text-center pb-[192px] md:pb-[256px] ">
          <h1 className="text-[40px] lg:text-[100px] lg:leading-[100px]  font-bold leading-10 md:max-w-[10ch] ">
            Find the best <span className="text-[#F67E7E]">talent</span>
          </h1>
          <p className="text-[15px] lg:text-lg font-semibold leading-7  md:max-w-[52ch] ">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
