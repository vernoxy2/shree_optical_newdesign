import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import EyewearImg from "../../assets/HomePageImgs/ShopFor/EyewearImg.png";
import ManImg from "../../assets/HomePageImgs/ShopFor/ManImg.webp";
import WomenImg from "../../assets/HomePageImgs/ShopFor/WomenImg.webp";
import KidsImg from "../../assets/HomePageImgs/ShopFor/KidsImg.webp";
import UnisexImg from "../../assets/HomePageImgs/ShopFor/UnisexImg.webp";
import { FiArrowRight } from "react-icons/fi";

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
    navigate({
      pathname: "/products",
      search: `?gender=${encodeURIComponent(gender)}`,
      hash: "#our-products",
    });
  };

  return (
    <section>
      <div className="py-10 md:py-20 space-y-4 md:space-y-8">
        <PrimaryHeading>Shop For</PrimaryHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 container ">
          {data.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 300}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div
                onClick={() => handleNavigate(item.category)}
                className="relative flex flex-col items-end justify-end rounded-[16px] group overflow-hidden cursor-pointer bg-[#F5F9FC] hover:bg-primary transform-gpu transition-all duration-500"
              >
                <FiArrowRight
                  className="absolute top-3 left-3
        text-[#1F1F20] bg-white
        rounded-full p-2
        text-4xl
        transform transition-transform duration-700 ease-in-out
        group-hover:-rotate-45
        group-hover:text-primary
        z-10"
                />

                <img
                  src={item.img}
                  alt={item.category}
                  className="object-cover h-44 md:h-80 transform-gpu transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                <p className="absolute text-sm md:text-[26px] text-[#1F1F20] group-hover:text-white font-Kanit bottom-0 left-0 p-7 transition-colors duration-300">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopFor;
