import React from "react";
import priceLogo1 from '../assets/priceLogo1.webp'
import priceLogo2 from '../assets/priceLogo2.webp'
import priceLogo3 from '../assets/priceLogo3.webp'
const PriceSection = () => {
  return (
    <div className="bg-zinc-100 px-6 sm:px-12 py-2 device-screen mb-2">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-between">
        <div className="top-head flex flex-col items-center justify-center">
          <div className="text-[35px] w-fit text-teal-500 border-b-2 border-b-teal-500 mb-4 md:mb-2 font-medium ">
            Pricing
          </div>
          <p className="text-zinc-600  mb-12">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mt-4">
          <div className="bg-white  w-full  sm:h-[350px] rounded-lg p-6 shadow-md">
            <img
              src={priceLogo3}
              alt="Infant logo"
              className="mx-auto h-[100px] w-[70px] mb-4 -mt-[70px]"
            />
            <h3 className="text-xl font-semibold text-zinc-800  mb-2">
              Infant
            </h3>
            <p className="text-zinc-600  mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="text-2xl font-bold text-zinc-800  mb-2">
              $50.99 <span className="text-sm font-medium">/month</span>
            </div>
            <button className="w-full mt-4 sm:mt-10 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 rounded-lg">
              GET STARTED
            </button>
          </div>
          <div className="bg-white  w-full  sm:h-[350px] rounded-lg p-6 shadow-md">
            <img
              src={priceLogo1}
              alt="Toddler logo"
              className="mx-auto h-[100px] w-[70px] mb-4 -mt-[70px]"
            />
            <h3 className="text-xl font-semibold text-zinc-800  mb-2">
              Toddler
            </h3>
            <p className="text-zinc-600  mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="text-2xl font-bold text-zinc-800  mb-2">
              $99.99 <span className="text-sm font-medium">/month</span>
            </div>
            <button className="w-full mt-4 sm:mt-10 bg-green-500 border-2  text-white hover:bg-white hover:text-green-500 hover:border-green-500 py-2 rounded-lg">
              GET STARTED
            </button>
          </div>
          <div className=" bg-white w-full  sm:h-[350px] g-white rounded-lg p-6 shadow-md">
            <img
              src={priceLogo2}
              alt="Lad logo"
              className="mx-auto h-[100px] w-[70px] mb-4 -mt-[70px]"
            />
            {/* <a href="" title="girl stickers">
              Girl stickers created by Surfsup.Vector - Flaticon
            </a> */}
            <h3 className="text-xl font-semibold text-zinc-800  mb-2">Lad</h3>
            <p className="text-zinc-600  mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="text-2xl font-bold text-zinc-800  mb-2">
              $199.99 <span className="text-sm font-medium">/month</span>
            </div>
            <button className="w-full mt-4 sm:mt-10 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 rounded-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
