import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import EyewearImg from "../../assets/HomePageImgs/ShopFor/EyewearImg.png";
import ManImg from "../../assets/HomePageImgs/ShopFor/ManImg.webp";
import WomenImg from "../../assets/HomePageImgs/ShopFor/WomenImg.webp";
import KidsImg from "../../assets/HomePageImgs/ShopFor/KidsImg.webp";
import UnisexImg from "../../assets/HomePageImgs/ShopFor/UnisexImg.webp";

const data = [
  {
    id: 1,
    img: ManImg,
    category: "Man",
  },
  {
    id: 2,
    img: WomenImg,
    category: "Woman",
  },
  {
    id: 3,
    img: KidsImg,
    category: "Kids",
  },
  {
    id: 4,
    img: UnisexImg,
    category: "Unisex",
  },
];

const ShopFor = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    const map = { Man: "Men", Woman: "Women", Kids: "Kids", Unisex: "Unisex" };
    const gender = map[category] || category;
    navigate({ pathname: "/products", search: `?gender=${encodeURIComponent(gender)}` , hash: "#our-products" });
  };

  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Shop For</PrimaryHeading>
      <div className="flex flex-col-reverse xl:flex-row gap-4 md:gap-8 items-center container sm:px-0 md:px-16 sm:pr-0">
        <div className="w-full xl:w-1/2 grid grid-cols-2 gap-3 sm:gap-6 gap-y-10 sm:gap-y-20 py-10 lg:px-6">
          {data.map((item) => (
            <div
            data-aos="fade-up"
              key={item.id}
              onClick={() => handleNavigate(item.category)}
              className="relative flex flex-col items-start justify-end border-[3px] border-BorderColr rounded-[16px] group overflow-b-hidden cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.category}
                className="object-cover h-44 md:h-80 -mt-12 group-hover:scale-105 duration-300 ease-in-out"
              />
              <p className="absolute text-sm md:text-3xl text-white font-kaisei_Decol bottom-0 right-0 rounded-br-xl font-norma bg-gradient-to-l from-[#7ddfdf] to-[#92CAD4] p-2 px-4">
                {item.category}
              </p>
              
            </div>
          ))}
        </div>
        <div data-aos="fade-left" className="xl:w-1/2 relative">
          <img src={EyewearImg} alt="" className="object-cover" />
          <h1 className="absolute left-10 bottom-10 text-white text-4xl md:text-7xl font-kaisei_Decol">Eyewear</h1>
        </div>
      </div>
    </div>
  );
};

export default ShopFor;
