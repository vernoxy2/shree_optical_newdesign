import React from 'react';
import aboutValueMissionImg from "../../assets/AboutPageImgs/aboutValueMissionImg.png";
import PrimaryHeading from '../../components/Primarycompo/PrimaryHeading';

const ValuesAndMission = () => {
  return (
    <section style={{backgroundImage: `url(${aboutValueMissionImg})`}} className='bg-cover bg-center h-[500px] md:h-[600px]'>
      {/* <img src={aboutValueMissionImg} alt="" className='h-full w-full' /> */}
      <div data-aos="fade-up" className='container flex justify-end items-end h-full'>
        <div className='backdrop-blur-md bg-white/5 rounded-md p-6 md:p-10 text-white border border-white md:w-2/3 xl:w-2/5 mt-auto'>
          <h1 className='text-2xl md:text-4xl 2xl:text-5xl font-kaisei_Decol'>Our Values & Mission</h1>
          <p className='md:text-lg xl:text-2xl w-[90%]'>Committed to clarity, care, and quality eyewear that enhances vision and builds lasting customer trust.</p>
        </div>

      </div>
      
    </section>
  );
};

export default ValuesAndMission;
