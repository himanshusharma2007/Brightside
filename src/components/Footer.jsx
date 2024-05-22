import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaRss,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Our School</h3>
            <p className="mb-4">
              Nurturing young minds with a comprehensive and engaging curriculum
              designed to foster a love for learning in a safe and supportive
              environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaPinterest size={24} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaRss size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>Early Childhood Education</li>
              <li>STEM Learning</li>
              <li>Arts & Crafts</li>
              <li>Physical Education</li>
              <li>After School Activities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-400 w-16 h-16"></div>
              <div className="bg-gray-400 w-16 h-16"></div>
              <div className="bg-gray-400 w-16 h-16"></div>
              <div className="bg-gray-400 w-16 h-16"></div>
              <div className="bg-gray-400 w-16 h-16"></div>
              <div className="bg-gray-400 w-16 h-16"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm">
              123 Learning Lane, Knowledge City, ABC 12345
            </p>
            <p className="text-sm">+1(555)-123-4567</p>
            <p className="text-sm">+1(555)-123-4568</p>
            <p className="text-sm">contact@ourschool.com</p>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            Copyright &copy;2024 All rights reserved | This website is made with
            &#10084; by Himanshu Sharma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
