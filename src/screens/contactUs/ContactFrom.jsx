import React from 'react';
import contactFormBg from "../../assets/ContactPageImg/contactFormBg.png";
import PrimaryHeading from '../../components/Primarycompo/PrimaryHeading';
import PrimaryBtn from '../../components/Primarycompo/PrimaryBtn';

const ContactForm = () => {
  return (
    <div className="py-10 md:py-20">
      {/* Heading */}
      <PrimaryHeading>
        We Are Ready To Serve, <br /> Get In Touch.
      </PrimaryHeading>

      {/* Form Container with Background */}
      <div
        className="w-full mt-10 bg-center bg-cover flex flex-col items-center justify-center py-10 px-4"
        style={{
          backgroundImage: `url(${contactFormBg})`,
          minHeight: "700px",
        }}
      >
        <form data-aos="fade-up" className="container space-y-4 md:space-y-8 ">
          {/* Inputs Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Name Input */}
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block text-[#06213c] text-xl md:text-2xl lg:text-3xl font-kaisei_Decol font-normal">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-[#06213c] text-xl md:text-2xl lg:text-3xl font-kaisei_Decol font-normal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white outline-none"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-[#06213c] text-xl md:text-2xl lg:text-3xl font-kaisei_Decol font-normal">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Type your message here..."
              className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white resize-none outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center ">
            <PrimaryBtn className="flex">Submit</PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
