import React from "react";
import Image from "next/image";
import ButtonPlus from "./button-image-1.svg";
import ButtonClose from "./button-image-2.svg";

function Card({ card }) {
  return (
    <div className="w-full md:w-[49%] lg:w-[32%]   bg-[#012f34] flex flex-col items-center py-8  gap-4 relative md:mb-[76px]">
      <div className="relative w-24 h-24 border-2 border-[#79C8C7] rounded-full">
        <Image
          src={card.image}
          alt="example"
          fill
          placeholder="blur"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col mb-4">
        <h3 className="text-[#79c8c7] text-lg font-bold leading-7">
          {card.name}
        </h3>
        <h4 className="text-[15px] font-medium leading-[25px] italic">
          {card.title}
        </h4>
      </div>

      <button className="absolute bottom-0 left-1/2 inline-flex items-center justify-center -translate-x-1/2  translate-y-1/2 cursor-pointerw">
        <ButtonPlus />
      </button>
    </div>
  );
}

export default Card;
