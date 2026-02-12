import React from "react";
import Header from "../../components/header/Header";
import ProductBg from "../../assets/OurProductsImg/ProductBg.png";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import Brand from "./Brand";
import OurProducts from "./OurProducts";

const Products = () => {
  return (
    <div>
      <Header
        backgroundImage={ProductBg}
        headingText={"Sunglasses for man"}
        description={
          "Stylish and protective sunglasses for men, designed to elevate your everyday look with confidence."
        }
      />
      <div className="w-full">
        <PartnerSlider />
      </div>
      <Brand />
      <OurProducts/>
    </div>
  );
};

export default Products;
