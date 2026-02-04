import React from "react";
import aboutShopImg from "../../assets/AboutPageImgs/aboutShopImg.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const Shopstory = () => {
  return (
    <div className="py-10  space-y-4 md:space-y-8">
      <PrimaryHeading>Our Shop Story</PrimaryHeading>
      <div className="w-full bg-[#BBCED4]">

      <div data-aos="fade" className="py-10 md:py-20 container grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10">
        <div className="w-full  flex flex-col items-center gap-6 lg:gap-10 xl:py-10">
          <h2 data-aos="fade-right" className="text-2xl md:text-4xl 2xl:text-5xl font-normal text-[#06213C] font-kaisei_Decol text-center lg:text-left">
            Where Clear Vision Meets Passionate Craftsmanship.
          </h2>

          <p data-aos="fade-right" className="text-base md:text-xl xl:text-2xl font-normal text-[#334155] font-kanit text-center lg:text-left leading-normal xl:pr-16">
            From a humble vision to a trusted destination, our journey began
            with a passion for redefining eyewear. Blending style, precision,
            and care, we’ve been helping people see clearly and look
            confidently. Every frame we offer reflects our commitment to
            quality, innovation, and personal service.
          </p>
        </div>

        <img
        data-aos="zoom-in"
          src={aboutShopImg}
          alt="aboutShopImg"
          className=" h-full lg:h-[370px] object-cover "
        />
          </div>
      </div>
    </div>
  );
};

export default Shopstory;
