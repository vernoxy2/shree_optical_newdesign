import React from "react";
import aboutShopImg from "../../assets/AboutPageImgs/aboutShopImg.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Qute from "../../assets/AboutPageImgs/Qute.svg";

const Shopstory = () => {
  return (
    <section className="container pt-36">
      <div className="w-full bg-primary ">
        <div
          data-aos="fade"
          className="  grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10"
        >
          <div className="w-full px-14 flex flex-col  gap-4 lg:gap-8 xl:py-10">
            <h2
              data-aos="fade-right"
              className="text-2xl md:text-4xl 2xl:text-5xl font-normal text-white font-kaisei_Decol text-center lg:text-left"
            >
              Our Shop Story
            </h2>

            <p
              data-aos="fade-right"
              className="text-base md:text-xl xl:text-2xl font-normal text-white font-kanit text-center lg:text-left leading-normal xl:pr-16"
            >
              From a humble vision to a trusted destination, our journey began
              with a passion for redefining eyewear. Blending style, precision,
              and care, we’ve been helping people see clearly and look
              confidently. Every frame we offer reflects our commitment to
              quality, innovation, and personal service.
            </p>

            <hr className="border-2 border-white rounded-full w-40" />

            <div className="-my-6 flex justify-end ">
              <img src={comma} alt="" />
            </div>
          </div>

          <img
            data-aos="zoom-in"
            src={aboutShopImg}
            alt="aboutShopImg"
            className=" h-full w-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Shopstory;
