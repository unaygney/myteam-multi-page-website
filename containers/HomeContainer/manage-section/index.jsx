import React from "react";
import { CARDS } from "./constant";

function ManageSection() {
  return (
    <section className="bg-[#012F34] bg-manage-section bg-no-repeat bg-right-top lg:bg-right-bottom">
      <div className="container mx-auto px-6 md:px-0 pt-[60px] pb-16">
        <div className="flex flex-col gap-14 text-white lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8">
            <span className="w-[50px] h-1 bg-[#f67e7e] "></span>
            <h3 className="text-[32px]  lg:text-[48px] lg:leading-[48px] font-bold max-w-[12ch] md:max-w-[25ch] lg:max-w-[20ch] ">
              Build & manage distributed teams like no one else.
            </h3>
          </div>
          <div className="flex flex-col gap-12  ">
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="flex flex-col md:flex-row gap-2 md:gap-6 items-center   "
              >
                {card.image}
                <div className="mt-2 flex flex-col gap-2 ">
                  <h5 className=" text-[#f77e7e] text-lg font-bold text-center md:text-start leading-7 ">
                    {card.title}
                  </h5>
                  <p className="text-white text-opacity-80 font-semibold leading-6 text-[15px] text-center md:text-start ">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageSection;
