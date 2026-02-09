import React, { use, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logoo.svg";
import { GoX } from "react-icons/go";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];

 const navLinkClass = (isMobile = false, isActive = false) =>
  `relative text-sm md:text-lg xl:text-xl 2xl:text-2xl
   font-kaisei_Decol font-normal pb-1
   ${isMobile ? "text-primary" : "text-white"}
   before:content-[''] before:absolute before:left-0 before:bottom-0
   before:h-[2px] before:w-full before:bg-current
   before:origin-left before:transition-transform before:duration-300 before:ease-out
   ${isActive ? "before:scale-x-100" : "before:scale-x-0"}
   hover:before:scale-x-100`;

  return (
    <nav className="w-full bg-primary ">
      {/* ===== Top Bar ===== */}
      <div className="flex items-center justify-between py-3 md:justify-between container ">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-[40px] w-[80px] lg:h-[50px] lg:w-[100px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 lg:gap-12 2xl:gap-x-24">
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path; // 🔑 check current route
            return (
              <Link
                key={name}
                to={path}
                className={navLinkClass(false, isActive)}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <GoX className="w-7 h-7 text-primary bg-white rounded-full p-1" />
          ) : (
            <LuMenu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`md:hidden bg-white text-primary px-6 pb-6 pt-4 z-0 absolute w-full shadow-lg
              transform transition-all duration-300
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-5">
  {links.map(({ name, path }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        key={name}
        to={path}
        className={navLinkClass(true, isActive)}
        onClick={() => setMenuOpen(false)}
      >
        {name}
      </Link>
    );
  })}
</div>

      </div>
    </nav>
  );
};

export default Navbar;
