import React from "react";
// import "./Footer.css";
import footerBgImg from "../../assets/footerBgImg.png";
import logo from "../../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdAddCall, MdEmail } from "react-icons/md";

const PageList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Contact",
    url: "/contactus",
  },
];

const ProductsList = [
  {
    title: "Sunglasses",
    url: "/sunglasses",
  },
  {
    title: "Eyeglasses",
    url: "/eyeglasses",
  },
  {
    title: "Lenses",
    url: "/lenses",
  },
]
const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="w-full bg-cover bg-center m-[20px] rounded-[12px] "
        style={{ backgroundImage: `url(${footerBgImg})` }}
      >
        {/* logo container  */}
        <div className="bg-white w-[200px] h-[80px] flex items-center justify-center rounded-b-[10px] mx-auto">
          <img
            src={logo}
            alt="logo"
            className="h-[60px] w-[120px] object-cover"
          />
        </div>
        <div className="container xl:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 py-12 pb-48">
          {/* logo container  */}
          <div className="flex flex-col justify-center gap-5 md:col-span-2 xl:col-span-1 w-[80%] xl:w-full">
            <img
              src={logo}
              alt="logo"
              className="h-[60px] w-[120px] object-cover"
            />
            <p className="text-primary font-kanit text-sm md:text-lg  font-normal">
              <span className="font-bold">Shree Optical</span> offers stylish
              eyewear, sunglasses, lenses, and eyeglasses with modern designs,
              premium quality, fashion-forward trends, and customer focused
              service.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/punarvasu_ayurveda07?igsh=MWZuZGxhMzl4b2Y0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:scale-110 duration-300"
              >
                <FaFacebookSquare className="text-primary text-3xl" />
              </a>

              <a
                href="https://www.instagram.com/punarvasu_ayurveda07?igsh=MWZuZGxhMzl4b2Y0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:scale-110 duration-300"
              >
                <AiFillInstagram className="text-primary text-3xl" />
              </a>

              <div className="p-1 rounded hover:scale-110 duration-300">
                <BsTwitterX className="text-primary text-3xl" />
              </div>
            </div>
          </div>
          {/* quick links for Pages */}
          <div className="space-y-2 mx-auto ">
            <h1 className="text-primary font-kaisei_Decol text-2xl md:text-3xl font-bold underline line-clamp-6">
              Pages
            </h1>
            <ul className="flex flex-col gap-2">
              {PageList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-primary font-kanit text-xl"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* quick links for products */}
          <div className="space-y-3 mx-auto">
            <h1 className="text-primary font-kaisei_Decol text-2xl md:text-3xl font-bold underline line-clamp-6">Products</h1>
            <ul className="flex flex-col gap-2">
              {ProductsList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-primary font-kanit text-xl"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
           
          </div>
          {/* contact us details */}
          <div className=" space-y-2 ">
            <h1 className="text-primary font-kaisei_Decol text-2xl md:text-3xl font-bold underline line-clamp-6">
              Contact Us
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex  items-center">
                <PiMapPinAreaFill className="text-9xl text-primary mr-4" />
                <div className="font-kanit text-primary ">
                  <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                    Address :
                  </h1>
                  <p className=" md:text- xl:text-lg">
                    pramukh sannidhya complex, B-5, Abrama Village, Valsad,
                    Abrama, Gujarat 396002
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <MdAddCall className="text-5xl text-primary mr-4" />
                <div className="font-kanit text-primary">
                  <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                    Call Us :
                  </h1>
                  <p className=" md:text- xl:text-lg">+91 99825 76458</p>
                </div>
              </div>
              <div className="flex  items-center">
                <MdEmail className="text-5xl text-primary mr-4" />
                <div className="font-kanit text-primary">
                  <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                    Email :
                  </h1>
                  <p className=" md:text- xl:text-lg">shree234@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
