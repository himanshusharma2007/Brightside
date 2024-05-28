import React from "react";
import Slide2 from "./slides/Slide2";
import About from "./About";
import Contact from "./Contact";
import News from "./News";
import Staff from "./Staff";
import PriceSection from "../components/priceSection";
function Home() {
  return (
    <div>
      <section className="hero-section    relative">
        <div>
          <div className="slide slide1  mx-auto lg:px-[100px] flex items-center justify-center  text-white  ">
            <div className="flex w-full min-h-full   z-10 items-center  px-4 lg:px-4 justify-center text-center lg:justify-start lg:text-left">
              <div className="main anime-div flex flex-col lg:w-[43%] px-2  h-full  ">
                <h1 className="text-[40px]  font-bold  font-serif">
                  Learning Center for Your Kids
                </h1>
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute inset-0 flex flex-col items-center justify-center"></div>
                </div>
                <p className="mb-4 sm:mb-8 text-lg">
                  "Every day is a new beginning, A chance to embrace the
                  Brightside. Where learning blooms and dreams take flight,
                  Brightside guides young minds to shine bright."
                </p>
                <div className="flex  space-x-4  justify-center lg:justify-start">
                  <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600 cursor-pointer">
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slide2 />
        <About showSlide1={false} />
        <News showSlide1={false} />
        <Staff showSlide1={false} />
        <Contact showSlide1={false} />
        <PriceSection />
      </section>
    </div>
  );
}

export default Home;
