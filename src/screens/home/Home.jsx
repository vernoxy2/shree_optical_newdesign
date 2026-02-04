import React, { Suspense, lazy } from "react";
import contactSectionBg from "../../assets/ContactPageImg/contactSectionBg.png";
import GetQuote from "../../components/getQuote/GetQuote";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import HomeHeader from "./HomeHeader";
import ShopFor from "./ShopFor";
import Eyeglasses from "./Eyeglasses";
import Sunglassess from "./Sunglassess";
import Lensess from "./Lensess";

// Lazy-loaded sections (optional for performance)
const About = lazy(() => import("./About"));
const Products = lazy(() => import("./Products"));
const Lenses = lazy(() => import("./Lenses"));
const Sunglasses = lazy(() => import("./Sunglasses"));
const Choose = lazy(() => import("./Choose"));
const HappyCustomers = lazy(() => import("./HappyCustomers"));

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero/Header Section */}
      <HomeHeader />

      {/* Partner Logos Slider */}
      <PartnerSlider />
      
      {/* Lazy-loaded Sections */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        {/* <About />
        <Products />
        <Lenses />
        <Sunglasses /> */}
        <ShopFor />
        <Eyeglasses/>
        <Sunglassess/>
        <Lensess/>
        <Choose />
        <HappyCustomers />
      </Suspense>

      {/* Get Quote / Contact Section */}
      <GetQuote backgroundImage={contactSectionBg} />
    </main>
  );
};

export default Home;
