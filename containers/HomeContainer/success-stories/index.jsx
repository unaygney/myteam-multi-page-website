import React from "react";
import { CARDS } from "./constant";
import Image from "next/image";

function SuccessStories() {
  return (
    <section className="bg-[#004047] bg-hero-image-3 bg-left-top bg-no-repeat">
      <div className="w-full h-full bg-hero-image-4 bg-no-repeat bg-right-bottom">
        <div className="container mx-auto flex flex-col lg:items-center gap-12 lg:gap-14 py-[120px] lg:py-[140px] px-6 md:px-0 text-white">
          <div>
            <h3 className="text-white text-[32px] lg:text-[48px] font-bold leading-8 text-center lg:leading-[48px] lg:max-w-[30ch] ">
              Delivering real results for top componies. Some of out &nbsp;
              <span className="text-[#79c8c7] ">success stories.</span>
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-center gap-4 text-center bg-quotes bg-top bg-no-repeat pt-9 lg:flex-1 "
              >
                <p className="text-[15px] font-semibold leading-6 ">
                  {card.content}
                </p>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[#79c8c7] text-lg font-bold leading-7">
                    {card.author}
                  </h3>
                  <h6 className="text-[13px] italic font-medium leading-[18px]">
                    {card.title}
                  </h6>
                </div>
                <div className="relative w-[62px] h-[62px] ">
                  <Image
                    src={card.image}
                    alt={` ${card.author} image's`}
                    fill
                    className="rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
