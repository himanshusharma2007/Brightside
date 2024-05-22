import React from "react";

const Slide1 = ({ para, heading, styleSlide1 }) => {
  return (
    <div>
      <div
        style={styleSlide1}
        className="slide slide1  mx-auto  flex items-center justify-center  text-white  "
      >
        <div className="flex w-full min-h-full   z-10 items-center  px-4  justify-center text-center ">
          <div className="main  anime-div flex flex-col    px-2  h-full   lg:w-[35%] ">
            <h1 className="text-[50px]  font-bold  font-serif mb-4">
              {heading}
            </h1>

            <p className=" mb-8">{para}</p>
            <div className="flex  space-x-4  justify-center ">
              <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600 cursor-pointer">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
