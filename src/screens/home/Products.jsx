import React, { useState } from "react";
import productsSectionImg from "../../assets/productsSectionImg.png";
import productsSectionImg2 from "../../assets/productsSectionImg2.png";
import productsSectionImg3 from "../../assets/productsSectionImg3.png";
import productsSpecksImg1 from "../../assets/productsSpecksImg1.png";
import productsSpecksImg2 from "../../assets/productsSpecksImg2.png";
import productsSpecksImg3 from "../../assets/productsSpecksImg3.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";

const thumbnails = [
  { src: productsSpecksImg1, alt: "Thumbnail 1", main: productsSectionImg },
  { src: productsSpecksImg2, alt: "Thumbnail 2", main: productsSectionImg2 },
  { src: productsSpecksImg3, alt: "Thumbnail 3", main: productsSectionImg3 },
];

const Products = () => {
  const [mainImage, setMainImage] = useState(productsSectionImg);

  return (
    <div className="py-10 md:py-20 space-y-4 md:space-y-8">
      <PrimaryHeading>Our Products</PrimaryHeading>

      <div  data-aos="fade-up" className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8">
        {/* Left Main Image */}
        <div className="flex justify-center 2xl:justify-start">
          <img
           data-aos="zoom-in"
            src={mainImage}
            alt="Main Product"
            className="w-[70%] 2xl:w-[80%] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center xl:items-end gap-4 md:gap-8 xl:gap-12 text-center xl:text-end px-4">
          {/* Heading */}
          <h2
            data-aos="fade-left"
            className="text-xl sm:text-2xl md:text-4xl 2xl:text-5xl text-[#06213c] font-kaisei_Decol font-bold leading-loose"
          >
            See Clearly, Wear Confidently
          </h2>

          {/* Description */}
          <p
            data-aos="fade-left"
            className="text-xs md:text-xl 2xl:text-2xl text-[#334155] font-semibold leading-relaxed"
          >
            Discover our premium range of eyewear — blending comfort, clarity,
            and cutting-edge style. From everyday essentials to designer frames,
            we have the perfect pair for every face and lifestyle.
          </p>

          {/* Image Thumbnails */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-3 sm:gap-x-5 w-full">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb.src}
                alt={thumb.alt}
                onClick={() => setMainImage(thumb.main)}
                data-aos="fade-left"
                className="w-[80px] sm:w-[130px] lg:w-[150px] object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            ))}
          </div>

          {/* CTA Button */}
          <PrimaryBtn to="/products">More Products</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Products;
