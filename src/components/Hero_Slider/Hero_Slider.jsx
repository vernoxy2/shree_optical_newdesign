import React, { useState, useEffect } from "react";
import Slider from "../../assets/HomePageImgs/Slider1.png";
import Slider2 from "../../assets/HomePageImgs/Slider2.png";
import PrimaryBtn from "../Primarycompo/PrimaryBtn";

const SliderData = [
  {
    id: 1,
    image: Slider,
    maintext: "Eye lens for woman",
    subtext:
      "Stylish and protective sunglasses for women, designed to elevate your everyday look with confidence.",
  },
  {
    id: 2,
    image: Slider2,
    maintext: "Eye lens for man",
    subtext:
      "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence.",
  },
  {
    id: 3,
    image: Slider,
    maintext: "Eye lens for woman",
    subtext:
      "Stylish and protective sunglasses for women, designed to elevate your everyday look with confidence.",
  },
];

const Hero_Slider = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === SliderData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[220px] sm:h-[400px] lg:h-[500px] overflow-hidden">

      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SliderData.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">

            {/* Background Image */}
            <img
              src={slide.image}
              alt="slider"
              className="w-full h-full object-cover object-right"
            />

            {/* Dark Overlay for mobile readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text Section */}
            <section className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 text-white font-kaisei_Decol container">

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {slide.maintext}
              </h2>

              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-xl max-w-56 sm:max-w-md lg:max-w-xl">
                {slide.subtext}
              </p>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <PrimaryBtn to="/contactus">
                  Visit Now
                </PrimaryBtn>
              </div>

            </section>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero_Slider;
