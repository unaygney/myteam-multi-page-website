import React from "react";

function AboutHero() {
  return (
    <section className="bg-[#014E56] bg-about-hero-1 bg-no-repeat bg-right-bottom">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col lg:gap-[150px] lg:flex-row gap-4 text-white text-center pt-8 pb-[108px] lg:pb-[120px] items-center lg:items-start ">
          <h1 className="text-[40px] md:text-[64px] md:leading-[56px] lg:leading-[100px]  leading-10 font-bold ">
            About
          </h1>
          <div className="flex flex-col gap-10 justify-between  ">
            <span className="w-[50px] h-1 bg-[#f67e7e] hidden lg:block "></span>
            <p className="text-[15px] lg:text-lg  font-semibold leading-7 lg:text-start ">
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
