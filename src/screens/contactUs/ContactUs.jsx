import React from "react";
// import "./ContactUs.css";
// import callImg from "../../assets/callImg.png";
// import mailImg from "../../assets/mailImg.png";
// import locationImg from "../../assets/locationImg.png";
// import mapBgImg from "../../assets/mapBgImg.png";
// import contactFormBg from "../../assets/contactFormBg.png";     
import contactHeaderImg from "../../assets/ContactPageImg/contactHeaderImg.png";
import Header from "../../components/header/Header";
import ContactDetails from "./ContactDetails";
import ContactFrom from "./ContactFrom";

const ContactUs = () => {
  return (
    <div>
      <Header
        backgroundImage={contactHeaderImg}
        headingText={"Contact Us"}
        description={
          "Experience expert eye care and stylish eyewear, combining innovation, precision, and personalized service for crystal-clear vision and lasting confidence"
        }
      />

      {/* contact details */}
      <ContactDetails />

      {/* contact form */}
      <ContactFrom  />

    </div>
  );
};
export default ContactUs;
