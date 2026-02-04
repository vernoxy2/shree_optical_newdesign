import React from "react";
import WhatSetApartBg from "../../assets/whatSetApartBg.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const WhatSetUsApart = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-7">
      {/* Heading */}
      <PrimaryHeading>What Sets Us Apart</PrimaryHeading>

      {/* Section with Image and Text */}
      <div className="w-full">
            <div  className="w-[65%] ml-auto py-10 bg-[#BBCED4] translate-y-20 z-0 "></div>
        <div className="container pl-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-8  z-20">
          {/* Left Image Block */}
          <div className="w-full z-10">
            <img
            data-aos="fade-up"
              src={WhatSetApartBg}
              alt="What Sets Us Apart"
              className="w-full max-w-[95%] object-cover z-10 border-l-0 border-[14px] border-white rounded-r-full"
            />
          </div>

          {/* Right Content Block */}
          <div className="flex flex-col items-end text-right gap-6 z-10 mt-auto ">
            <h2 data-aos="fade-left" className="text-2xl md:text-4xl 2xl:text-5xl font-kaisei_Decol text-[#06213C] leading-snug">
              See the Difference with <br className="hidden md:block" />{" "}
              Innovation and Care.
            </h2>
            <p data-aos="fade-left" className="text-base md:text-xl 2xl:text-2xl font-kanit text-[#334155] leading-relaxed">
              Advanced digital eye testing, curated eyewear, expert staff,{" "}
              <br className="hidden sm:block" />
              and personalized service make us truly unique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetUsApart;
