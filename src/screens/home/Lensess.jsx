import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import Gray from "../../assets/HomePageImgs/Lenses/Lgray.webp";
import Brown from "../../assets/HomePageImgs/Lenses/Lbrown.webp";
import Blue from "../../assets/HomePageImgs/Lenses/Lblue.webp";
import Hazel from "../../assets/HomePageImgs/Lenses/Lhazel.webp";
import Honey from "../../assets/HomePageImgs/Lenses/Lhoney.webp";
import Violet from "../../assets/HomePageImgs/Lenses/Lviolet.webp";
import lenses from "../../assets/HomePageImgs/Lenses/LensesImg.webp";
import lensesB from "../../assets/HomePageImgs/Lenses/LensesB.png";
import lensesT from "../../assets/HomePageImgs/Lenses/LensesT.png";

const LensessData = [
  {
    id: 1,
    label: "Gray",
    image: Gray,
  },
  {
    id: 2,
    label: "Brown",
    image: Brown,
  },
  {
    id: 3,
    label: "Blue",
    image: Blue,
  },
  {
    id: 4,
    label: "Hazel",
    image: Hazel,
  },
  {
    id: 5,
    label: "Honey",
    image: Honey,
  },
  {
    id: 6,
    label: "Violet",
    image: Violet,
  },
];

const Lensess = () => {
  const navigate = useNavigate();

  const handleLensClick = (color) => {
    navigate({
      pathname: "/products",
      search: `?category=Lenses`,
      hash: "#our-products"
    });
  };

  return (
    <div className="relative py-10 md:py-20 space-y-4 md:space-y-8" dir="rtl">
      <img data-aos="fade-right" data-aos-duration="2000" src={lensesT} alt="" className="absolute left-0 h-16 md:h-24 xl:h-32"/>
      <img data-aos="fade-right" data-aos-duration="2000" src={lensesB} alt="" className="absolute bottom-0 xl:-bottom-24 h-20 md:h-32 xl:h-40"/>
      <PrimaryHeading>Lenses</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8 container pb-20">
        {LensessData.map((item) => (
          <div 
            data-aos="fade-up"
            key={item.id}
            onClick={() => handleLensClick(item.label)}
            className="relative flex flex-col items-end justify-start border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden mt-auto cursor-pointer hover:border-[#7ddfdf] transition-colors duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="object-contain group-hover:scale-105 duration-300 mt-auto h-36 md:h-60"
            />
            <p className=" absolute text-sm md:text-3xl text-white font-kaisei_Decol bottom-0 right-0 rounded-br-xl font-norma bg-gradient-to-l from-[#7ddfdf] to-[#92CAD4] p-2 px-4">
              {item.label}
            </p>
          </div>
        ))}
        {/* Eyeglasses big image in col 1-2 */}
        <div data-aos="fade-right" className="hidden xl:block xl:col-start-3 xl:col-span-2 relative -ml-24">
          <img
            src={lenses}
            alt="Eyeglasses showcase"
            className="w-full h-auto"
          />
          <h1 className="absolute left-48 bottom-5 text-white text-4xl md:text-7xl font-kaisei_Decol">
            Contacts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Lensess;
