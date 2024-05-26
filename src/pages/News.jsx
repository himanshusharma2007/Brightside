import React from "react";
import NewsImg1 from "../assets/staff_1.jpg.webp";
import NewsImg2 from "../assets/GallaryItem5.webp";
import NewsImg3 from "../assets/GallaryItem4.webp";
import NewsImg4 from "../assets/about_1.jpg.webp";
import Slide1 from "./slides/Slide1";
const NewsCard = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row justify-start  h-[400px] md:h-[210px] space-x-2">
    <div className="md:w-[60%] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className=" md:h-full w-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
      />
    </div>
    <div className="flex flex-col justify-between p-4  w-full">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-teal-600 mb-2">
          {title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
      <div className="mt-3">
        <button className="bg-teal-700 text-white py-1 px-3 rounded-full hover:bg-teal-600 cursor-pointer text-[14px] h-10">
          Learn more
        </button>
      </div>
    </div>
  </div>
);

const News = ({ showSlide1 }) => {
  const newsItems = [
    {
      title: "Education for Tomorrows Leader",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: NewsImg1,
    },
    {
      title: "Enroll Your Kids This Summer to get 30% off",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: NewsImg2,
    },
    {
      title: "Education for Tomorrows Leader",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: NewsImg3,
    },
    {
      title: "Enroll Your Kids This Summer to get 30% off",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: NewsImg4,
    },
    // Add more news items here
  ];

  return (
    <>
      {showSlide1 && (
        <Slide1
          para="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          heading="School News"
        />
      )}
      <div className="container mx-auto px-8 pt-3 pb-10 device-screen  flex flex-col items-center justify-between mb-8">
        <div className="text-[35px] text-teal-500 border-b-2 border-b-teal-500 mb-4 font-medium ">
          News
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-x-12 gap-y-5  max-h-full ">
          {newsItems.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              description={news.description}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
