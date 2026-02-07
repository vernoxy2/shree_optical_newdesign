import React from "react";
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
  {
    icon: whyChooseIcon2,
    title: "Affordable Pricing",
    desc: "Transparent, competitive prices without compromisingquality or service",
  },
  {
    icon: whyChooseIcon3,
    title: "Curated Eyewear Brands",
    desc: "Thousands of happy customers and glowing reviews-your satisfaction, our priority",
  },
];

const Choose = () => {
  return (
    <>
      
      <section className="container">
        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="space-y-5">
            <h1 className="text-4xl xl:text-5xl text-[#06213c] font-kaisei_Decol font-normal">
              Why Choose Us ?
            </h1>
            <p className="text-xl xl:text-2xl font-kanit 2xl:pe-20">Experience the difference with our commitment to vision, style, and genuine care — trusted by thousands of happy customers.</p>
            <hr className="border-primary border-2 rounded-full w-32"/>
          </div>
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] hover:bg-primary duration-300 transition-colors rounded-2xl p-8 flex flex-col items-center justify-center gap-6 text-center hover:shadow-2xl group"
            >
              <img
                src={card.icon}
                alt={`icon${index}`}
                className="h-[50px] w-[60px]"
              />
              <h1 className="text-xl sm:text-[30px] text-[#06213c] group-hover:text-white duration-300 transition-colors font-kaisei_Decol">
                {card.title}
              </h1>
              <p className=" sm:text-[20px] text-[#06213c] group-hover:text-white duration-300  transition-colors font-normal font-kanit">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Choose;
