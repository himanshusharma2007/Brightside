import React from "react";
import aboutImage from "../assets/about_1.jpg.webp";
import Slide1 from "./slides/Slide1";

const About = ({ showSlide1 }) => {
  return (
    <>
      {showSlide1 && (
        <Slide1
          heading="About Us"
          para=" Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
          live the blind texts."
        />
      )}
      <section className="about-us device-screen ">
        <div className="w-full h-full bg-gray-100  text-black mb-4  pt-3  pb-6 md:pt-0 flex   ">
          <div className=" md:flex md:items-center md:justify-between mt-2 md:mt-0  w-[100%] h-full  ">
            <div className="left mb-10 md:mb-0 md:w-1/2 flex md:justify-center items-center  h-full ">
              <div className="  md:mx-20 mx-4">
                <h2 className="text-4xl font-bold mb-4 text-teal-500 font-serif slide-in">
                  About Us
                </h2>
                <div className="slide-in h-full">
                  <p className=" w-auto flex-wrap">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <ul className="list-disc pl-6 mb-6 ">
                    <li>Separated they live</li>
                    <li>Bookmarksgrove right at the coast</li>
                    <li>large language ocean</li>
                  </ul>
                </div>

                <div className="container mb-12  mt-12 flex md:items-center space-x-20 md:space-x-3 slide-in">
                  <div className="md:w-40 mb-8 w-fit md:mb-0 flex  ">
                    <div className=" ">
                      <h3 className="text-4xl font-bold mb-2">4,000+</h3>
                      <p className="text-gray-600">Students</p>
                    </div>
                  </div>
                  <div className="md:w-40 mb-8 md:mb-0  w-fit">
                    <div className="">
                      <h3 className="text-4xl font-bold mb-2">49</h3>
                      <p className="text-gray-600">Teachers</p>
                    </div>
                  </div>
                  <div className="md:w-40  w-fit ">
                    <div className="">
                      <h3 className="text-4xl font-bold mb-2">12</h3>
                      <p className="text-gray-600">Awards</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 slide-in">
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700">
                    ADMISSION
                  </button>
                </div>
              </div>
            </div>

            <div className="right md:w-1/2 flex justify-center items-center  h-full slide-in">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-[80%] max-h-[80vh] rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
