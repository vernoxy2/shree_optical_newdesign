import React, { Suspense, lazy } from "react";
import contactSectionBg from "../../assets/ContactPageImg/contactSectionBg.png";
import GetQuote from "../../components/getQuote/GetQuote";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import HomeHeader from "./HomeHeader";
import ShopFor from "./ShopFor";
import HomeProduct from "./HomeProduct";
import EyeglassesBg from "../../assets/HomePageImgs/Eyeglasses/EyeglassesBg.png";
import SunglassessBg from "../../assets/HomePageImgs/Sunglassess/SunglassessBg.png";
import LensesBg from "../../assets/HomePageImgs/Lenses/LensesBg.png";
import { EyeglassesData } from "../../Data/EyeglassesData";
import { SunglassessData } from "../../Data/SunglassessData";
import { LensessData } from "../../Data/LensessData";

const Choose = lazy(() => import("./Choose"));
const HappyCustomers = lazy(() => import("./HappyCustomers"));

const Home = () => {
  return (
    <main>
      {/* Hero/Header Section */}
      <HomeHeader />

      {/* Lazy-loaded Sections */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ShopFor />
        <PartnerSlider />

        <div className="relative">
          <HomeProduct
            SectionHeading={"Eyeglasses"}
            SectionBg={EyeglassesBg}
            productDataList={EyeglassesData}
          />
          <HomeProduct
            SectionHeading={"Sunglassess"}
            SectionBg={SunglassessBg}
            className={"text-primary"}
            productDataList={SunglassessData}
          />
          <HomeProduct
            SectionHeading={"Lensess"}
            SectionBg={LensesBg}
            productDataList={LensessData}
          />
        </div>
        <Choose />
        <HappyCustomers />
      </Suspense>

      {/* Get Quote / Contact Section */}
      <GetQuote backgroundImage={contactSectionBg} />
    </main>
  );
};

export default Home;
