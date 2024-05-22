import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import staffImg1 from "../assets/staff_1.jpg.webp";
import staffImg2 from "../assets/GallaryItem5.webp";
import staffImg3 from "../assets/GallaryItem2.webp";
import Slide1 from "./slides/Slide1";
const Staff = ({ showSlide1 }) => {
  return (
    <>
      {showSlide1 && (
        <Slide1
          heading="School Staff"
          para=" Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
          live the blind texts."
        />
      )}
      <div className="flex flex-col  items-center justify-center dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 pt-4 device-screen mb-4">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="heading relative  flex justify-center mb-4">
            <h2 className="text-2xl sm:text-4xl text-center font-bold mb-4 text-teal-500 font-serif">
              Full Time Staff
            </h2>
            <span className="bg-orange-400 w-16 h-1 absolute rounded-full bottom-0"></span>
          </div>
          <p className="text-center text-md font-serif text-gray-500 mb-12  w-[80%]  md:w-[40%] ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:flex-nowrap gap-10 md:gap-0 md:px-10">
          <StaffMember
            name="Mina Collins"
            role="Teacher in Math"
            imageUrl={staffImg1}
            bio="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <StaffMember
            name="Anderson Matthew"
            role="Teacher in Music"
            imageUrl={staffImg2}
            bio="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <StaffMember
            name="Cynthia Misso"
            role="Teacher in English"
            imageUrl={staffImg3}
            bio="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
        </div>
      </div>
    </>
  );
};
const StaffMember = ({ name, role, imageUrl, bio }) => {
  return (
    <div className="flex flex-col items-center md:px-10 ">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full mb-4 h-[150px] w-[150px]"
      />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
      <p className="text-zinc-600 ">{role}</p>
      <p className="text-sm my-4 text-center w-[80%] md:w-full">{bio}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook />
        </a>
        <a href="#" className="text-blue-300 hover:text-blue-500">
          <FaTwitter />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-900">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Staff;
