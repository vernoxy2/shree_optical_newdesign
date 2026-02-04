import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import cateye from "../../assets/HomePageImgs/Eyeglasses/Ecateye.webp";
import oval from "../../assets/HomePageImgs/Eyeglasses/Eoval.webp";
import square from "../../assets/HomePageImgs/Eyeglasses/Esquare.webp";
import round from "../../assets/HomePageImgs/Eyeglasses/Eround.webp";
import hexagonal from "../../assets/HomePageImgs/Eyeglasses/Ehexagonal.webp";
import aviator from "../../assets/HomePageImgs/Eyeglasses/Eaviator.webp";
import eyeglasses from "../../assets/HomePageImgs/Eyeglasses/SunglassessImg.webp";
import EyeglassesR from "../../assets/HomePageImgs/Eyeglasses/EyeglassesR.png";
import EyeglassesL from "../../assets/HomePageImgs/Eyeglasses/EyeglassesL.png";

const EyeglassesData = [
  { id: 1, label: "Cat Eye", image: cateye },
  { id: 2, label: "Oval", image: oval },
  { id: 3, label: "Square", image: square },
  { id: 4, label: "Round", image: round },
  { id: 5, label: "Hexagonal", image: hexagonal },
  { id: 6, label: "Aviator", image: aviator },
];

const Eyeglasses = () => {
  const navigate = useNavigate();

  const handleEyeglassesClick = (shape) => {
    navigate({
      pathname: "/products",
      search: `?category=Eyeglasses&shape=${encodeURIComponent(shape)}`,
      hash: "#our-products"
    });
  };

  return (
    <div className="relative py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Eyeglasses</PrimaryHeading>
      <img data-aos="fade-right" data-aos-duration="2000" src={EyeglassesL} alt="" className="absolute top-0 md:-top-24 h-14 sm:h-20 xl:h-32" />
      <img data-aos="fade-left" data-aos-duration="2000" src={EyeglassesR} alt="" className="absolute -top-10 md:-top-24 right-0 h-24 sm:h-32 xl:h-40 " />
      <div
        dir="rtl"
        className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 gap-y-12 xl:gap-y-16 container"
      >
        {/* Eyeglasses items */}
        {EyeglassesData.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            onClick={() => handleEyeglassesClick(item.label)}
            className="relative flex flex-col items-end justify-start border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden mb-auto cursor-pointer hover:border-[#7ddfdf] transition-colors duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="object-contain group-hover:scale-105 duration-300 h-44 md:h-80 -mt-12"
            />
            <p className="absolute text-sm md:text-3xl text-white font-kaisei_Decol bottom-0 right-0 rounded-br-xl font-norma bg-gradient-to-l from-[#7ddfdf] to-[#92CAD4] p-2 px-4">
              {item.label}
            </p>
          </div>
        ))}
        {/* Eyeglasses big image in col 1-2 */}
        <div data-aos="fade-right" className="hidden xl:block xl:col-start-3 xl:col-span-2 relative -ml-24 pr-20">
          <img
            src={eyeglasses}
            alt="Eyeglasses showcase"
            className="w-full h-auto -mt-12"
          />
          <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">
            Glasses
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Eyeglasses;
