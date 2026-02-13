import React from "react";
// import "./Footer.css";
import footerBgImg from "../../assets/footerBgImg.png";
import logo from "../../assets/logo.svg";
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
    url: "/aboutus",
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
    url: "products?category=Sunglasses",
  },
  {
    title: "Eyeglasses",
    url: "/products?category=Eyeglasses",
  },
  {
    title: "Lenses",
    url: "/products?category=Lenses",
  },
];
const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center "
      style={{ backgroundImage: `url(${footerBgImg})` }}
    >
      <div className="space-y-8 py-12 pb-5
      ">
        <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-8   ">
          {/* logo container  */}
          <div data-aos="fade-up" className="flex flex-col justify-center gap-5 md:col-span-2 xl:col-span-1 w-[80%] xl:w-full">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-16 md:h-20 md:w-20 xl:h-28 xl:w-28"
            />
            <p className="text-white font-poppins text-sm font-normal leading-snug md:leading-normal">

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
                <FaFacebookSquare className="text-white hover:text-primary duration-200 transition-colors ease-in-out text-3xl" />
              </a>

              <a
                href="https://www.instagram.com/punarvasu_ayurveda07?igsh=MWZuZGxhMzl4b2Y0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded hover:scale-110 duration-300"
              >
                <AiFillInstagram className="text-white hover:text-primary duration-200 transition-colors ease-in-out text-3xl" />
              </a>

              <div className="p-1 rounded hover:scale-110 duration-300">
                <BsTwitterX className="text-white hover:text-primary duration-200 transition-colors ease-in-out text-3xl" />
              </div>
            </div>
          </div>
          {/* quick links for Pages */}
          <div data-aos="fade-up" className="space-y-2 xl:mx-auto ">
            <h1 className="text-primary font-poppins md:text-lg xl:text-xl font-semibold ">
              Pages
            </h1>
            <hr className="border-primary w-14 " />
            <ul className="flex flex-col gap-0.5">
              {PageList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-white font-kanit hover:text-primary hover:underline duration-300 transition-colors ease-in-out"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links for products */}
          <div data-aos="fade-up" className="space-y-2 xl:mx-10">
            <h1 className="text-primary font-poppins md:text-lg xl:text-xl font-semibold ">
              Products
            </h1>
            <hr className="border-primary w-20" />

            <ul className="flex flex-col gap-0.5">
              {ProductsList.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-white font-kanit hover:text-primary hover:underline duration-300 transition-colors ease-in-out"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact us details */}
          <div data-aos="fade-up" className=" space-y-3 ">
            <h1 className="text-primary font-poppins md:text-lg xl:text-xl font-semibold ">
              Contact Us
            </h1>
            <hr className="border-primary w-28" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <PiMapPinAreaFill className="text-4xl text-white mr-4" />
                <div className="font-kanit text-white flex-1">
                  <h1 className=" lg:text-lg font-medium">Address :</h1>
                  <p className="text-sm">
                    pramukh sannidhya complex, B-5, Abrama Village, Valsad,
                    Abrama, Gujarat 396002
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <MdAddCall className="text-4xl text-white mr-4" />
                <div className="font-kanit text-white flex-1">
                  <h1 className="lg:text-lg font-medium">Call Us :</h1>
                  <p className="text-sm">+91 99825 76458</p>
                </div>
              </div>
              <div className="flex items-center">
                <MdEmail className="text-4xl text-white mr-4" />
                <div className="font-kanit text-white flex-1">
                  <h1 className="lg:text-lg font-medium">Email :</h1>
                  <p className="text-sm">shree234@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-white/80 w-full container px-0" />
          <p className="text-center pt-4  text-white/80  mt-auto">
            © {new Date().getFullYear()} Developed by{" "}
            <a href="https://www.vernoxy.com/" target="_blank">
              @Vernoxy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
