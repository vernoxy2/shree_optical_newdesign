import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundForward } from "react-icons/io";

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
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SectionBg})` }}
    >
      {/* Content */}
      <div className="relative z-10 space-y-10">
        <PrimaryHeading className={className}>{SectionHeading}</PrimaryHeading>

        {/* Swiper Carousel */}
        <div className="container mx-auto px-4">
          <Swiper
            ref={swiperRef}
            // loop={true}
            centeredSlides={true}
            spaceBetween={24}
            slidesPerView={1.2 }
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {productDataList.map((item) => (
              <SwiperSlide key={item.id} className="my-auto py-4">
                {({ isActive }) => (
                  <div
                    className={`bg-[#F5F9FC] rounded-2xl relative group
                  transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "scale-110 opacity-100 shadow-md z-10"
                      : "scale-90 opacity-95"
                  }`}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className="object-contain w-full h-auto rounded-2xl"
                    />

                    <div
                      className={`absolute inset-0 rounded-2xl p-3 
                    flex flex-col justify-between
                    transition-all duration-300
                    ${
                      isActive
                        ? "visible"
                        : " invisible "
                    }`}
                    >
                      <h3
                        onClick={
                          isActive
                            ? () => handleEyeglassesClick(item.label)
                            : undefined
                        }
                        className="text-[#06213C] bg-white text-3xl 
                     font-bold text-center w-fit ms-auto 
                     rounded-full p-1 cursor-pointer
                     transition-all duration-300
                     group-hover:bg-[#06213C] group-hover:text-white group-hover:-rotate-45"
                      >
                        <IoIosArrowRoundForward />
                      </h3>

                      <h3
                        className={`text-[#06213C] bg-[#F5F9FC] text-xl 
                      font-kaisei_Decol text-center 
                      w-fit mx-auto px-8 p-1.5 rounded-md
                      transition-all duration-300
                      ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      >
                        {item.label}
                      </h3>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation */}
        <div
          className="bg-primary backdrop-blur-md 
                        p-3 max-w-fit mx-auto 
                        rounded-full flex items-center gap-16 
                        shadow-2xl"
        >
          <NavButton
            direction="prev"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          />
          <NavButton
            direction="next"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
