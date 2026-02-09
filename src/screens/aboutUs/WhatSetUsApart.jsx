import React from "react";
import WhatSetApartBg from "../../assets/whatSetApartBg.svg";
import Qute from "../../assets/AboutPageImgs/Qutte.svg";

const WhatSetUsApart = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Background Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={WhatSetApartBg}
            alt="What Sets Us Apart Background"
            className="w-full max-w-sm lg:max-w-full object-contain"
          />
        </div>

        {/* Content Box */}
        <div className="bg-primary text-white rounded-2xl w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 space-y-6 relative">
          <div>
            <h1 className="font-kaisei_Decol text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light">
              What Sets Us Apart
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl font-kaisei_Decol mt-2">
              See the Difference with Innovation and Care.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl xl:text-2xl font-kanit">
            Advanced digital eye testing, curated eyewear, expert staff, and
            personalized service make us truly unique.
          </p>

          <div className="flex justify-end mt-4">
            <img src={Qute} alt="Quote Icon" className="h-10 sm:h-12 md:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetUsApart;
