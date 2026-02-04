import React from "react";
import callImg from "../../assets/ContactPageImg/callImg.png";
import mailImg from "../../assets/ContactPageImg/mailImg.png";
import locationImg from "../../assets/ContactPageImg/locationImg.png";
import mapBgImg from "../../assets/ContactPageImg/mapBgImg.png";

const ContactDetails = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
        {/* Left Contact Info */}
        <div data-aos="fade-right" className="flex flex-col justify-center items-center lg:items-start p-4 space-y-6">
          {/* Call Section */}
          <div className="w-full bg-[#06213c] px-4 py-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <img src={callImg} alt="call" className="h-14 w-14 lg:h-20 lg:w-20" />
              <h1 className="text-white font-kaisei_Decol text-2xl md:text-4xl">
                Call Us:
              </h1>
            </div>
            <h1 className="text-white font-kaisei_Decol text-2xl md:text-4xl">
              +91 99825 76458
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#06213c] text-base md:text-lg lg:text-xl font-kaisei_Decol text-center lg:text-left">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Email */}
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 text-center lg:text-left">
            <img src={mailImg} alt="mail" className="h-14 w-14 lg:h-20 lg:w-20" />
            <div>
              <h1 className="text-[#06213c] text-xl md:text-3xl font-kaisei_Decol">Email:</h1>
              <p className="text-[#06213c] text-base md:text-xl font-kaisei_Decol">shree234@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 text-center lg:text-left">
            <img src={locationImg} alt="location" className="h-14 w-14 lg:h-20 lg:w-20" />
            <div>
              <h1 className="text-[#06213c] text-xl md:text-3xl font-kaisei_Decol">Address:</h1>
              <p className="text-[#06213c] text-base md:text-xl font-kaisei_Decol max-w-md">
                Pramukh Sannidhya Complex, B-5, Abrama Village, Valsad, Gujarat 396002
              </p>
            </div>
          </div>
        </div>

        {/* Right Map Section */}
        <div data-aos="zoom-in-left" className="relative  h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col justify-end items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.848900548641!2d72.93863877599081!3d20.594227302559858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3e59a68829f%3A0x9ef062442028e5b6!2sShree%20Optical!5e0!3m2!1sen!2sin!4v1749185031379!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-[90%] h-full border-[10px] border-white shadow-lg z-20"
          ></iframe>

          <div
            className="w-[90%] h-[80px] -mt-[50px] bg-cover bg-center z-10 translate-x-14"
            style={{ backgroundImage: `url(${mapBgImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
