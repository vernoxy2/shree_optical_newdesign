import React, { useState } from "react";
import clientImg from "../../assets/clientImg.png";
import Qute from "../../assets/Qutee.svg";
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
    <>
      <section className="bg-[#06213C] pt-0 pb-28 relative">
        <PrimaryHeading className="p-0 text-white text-start container">
          Our Happy Client
        </PrimaryHeading>
        <div
          data-aos="fade-up"
          className="container flex flex-col lg:flex-row items-center justify-between gap-8 p-10 sm:p-0 relative z-0"
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
                className={`flex flex-col space-y-4 transition-all duration-300 ease-in-out 
                bg-white p-8 cursor-pointer w-full md:w-[80%] lg:w-full rounded-2xl
                ${isActive ? "blur-0 -translate-y-8 bg-white" : " scale-100"}`}
              >
                <img src={Qute} alt="" className="h-20 w-20 mb-6"/>
                <p className="text-base md:text-lg font-poppins text-[#495057] font-kanit w-[65%]">
                  {client.description}
                </p>
                <img
                  src={clientImg}
                  alt={`${client.name}`}
                  className="h-20 w-20 object-contain rounded-full"
                />
                <div className="space-y-1">
                  <h1 className="text-xl md:text-2xl  text-[#22223b] font-kaisei_Decol">
                  {client.name}
                </h1>
                <h2 className="text-sm md:text-base font-medium text-[#3a86ff] font-kanit">
                  {client.title}
                </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-primary h-1/2 absolute inset-1/2 z-10">cdsd</div>
      </section>
    </>
  );
};

export default HappyCustomers;
