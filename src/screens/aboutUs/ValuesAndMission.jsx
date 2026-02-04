import React from 'react';
import aboutValueMissionImg from "../../assets/AboutPageImgs/aboutValueMissionImg.png";
import PrimaryHeading from '../../components/Primarycompo/PrimaryHeading';

const ValuesAndMission = () => {
  return (
    <div className="py-10 md:py-20 space-y-5 md:space-y-8">
      <PrimaryHeading className='pb-10'>Our Values and Mission</PrimaryHeading>

      <div data-aos="fade" className="container grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
        <div className="flex flex-col gap-4 md:gap-7 text-center lg:text-left">
          <h2 data-aos="fade-right" className="text-2xl md:text-4xl 2xl:text-5xl font-normal text-[#06213C] font-kaisei_Decol">
            Clarity in Vision, Integrity in Service
          </h2>
          <p data-aos="fade-right" className="text-base md:text-xl xl:text-2xl font-normal text-[#334155] font-kanit leading-relaxed">
            Committed to clarity, care, and quality eyewear that enhances
            vision and builds lasting customer trust.
          </p>
        </div>

        <img
         data-aos="zoom-in"
          src={aboutValueMissionImg}
          alt="About Values and Mission"
          className=" w-full scale-125 xl:scale-150 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ValuesAndMission;
