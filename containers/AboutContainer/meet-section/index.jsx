import React from "react";
import { CARDS } from "./constant";
import Card from "@/components/Card";
function MeetSection() {
  return (
    <section className="bg-[#004047] bg-cards-1 bg-no-repeat bg-left-top">
      <div className="w-full h-full bg-cards-2 bg-no-repeat bg-right-bottom ">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-col items-center pt-[88px] pb-[116px] gap-12 md:gap-16 text-white text-center">
            <h3 className="text-[32px] lg:text-[48px]  font-bold leading-8">
              Meet the directors
            </h3>
            <div className="w-full flex flex-col gap-[52px] flex-wrap md:flex-row md:gap-0  md:justify-between  ">
              {CARDS.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetSection;
