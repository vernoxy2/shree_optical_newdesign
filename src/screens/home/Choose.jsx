import React from 'react';
import whyChooseIcon1 from "../../assets/whyChooseIcon1.png";
import whyChooseIcon2 from "../../assets/whyChooseIcon2.png";
import whyChooseIcon3 from "../../assets/whyChooseIcon3.png";

const cardData = [
  {
    icon: whyChooseIcon1,
    title: "State-of-the-art Testing",
    desc: "Advanced technology ensures precise, reliable eye exams for optimal vision care.",
  },
  {
    icon: whyChooseIcon2,
    title: "Curated Eyewear Brands",
    desc: "Stylish, high-quality eyewear from thoughtfully selected premium brands.",
  },
  {
    icon: whyChooseIcon3,
    title: "Personalized Consultations",
    desc: "Expert guidance tailored to your unique vision and eyewear needs.",
  },
];

const Choose = () => {
  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8 container xl:px-10">
      <h1 className="text-[32px] text-3xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center sm:mb-10">
        Why Choose Us?
      </h1>
      <p data-aos="zoom"  className="text-sm md:text-xl lg:text-2xl text-[#334155] font-normal font-kaisei_Decol text-center max-w-4xl mx-auto">
        Experience the difference with our commitment to vision, style, and genuine care —
        trusted by thousands of happy customers.
      </p>

      <div
        className=" bg-[#becfd6] bg-cover bg-center gap-[30px] flex flex-col items-center justify-between my-4 sm:my-[50px] rounded-[10px] shadow-[inset_0_30px_30px_-20px_rgba(0,0,0,0.5)] py-[20px]"
      >
        {/* First row (3 cards) */}
        <div data-aos="zoom-in"  className="flex flex-col lg:flex-row items-center justify-between w-[90%] gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white h-[250px] w-full lg:w-[30%] text-center rounded-[10px] gap-[20px] p-4"
            >
              <img src={card.icon} alt={`icon${index}`} className="h-[50px] w-[60px]" />
              <h1 className="text-xl sm:text-[30px] text-[#06213c] font-medium font-kaisei_Decol">
                {card.title}
              </h1>
              <p className=" sm:text-[20px] text-[#06213c] font-normal font-kanit">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Second row (2 cards) */}
        <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center justify-between w-[90%] gap-6">
          {[whyChooseIcon1, whyChooseIcon2].map((icon, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white h-[250px] w-full md:w-[48%] text-center rounded-[10px] gap-[20px] p-4"
            >
              <img src={icon} alt={`whyChooseIcon${idx + 1}`} className="h-[50px] w-[60px]" />
              <h1 className="text-xl sm:text-[30px] text-[#06213c] font-medium font-kaisei_Decol">
                {idx === 0 ? "State-of-the-art Testing" : "Curated Eyewear Brands"}
              </h1>
              <p className="sm:text-[20px] text-[#06213c] font-normal font-kanit">
                {idx === 0
                  ? "Advanced technology ensures precise, reliable eye exams for optimal vision care."
                  : "Stylish, high-quality eyewear from thoughtfully selected premium brands."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
