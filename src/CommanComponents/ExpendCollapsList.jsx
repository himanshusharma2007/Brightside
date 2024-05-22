import React, { useState } from "react";
import StdImg1 from "../assets/about_1.jpg.webp";
import StdImg2 from "../assets/GallaryItem5.webp";
import StdImg3 from "../assets/GallaryItem3.webp";
import { BiPlusMedical } from "react-icons/bi";
import { PiMinusBold } from "react-icons/pi";

const ExpendCollapsList = () => {
  const [openSection, setOpenSection] = useState(0); // Initialize with null

  const handleSectionToggle = (sectionIndex) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sectionIndex ? null : sectionIndex
    );
  };

  return (
    <div className="bottom flex flex-col space-y-3">
      <button
        className="btn w-full h-10 flex items-center px-2"
        onClick={() => handleSectionToggle(0)}
      >
        <div
          className={`first flex w-full justify-left pl-3  h-10 font-medium items-center space-x-2 sm:space-x-5 ${
            openSection === 0 ? "bg-teal-500 text-white" : ""
          }`}
        >
          <div className="pluseLogo">
            {openSection === 0 ? <PiMinusBold /> : <BiPlusMedical />}
          </div>
          <div className="text text-[13px] sm:text-[18px] w-full">
            YOUR CHILDRENS ARE SAFE WITH US
          </div>
        </div>
      </button>
      {openSection === 0 && (
        <div className="sections-contant">
          <div className="flex flex-col md:flex-row mt-5 px-4 ">
            <img
              src={StdImg1}
              alt="Kids"
              className=" w-full sm:w-40 h-40 mr-4"
            />
            <p className="text-[22px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      )}
      <button
        className="btn w-full h-10 flex items-center px-2"
        onClick={() => handleSectionToggle(1)}
      >
        <div
          className={`first flex w-full justify-left pl-3 h-10 font-medium items-center space-x-5 ${
            openSection === 1 ? "bg-teal-500 text-white" : ""
          }`}
        >
          <div className="pluseLogo">
            {openSection === 1 ? <PiMinusBold /> : <BiPlusMedical />}
          </div>
          <div className="text text-[13px] sm:text-[18px]">
            YOUR CHILDRENS ARE SAFE WITH US
          </div>
        </div>
      </button>
      {openSection === 1 && (
        <div className="sections-contant">
          <div className="flex flex-col md:flex-row mt-5 px-4">
            <img
              src={StdImg2}
              alt="Kids"
              className=" w-full sm:w-40 h-40 mr-4"
            />
            <p className="text-[22px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      )}
      <button
        className="btn w-full h-10 flex items-center px-2"
        onClick={() => handleSectionToggle(2)}
      >
        <div
          className={`first flex w-full justify-left pl-3 h-10 font-medium items-center space-x-5 ${
            openSection === 2 ? "bg-teal-500 text-white" : ""
          }`}
        >
          <div className="pluseLogo">
            {openSection === 2 ? <PiMinusBold /> : <BiPlusMedical />}
          </div>
          <div className="text text-[13px] sm:text-[18px]">
            YOUR CHILDRENS ARE SAFE WITH US
          </div>
        </div>
      </button>
      {openSection === 2 && (
        <div className="sections-contant">
          <div className="flex flex-col md:flex-row mt-5 px-4">
            <img
              src={StdImg3}
              alt="Kids"
              className=" w-full sm:w-40 h-40 mr-4"
            />
            <p className="text-[22px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpendCollapsList;
