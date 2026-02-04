import React, { useState } from "react";
import lensesBg from "../../assets/lensesBg.png";
import lensImg1 from "../../assets/lensImg1.png";
import lensImg2 from "../../assets/lensImg2.png";
import lensImg3 from "../../assets/lensImg3.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";
import { Link } from "react-router-dom";

const Lenses = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const lensImages = [lensImg1, lensImg2, lensImg3];

  return (
    <div
      className="py-10 md:py-20 space-y-4 md:space-y-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${lensesBg})`, minHeight: "500px" }}
    >
      <PrimaryHeading>Lenses</PrimaryHeading>

      <div data-aos="fade" className="container pr-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-y-20 gap-x-20">
        {/* Left Text Content */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-6 xl:gap-10">
          <h2  data-aos="fade-right" className="text-2xl md:text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol">
            Eyeglass lens options include various types
          </h2>
          <p data-aos="fade-right" className="text-xs md:text-xl xl:text-2xl text-[#334155] leading-relaxed font-kanit">
            Explore our wide range of high-quality lenses, including contact
            lenses, anti-reflective, photochromic, and blue light protection —
            designed to enhance vision clarity, comfort, and everyday eye
            protection.
          </p>
          <Link
            to="/products"
            className="text-sm md:text-base xl:text-2xl text-[#06213c] font-kanit font-semibold hover:underline"
          >
            Click Hear For more option
          </Link>
          <PrimaryBtn>More products</PrimaryBtn>
        </div>

        {/* Right Image Animation */}
        <div className="w-full flex items-center justify-center px-4">
          <div className="flex gap-4  max-md:gap-6">
            {lensImages.map((img, idx) => {
              const isHovered = hoveredIndex === idx;
              const isDefaultMiddle = hoveredIndex === null && idx === 1;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  
                  className={`
                    transition-all duration-500 ease-in-out
                    ${isHovered || isDefaultMiddle ? "scale-[1.3] z-[2]" : "scale-100 z-[0] blur-sm"}
                  `}
                  style={{ filter: "blur(1)", willChange: "transform" }}
                >
                  <img
                    src={img}
                    alt={`Lens ${idx + 1}`}
                    className="sm:h-[140px] md:h-[160px] lg:h-[190px] w-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lenses;
