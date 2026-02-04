import React from 'react';
import sunglassesSectionImg from '../../assets/sunglassesSectionImg.png';
import sunglassBlackImg from '../../assets/sunglassBlackImg.png';
import PrimaryHeading from '../../components/Primarycompo/PrimaryHeading';
import PrimaryBtn from '../../components/Primarycompo/PrimaryBtn';

const Sunglasses = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
    <PrimaryHeading>Our Sunglasses</PrimaryHeading>

      <div data-aos="fade" className="container  grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8">
        {/* Left Image Section */}
        <div className="mx-auto xl:mr-auto ">
          <img
          data-aos="zoom-in"  
            src={sunglassesSectionImg}
            alt="Showcasing sunglasses"
            className="w-[80%] -mt-12 mx-auto xl:ml-0"
          />
        </div>

        {/* Text + CTA + Image Section */}
        <div className="flex flex-col items-center justify-center lg:items-end gap-4 sm:gap-8 text-center lg:text-right leading-tight">
          <h2  data-aos="fade-left"  className="text-2xl md:text-4xl 2xl:text-5xl text-[#06213c] font-kaisei_Decol font-bold">
            See Style Clearly – Where Fashion Meets Function.
          </h2>

          <p data-aos="fade-left" className="text-xs md:text-xl xl:text-2xl  text-[#334155] font-semibold leading-tight">
            Elevate your style while protecting your eyes with our premium
            sunglasses collection. Featuring polarized, UV-protected, and
            fashion-forward designs, our shades offer comfort, clarity, and
            confidence for every occasion.
          </p>

          
          <PrimaryBtn to="/products">More Products</PrimaryBtn>

          <img
          data-aos="fade-down-left"
            src={sunglassBlackImg}
            alt="Black sunglasses"
            className="w-[60%] object-cover hidden lg:block mr-auto -translate-y-16 -mb-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Sunglasses;
