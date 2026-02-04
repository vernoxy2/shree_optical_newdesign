import React from "react";
import PrimaryBtn from "../Primarycompo/PrimaryBtn";
import Navbar from "../Navbar/Navbar";

const Header = ({
  backgroundImage,
  headingText,
  description,
  buttonText,
}) => {
  return (
    <section className="m-4 md:m-5">
      <Navbar />
      <div
      
      className="w-full bg-cover bg-center py-52 md:py-72 flex items-center justify-center rounded-3xl "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div  data-aos="fade-up"  className="sm:container h-full flex flex-col md:flex-row  justify-center lg:justify-between items-center">
        {/* Left Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#06213C] font-kaisei_Decol font-normal leading-tight">
            {headingText}
          </h1>

            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#06213C] font-kanit leading-relaxed w-2/3">
              {description}
            </p>

            {buttonText && (
              <div className="mt-2">
                <PrimaryBtn to="/contactus">{buttonText}</PrimaryBtn>
              </div>
            )}
          </div>

          {/* Right Section (Optional image or future content) */}
          <div className="hidden md:block w-[40%]">{/* Add optional image or content */}</div>
        </div>
      </div>
    </section>
  );
};

export default Header;
