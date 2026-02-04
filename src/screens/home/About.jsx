import React from "react";
import aboutSectionBg from "../../assets/aboutSectionBg.png";
import aboutSectionSpeck from "../../assets/aboutSectionSpeck.png";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const About = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      {/* Heading */}
      <PrimaryHeading>About Us</PrimaryHeading>

      {/* Main Container */}
      <div  data-aos="fade-up" className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-y-14 ">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-8 xl:gap-12 text-center md:text-start order-2 lg:order-1">
          {/* Subheading */}
          <h2  data-aos="fade-right"  className="text-xl sm:text-2xl md:text-4xl 2xl:5xl text-[#06213c] font-kaisei_Decol font-bold leading-loose">
            We see the world through a <br className="" />
            sharper lens — Shree Opticals.
          </h2>

          {/* Description */}
          <p data-aos="fade-right" className="text-xs md:text-xl 2xl:text-2xl text-[#334155] font-semibold leading-tight">
            With over <span className="font-bold">Shree Opticals</span> of expertise in the optical industry, we’re committed
            to delivering premium vision care and stylish eyewear solutions.
            Whether you're looking for prescription glasses, trendy sunglasses,
            or the latest in contact lens technology, we bring you the perfect
            blend of fashion, function, and eye health.
          </p>

          {/* CTA Button */}
          <PrimaryBtn to="/contactus">Learn More</PrimaryBtn>
        </div>

        {/* Right Image Block */}
        <div className="order-1 lg:order-2 flex justify-center relative w-full h-full">
          {/* Background */}
          <img
          data-aos="zoom-out"
            src={aboutSectionBg}
            alt="About Section Background"
            className="object-contain max-w-full m-auto h-[80%] sm:translate-x-28 2xl:translate-x-44"
          />
          {/* Optional foreground speck layer */}
          <img
          data-aos="fade-left" 
            src={aboutSectionSpeck}
            alt="Glasses Illustration"
            className="absolute -bottom-5 sm:-bottom-10 -left-10 w-[80%] m-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
