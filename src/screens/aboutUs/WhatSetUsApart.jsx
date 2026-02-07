import React from "react";
import WhatSetApartBg from "../../assets/whatSetApartBg.svg";
import comma from "../../assets/AboutPageImgs/commaa.svg";

const WhatSetUsApart = () => {
  return (
    <div className="py-10 md:py-20 ">
      <div className="container flex items-center">
        <img src={WhatSetApartBg} alt="" className="" />
        <div className="bg-primary text-white py-10 pb-3 px-24 pe-5 h-fit rounded-2xl w-[120%] space-y-7  ">
          <div>
            <h1 className="font-kaisei_Decol text-2xl md:text-4xl 2xl:text-5xl font-light">
              What Sets Us Apart
            </h1>
            <p className="md:text-lg xl:text-2xl font-kaisei_Decol pt-2">
              See the Difference with Innovation and Care.
            </p>
          </div>
          <p className="md:text-lg xl:text-2xl font-kanit">
            Advanced digital eye testing, curated eyewear, expert staff, and
            personalized service make us truly unique.
          </p>
          <div className="-my-6 flex justify-end ">
            <img src={comma} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSetUsApart;
