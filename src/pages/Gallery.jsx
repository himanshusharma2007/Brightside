import React from "react";
import GalleryItem1 from "../assets/GallaryItem1.webp";
import GalleryItem2 from "../assets/GallaryItem2.webp";
import GalleryItem3 from "../assets/GallaryItem3.webp";
import GalleryItem4 from "../assets/GallaryItem4.webp";
import GalleryItem5 from "../assets/staff_1.jpg.webp";
import GalleryItem6 from "../assets/GallaryItem5.webp";
import Slide1 from "./slides/Slide1";

const Gallery = ({ showSlide1 }) => {
  return (
    <>
      {showSlide1 && (
        <Slide1
          para="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          heading="Our Gallery"
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-[35px] text-teal-500 border-b-2 border-b-teal-500 mb-4 font-medium">
          Gallery
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 custom-grid">
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem1}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 row-span-2">
            <img
              src={GalleryItem2}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem3}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem6}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem5}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem4}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 row-span-2">
            <img
              src={GalleryItem1}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem3}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem6}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={GalleryItem5}
              alt="Description"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
