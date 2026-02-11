import React from "react";
import Brand1 from "../../assets/OurProductsImg/B1.svg";
import Brand2 from "../../assets/OurProductsImg/B2.svg";
import Brand3 from "../../assets/OurProductsImg/B3.svg";
import Brand4 from "../../assets/OurProductsImg/B4.svg";

import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const brands = [Brand1, Brand2, Brand3, Brand4];

const Brand = () => {
  return (
    <section className="py-10 md:py-20 space-y-4 md:space-y-8 container">
      <PrimaryHeading>Brands</PrimaryHeading>

      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-y-10 container">
        {brands.map((brand, idx) => (
          <div
            data-aos="zoom-in"
            key={idx}
            className="flex items-center justify-center"
          >
            <img
              src={brand}
              alt={`Brand ${idx + 1}`}
              className=" object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;