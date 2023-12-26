import React from "react";
import Link from "next/link";
function TopFooter() {
  return (
    <section className="bg-[#f67e7e] text-[#012f34] bg-top-footer bg-left-bottom bg-no-repeat">
      <div className="container mx-auto px-6 md:px-0 py-[83px]">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center">
          <h4 className="text-center text-[32px] lg:text-[48px] font-bold leading-8 ">
            Ready to get started?
          </h4>
          <Link
            className="inline-flex items-center justify-center w-[153px] h-[48px] rounded-3xl font-semibold  border-[#012f34] border-2"
            href={"/contact"}
          >
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopFooter;
