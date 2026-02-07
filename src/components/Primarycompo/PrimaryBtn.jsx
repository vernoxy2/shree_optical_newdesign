import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ children, to }) => {
  return (
    <Link
     data-aos="zoom-in" 
      to={to}
      className="bg-[#06213C] hover:bg-white text-white hover:text-[#06213C] text-xs sm:text-base lg:text-xl py-2.5 px-5 lg:px-10 font-kanit border border-transparent hover:border-[#06213C] duration-200 rounded-lg"
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
