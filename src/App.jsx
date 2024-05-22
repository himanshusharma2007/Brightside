import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../public/anime.js";
import "../public/anime.css";


import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Staff from "./pages/Staff";
import Register from "./pages/Register.jsx";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About showSlide1={true} />} />
            <Route path="/contact" element={<Contact showSlide1={true} />} />
            <Route path="/news" element={<News showSlide1={true} />} />
            <Route path="/gallery" element={<Gallery showSlide1={true} />} />
            <Route path="/staff" element={<Staff showSlide1={true} />} />
            <Route path="/register" element={<Register />} />
            {/* Add more routes for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
