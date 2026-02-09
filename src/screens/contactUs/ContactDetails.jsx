import React from "react";
// import callImg from "../../assets/ContactPageImg/callImg.png";
// import mailImg from "../../assets/ContactPageImg/mailImg.png";
// import locationImg from "../../assets/ContactPageImg/locationImg.png";
import ContactBg from "../../assets/ContactPageImg/ContactBg.png";
import { Icon } from "@iconify/react";
import PrimaryBtn from "../../components/Primarycompo/PrimaryBtn";

const conatactUsData = [
  {
    id: 1,
    icon: "line-md:phone-call-twotone",
    title: "Call Us",
    description: "+91 99825 76458",
  },
  {
    id: 2,
    icon: "line-md:email-alt-filled",
    title: "Email",
    description: "shree234@gmail.com",
  },
  {
    id: 3,
    icon: "line-md:map-marker-filled-loop",
    title: "Address",
    description:
      "pramukh sannidhya complex, B-5, Abrama Village, Valsad 396 001 ",
  },
];

const ContactDetails = () => {
  return (
    <section>
      <div className="container ">
        <div className="container px-0 bg-[#F0F0F0] flex flex-col lg:flex-row justify-center items-center gap-y-4 md:gap-y-8  rounded-2xl">
          {/* Left Contact Info */}
          <div data-aos="fade-right" className="w-full xl:w-7/12 xl:px-16 2xl:px-20 py-8 container">
            <form action="" className="flex flex-col gap-4 md:gap-8 ">
              <input type="text" placeholder="Name" className="Contact-Input" />
              <input
                type="email"
                placeholder="Email"
                className="Contact-Input"
              />

              <textarea
                name=""
                id=""
                // cols="30"
                rows="5"
                placeholder="Message"
                className="Contact-Input"
              ></textarea>
              {/* <button className="">Submit</button> */}
              <div className="max-w-fit">
                <PrimaryBtn children={"Send Message"} />
              </div>
            </form>
          </div>

          {/* Right Map Section */}
          <div
            data-aos="zoom-in-left"
            style={{ backgroundImage: `url(${ContactBg})` }}
            className="w-full xl:w-5/12 relative h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center px-8 md:px-12 flex flex-col justify-center gap-4 md:gap-8 rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl"
          >
            {conatactUsData.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 md:gap-4 text-left lg:text-left"
              >
                <Icon icon={item.icon} className="text-white text-4xl md:text-5xl" />
                <div className="flex-1">
                  <h1 className="text-white text-xl md:text-3xl font-kaisei_Decol">
                    {item.title}
                  </h1>
                  <p className="text-white text-base md:text-xl font-kaisei_Decol">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
