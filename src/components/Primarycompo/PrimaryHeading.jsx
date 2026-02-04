import React from "react";

const PrimaryHeading = ({ children, className = "" }) => {
  return (
    <h1
     data-aos="fade" 
      className={`text-4xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center py-10 ${className}`}
    >
      {children}
    </h1>
  );
};

export default PrimaryHeading;
