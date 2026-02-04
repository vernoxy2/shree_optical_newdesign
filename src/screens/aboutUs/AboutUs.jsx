import React from "react";
import aboutHeaderImg from "../../assets/AboutPageImgs/aboutHeaderImg.png";
import Header from "../../components/header/Header";
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import GetQuote from "../../components/getQuote/GetQuote";
import aboutGetQuotebg from "../../assets/AboutPageImgs/aboutGetQuotebg.png";
import Shopstory from "./Shopstory";
import ValuesAndMission from "./ValuesAndMission";
import WhatSetUsApart from "./WhatSetUsApart";

const AboutUs = () => {
  return (
    <div className="">
      <Header
        backgroundImage={aboutHeaderImg}
        headingText={"About Us"}
        description={
          "Experience expert eye care and stylish eyewear, combining innovation, precision, and personalized service for crystal-clear vision and lasting confidence"
        }
      />

      <PartnerSlider />
      {/* shop story */}
      <Shopstory />
      {/* values and mission */}
      <ValuesAndMission/>
      {/* What Sets Us Apart */}
      {/* <div className="About-WhatSetsApart-Main-Container">
        <h1 className="About-WhatSetsApart-Heading">What Sets Us Apart</h1>
        <div
          className="About-WhatSetsApart-Bg-Img-Container"
          style={{ backgroundImage: `url(${WhatSetApartBg})` }}
        >
          <div className="About-WhatSetsApart-Text-Container">
            <h2 className="About-WhatSetsApart-SubHeading">
              See the Difference with Innovation and Care.
            </h2>
            <p className="About-WhatSetsApart-Description">
              Advanced digital eye testing, curated eyewear, expert staff, and
              personalized service make us truly unique.
            </p>
          </div>
        </div>
      </div> */}
      <WhatSetUsApart />
      

      <GetQuote to={"/contactus"} backgroundImage={aboutGetQuotebg} />
    </div>
  );
};

export default AboutUs;
