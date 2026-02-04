import React, { useState } from "react";
import clientImg from "../../assets/clientImg.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const clients = [
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
];

const HappyCustomers = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to second card

  return (
    <div className="py-10 md:py-20 space-y-5 md:space-y-8">
      <PrimaryHeading className="pb-10">Our Happy Customers</PrimaryHeading>

      <div
      data-aos="fade-up"
        className="container flex flex-col lg:flex-row items-center justify-between gap-12 p-10 sm:p-0"
        onMouseLeave={() => setActiveIndex(1)} // Reset to 2nd card on mouse leave
      >
        {clients.map((client, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              role="button"
              aria-pressed={isActive}
              tabIndex={0}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)} // For keyboard users
              className={`flex flex-col space-y-2 items-center text-center transition-all duration-300 ease-in-out 
                bg-[#E5E7EB]  p-6 cursor-pointer w-full md:w-[80%] lg:w-full
                ${isActive ? "blur-0 scale-110 bg-blue-100" : "blur-[2px] scale-100"}`}
            >
              <img
                src={clientImg}
                alt={`${client.name}`}
                className="h-[130px] w-[130px] object-contain rounded-full"
              />
              <h1 className="text-[26px] md:text-[30px] font-semibold text-[#22223b] font-kaisei_Decol">
                {client.name}
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-[#3a86ff] font-kanit">
                {client.title}
              </h2>
              <p className="text-base md:text-lg font-normal text-[#495057] font-kanit">
                {client.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HappyCustomers;
