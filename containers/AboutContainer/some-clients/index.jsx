import Image from "next/image";
import React from "react";
import { CLIENTS } from "./constant";

function SomeClients() {
  return (
    <section className="bg-[#012f34] bg-client-1 md:bg-client-2 bg-left-top bg-no-repeat ">
      <div className="container mx-auto">
        <div className="flex flex-col py-[88px] gap-14  items-center">
          <h3 className="text-white text-[32px] lg:text-[48px]  leading-[32px] font-bold">
            Some of out clients
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-16">
            {CLIENTS.map((client) => (
              <Image
                src={client.image}
                alt="company logo"
                placeholder="blur"
                width={client.width}
                height={client.height}
                key={client.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SomeClients;
