import React from "react";
import PrimaryBtn from "../Primarycompo/PrimaryBtn";
import PrimaryHeading from "../Primarycompo/PrimaryHeading";
import aboutGetQuotebg from "../../assets/AboutPageImgs/aboutGetQuotebg.png";

const GetQuote = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      
      {/* Background Layer (Animated) */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutGetQuotebg})` }}
      ></div>

      {/* Content Layer */}
      <div className="relative container flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="space-y-8 lg:w-1/2 text-center lg:text-left">
          <PrimaryHeading className="lg:text-start py-0">
            Contact Us
          </PrimaryHeading>

          <p data-aos="fade-right" className="text-sm md:text-base lg:text-2xl text-[#334155] font-kanit font-normal leading-relaxed pb-8">
            We’d love to hear from you! Whether you have questions, feedback, or
            inquiries about our services, feel free to reach out using the
            details below. Our team will get back to you as soon as possible.
          </p>

          <PrimaryBtn to={"/contactus"}>Get a Quote</PrimaryBtn>
        </div>

      </div>
    </div>
  );
};

export default GetQuote;
