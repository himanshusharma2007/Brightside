import React, { useState, useEffect } from "react";

import ExpendCollapsList from "../components/ExpendCollapsList";
import Slide1 from "./slides/Slide1";
const Contact = ({ showSlide1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouthEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      author: "Ron Smith",
      designation: "Product Designer at Tester",
    },
    {
      quote:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth",
      author: "Jane Doe",
      designation: "Marketing Manager",
    },
    {
      quote:
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth",
      author: "John Wick",
      designation: "Software Engineer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  return (
    <>
      {showSlide1 && (
        <Slide1
          heading="Get In Touch"
          para="Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
      )}
      <div className="container mx-auto py-4 flex flex-col items-center ">
        <div className="text-[35px] text-teal-500 border-b-2 border-b-teal-500 mb-8 mt-8 w-fit  font-medium">
          Contact us
        </div>
        <div className="main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4">
            <div className="left">
              <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="right  flex  flex-col  md:mt-4">
              <div className="">
                <div className="mb-8 ">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.924 4.988a21.81 21.81 0 0 0 7.876 5.763a1 1 0 0 0 1.06 0A21.81 21.81 0 0 0 22.076 14.988C23.598 13.13 24 11.892 24 10a8 8 0 0 0-8-8z" />
                    </svg>
                    Location:
                  </h3>
                  <div className="details pl-8">
                    <p>43 Raymouth Rd. Baltemore, London 3910</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Open Hours:
                  </h3>
                  <div className="details pl-8">
                    <p>Sunday - Friday: 8:00 AM - 2:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email:
                  </h3>
                  <div className="details pl-8">
                    <p>info@gmail.com</p>
                  </div>
                </div>
                <div>
                  {/* Call */}
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <svg
                      className="h-6 w-6 text-teal-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call:
                  </h3>
                  <div className="details pl-8">
                    <p>+1 (123)-456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="device-screen relative flex flex-col lg:flex-row lg:space-x-16   h-auto p-4  w-full">
            <div className=" testimonials mt-12  py-3 flex flex-col  w-full  md:max-h-full ">
              <h2 className="text-3xl font-medium mb-4 text-teal-400">
                Testimonials
              </h2>
              <div className="flex-grow  ">
                <div className="testimonial-slide transition-all duration-500 md:h-full">
                  <blockquote className=" p-3 rounded-lg  md:h-full">
                    <p className="text-[22px] mb-4">
                      {testimonials[currentSlide].quote}
                    </p>
                    <div className="flex flex-col justify-center mt-10">
                      <img
                        src="https://via.placeholder.com/64"
                        alt="Avatar"
                        className="rounded-full w-16 h-16 mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-xl">
                          {testimonials[currentSlide].author}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentSlide].designation}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>  
            <div className="expendable-list mt-12 device-screen w-full  bg-gray-100 flex  flex-col justify-center px-5   pt-2 pb-6 shadow-lg">
              <div className="main min-h-full">
                <h2 className="text-3xl font-medium mb-2 text-teal-400">
                  Why Choose Us
                </h2>
                <p className="mb-2 text-[18px]">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ExpendCollapsList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
