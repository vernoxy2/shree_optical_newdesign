import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoo.svg";
import { GoX } from "react-icons/go";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];

 const navLinkClass = (isMobile = false) =>
  `relative text-sm md:text-lg xl:text-xl 2xl:text-2xl 
   font-kaisei_Decol font-normal pb-1
   ${isMobile ? "text-primary" : "text-white"}
   before:content-['']
   before:absolute before:left-0 before:bottom-0
   before:h-[2px] before:w-full
   before:bg-current
   before:scale-x-0 before:origin-left
   before:transition-transform before:duration-300 before:ease-out
   hover:before:scale-x-100`;
  return (
    <nav className="w-full bg-primary ">
      {/* ===== Top Bar ===== */}
      <div className="flex items-center justify-between px-4 py-3 md:justify-around">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="h-[40px] w-[80px] lg:h-[50px] lg:w-[100px]"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 lg:gap-12 2xl:gap-x-24">
          {links.map(({ name, path }) => (
            <Link key={name} to={path} className={navLinkClass()}>
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <GoX className="w-7 h-7 text-primary bg-white rounded-full p-1" />
          ) : (
            <LuMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white text-primary px-6 pb-6 pt-4  shadow-lg">
          <div className="flex flex-col gap-5">
            {links.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={navLinkClass(true)}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
