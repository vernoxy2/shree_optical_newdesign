import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

// Swiper styles
import "swiper/css";

const NavButton = ({ direction = "next", onClick }) => (
  <button
    onClick={onClick}
    className="bg-white p-1.5 text-3xl rounded-full shadow-xl 
               hover:scale-105 active:scale-95 hover:text-black text-primary
               transition-all duration-300"
    aria-label={direction}
  >
    {direction === "next" ? <MdNavigateNext /> : <MdNavigateBefore />}
  </button>
);

const HomeProduct = ({
  className,
  SectionHeading,
  SectionBg,
  productDataList = [],
}) => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleEyeglassesClick = (shape) => {
    navigate({
      pathname: "/products",
      search: `?category=Eyeglasses&shape=${encodeURIComponent(shape)}`,
      hash: "#our-products",
    });
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat 
                 md:sticky md:top-0 z-0 h-fit 
                 flex flex-col items-center justify-center overflow-x-hidden md:rounded-t-3xl py-0"
      style={{ backgroundImage: `url(${SectionBg})` }}
    >
      <div className="relative z-10 space-y-10 w-full  py-5 pb-10">
        <PrimaryHeading className={className}>
          {SectionHeading}
        </PrimaryHeading>

        <div className="container mx-auto px-4">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            centeredSlides
            spaceBetween={32}
            slidesPerView={1.2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay]}
          >
            {productDataList.map((item) => (
              <SwiperSlide key={item.id} className="py-6">
                {({ isActive, isPrev, isNext }) => {
                  let scaleClass = "scale-90 ";

                  if (isActive) {
                    scaleClass = "scale-110  z-10";
                  } else if (isPrev || isNext) {
                    scaleClass = "scale-100 backdrop-blur-sm";
                  }

                  return (
                    <div
                      className={`bg-[#F5F9FC] rounded-2xl relative group
                      transition-all duration-500 ease-in-out 
                      ${scaleClass}`}
                    >
                      <img
                        src={item.image}
                        alt={item.label}
                        className="object-cover w-full h-auto rounded-2xl"
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 rounded-2xl p-3 
                        flex flex-col justify-between transition-all duration-300
                        ${isActive ? "visible" : "invisible"}`}
                      >
                        {/* Arrow */}
                        <div className="flex justify-end">
                          <button
                            onClick={() =>
                              isActive &&
                              handleEyeglassesClick(item.label)
                            }
                            className="text-[#06213C] bg-white text-3xl 
                                       font-bold rounded-full p-1 
                                       transition-all duration-300
                                       hover:bg-[#06213C] hover:text-white hover:-rotate-45"
                          >
                            <IoIosArrowRoundForward />
                          </button>
                        </div>

                        {/* Label */}
                        <div
                          className={`text-[#06213C] bg-[#F5F9FC] text-xl 
                          font-kaisei_Decol text-center 
                          w-fit mx-auto px-8 py-1.5 rounded-md
                          transition-all duration-300
                          ${
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0"
                          }`}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div
          className="bg-primary p-3 max-w-fit mx-auto 
                     rounded-full flex items-center gap-16 shadow-2xl"
        >
          <NavButton
            direction="prev"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <NavButton
            direction="next"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
