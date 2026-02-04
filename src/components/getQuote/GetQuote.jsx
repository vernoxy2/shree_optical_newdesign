import React from "react";
import PrimaryBtn from "../Primarycompo/PrimaryBtn";
import PrimaryHeading from "../Primarycompo/PrimaryHeading";

const GetQuote = ({ backgroundImage }) => {
  return (
    <div
      className="py-10 md:py-20 flex flex-col items-center justify-center gap-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container  p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="space-y-6 lg:w-1/2 text-center lg:text-left">
          <PrimaryHeading className="lg:text-start">Contact Us</PrimaryHeading>
          <p
            data-aos="fade-right"
            data-delay="700"
            className="text-sm md:text-base lg:text-2xl text-[#334155] font-kanit font-normal leading-relaxed pb-8"
          >
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
