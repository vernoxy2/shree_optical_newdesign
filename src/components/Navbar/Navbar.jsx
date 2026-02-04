import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GoX } from "react-icons/go";
import { LuChevronsDown } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `relative text-[#06213c] text-sm md:text-lg xl:text-xl 2xl:text-2xl font-kaisei_Decol font-normal pb-1 transition-all duration-300 
     before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-[#06213c] 
     before:transition-all before:duration-300 before:ease-in-out 
     ${isActive(path) ? "before:w-full" : "before:w-0 hover:before:w-full"}`;

  return (
    <nav className="w-8/12 mx-auto translate-y-14 lg:translate-y-16 rounded-b-3xl bg-white -mt-16 top-0 z-50">
      <div
        data-aos="fade"
        className="flex flex-col sm:flex-row justify-around items-center px-3 sm:py-2 rounded-b-[20px]"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="h-[40px] w-[80px] lg:h-[50px] lg:w-[100px]"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 lg:gap-12 2xl:gap-x-32">
          {links.map(({ name, path }) => (
            <Link key={name} to={path} className={navLinkClass(path)}>
              {name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <GoX className="w-7 h-7 text-[#06213c]" />
            ) : (
              <LuChevronsDown className="w-7 h-7 text-[#06213c]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 right-0 px-6 pb-4 pt-4 z-50
          backdrop-blur-sm bg-white/90 rounded-b-[20px] shadow-md"
        >
          <div className="flex flex-col gap-4">
            {links.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={navLinkClass(path)}
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
