import React from "react";
import { CARDS } from "./constant";

function Form() {
  return (
    <section className="bg-[#014e56]">
      <div className="container mx-auto px-7 md:px-0">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="flex flex-col items-center text-white gap-4 mb-10">
            <h1 className="text-[40px] md:text-[64px md:leading-[56px] font-bold leading-10 ">
              Contact
            </h1>
            <h3 className="text-[32px] font-bold leading-[48px] text-[#f67e7e]">
              Ask us about
            </h3>
            <div className="flex flex-col gap-6">
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="flex gap-6 text-white items-center"
                >
                  <div className=" w-[72px] h-[72px]">{card.image}</div>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div>form</div>
        </div>
      </div>
    </section>
  );
}

export default Form;
