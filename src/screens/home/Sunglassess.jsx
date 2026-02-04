import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Cateye from "../../assets/HomePageImgs/Sunglassess/Scateye.webp";
import oval from "../../assets/HomePageImgs/Sunglassess/Soval.webp";
import round from "../../assets/HomePageImgs/Sunglassess/Sround.webp";
import square from "../../assets/HomePageImgs/Sunglassess/Ssquare.webp";
import hexagonal from "../../assets/HomePageImgs/Sunglassess/Shexagonal.webp";
import aviator from "../../assets/HomePageImgs/Sunglassess/Saviator.webp";
import sunglasses from "../../assets/HomePageImgs/Sunglassess/SunglassessImg.webp";
import SunglassessR from "../../assets/HomePageImgs/Sunglassess/SunglassessR.png";
import SunglassessL from "../../assets/HomePageImgs/Sunglassess/SunglassessL.png";

const SunglassessData = [
  { id: 1, label: "Cat Eye", image: Cateye },
  { id: 2, label: "Oval", image: oval },
  { id: 3, label: "Round", image: round },
  { id: 4, label: "Square", image: square },
  { id: 5, label: "Hexagonal", image: hexagonal },
  { id: 6, label: "Aviator", image: aviator },
];

const Sunglassess = () => {
  const navigate = useNavigate();

  const handleSunglassesClick = (shape) => {
    navigate({
      pathname: "/products",
      search: `?category=Sunglasses&shape=${encodeURIComponent(shape)}`,
      hash: "#our-products"
    });
  };

  return (
    <div className=" relative py-10 md:py-20 space-y-4 md:space-y-8">
      <img
      data-aos="fade-right" data-aos-duration="2000"
        src={SunglassessL}
        alt=""
        className="absolute top-0 h-10 md:h-14 xl:h-auto xl:-left-16"
      />
      <img
      data-aos="fade-left" data-aos-duration="2000"
        src={SunglassessR}
        alt=""
        className="absolute top-8 md:top-14 h-14 md:h-20 xl:h-auto right-0 xl:-right-28"
      />
      <PrimaryHeading>Sunglassess</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 gap-y-12 xl:gap-y-16 container">
        {SunglassessData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Insert empty space before the 3rd item on XL screens */}
            {index === 2 && (
              <div data-aos="fade-left" className="hidden xl:block xl:col-start-3 xl:col-span-2 relative -mr-24">
                <img src={sunglasses} alt="" className="-mt-20" />
                <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">
                  Fashion
                </h1>
              </div>
            )}
            <div 
            data-aos="fade-up"
              onClick={() => handleSunglassesClick(item.label)}
              className="relative flex flex-col items-start justify-end border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden my-auto cursor-pointer hover:border-[#7ddfdf] transition-colors duration-300"
            >
              <img
                src={item.image}
                alt={item.label}
                className="object-contain group-hover:scale-105 duration-300 h-44 md:h-80 -mt-12"
              />
              <p className="absolute text-sm md:text-3xl text-white font-kaisei_Decol  bottom-0 right-0 rounded-br-xl font-norma bg-gradient-to-l from-[#7ddfdf] to-[#92CAD4] p-2 px-4">
                {item.label}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sunglassess;
