import React from "react";
import headerImg1 from "../../assets/headerImg1.png";

const NewSpecsHover = () => {
  return (
    <div className="relative inline-block w-full h-full group overflow-hidden z-0 p-2 py-20">
      {/* Hoverable Image */}
      <img
        src={headerImg1}
        alt="headerImg1"
        className="w-[90%] h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ml-auto z-10"
      />

      {/* Overlay Container */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">

        {/* Front Label */}
        <div
          className="absolute text-white font-bold bg-black/70 px-2.5 py-1.5 rounded-md text-sm pointer-events-auto leading-tight
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
          style={{ top: "21%", left: "0%" }}
        >
          Front
          <br />
          Tortoiseshell acetate (plastic)
          <span
            className="block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white origin-top transition-all duration-500 ease-out group-hover:h-[90px] h-0"
            style={{ top: "100%" }}
          ></span>
        </div>

        {/* Lens Details Label */}
        <div
          className="absolute text-white font-bold bg-black/70 px-2.5 py-1.5 rounded-md text-sm pointer-events-auto leading-tight
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out"
          style={{ top: "55%", left: "40%" }}
        >
          Lens Details
          <br />
          Lightweight, anti-glare, UV-protected
          <span
            className="block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white origin-bottom transition-all duration-500 delay-100 ease-out group-hover:h-[150px] h-0"
            style={{ bottom: "100%" }}
          ></span>
        </div>

        {/* Nose Pads Label */}
        <div
          className="absolute text-white font-bold bg-black/70 px-2.5 py-1.5 rounded-md text-sm pointer-events-auto leading-tight
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 delay-200 ease-out"
          style={{ top: "3%", left: "17.5%" }}
        >
          Nose Pads
          <br />  
          Adjustable, clear silicone nose pads
          <span
            className="block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white origin-top transition-all duration-1000 delay-200 ease-out group-hover:h-[200px] h-0"
            style={{ top: "100%" }}
          ></span>
        </div>

        {/* Temples (Arms) Label */}
        <div
          className="absolute text-white font-bold bg-black/70 px-2.5 py-1.5 rounded-md text-sm pointer-events-auto leading-tight
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 delay-300 ease-out"
          style={{ top: "80%", left: "19  %" }}
        >
          Temples (Arms)
          <br />
          dual-color transition
          <br />
          (blue-grey to brown tip)
          <span
            className="block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white origin-bottom transition-all duration-1000 delay-300 ease-out group-hover:h-[110px] h-0"
            style={{ bottom: "100%" }}
          ></span>
        </div>

      </div>
    </div>
  );
};

export default NewSpecsHover;
