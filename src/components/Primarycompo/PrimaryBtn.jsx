import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ children, to }) => {
  return (
    <Link
     data-aos="zoom-in" 
      to={to}
      className="bg-primary hover:bg-transparent text-white hover:text-primary text-xs sm:text-base lg:text-xl py-2.5 px-5 lg:px-10 font-kanit border border-transparent hover:border-primary duration-200 rounded"
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
