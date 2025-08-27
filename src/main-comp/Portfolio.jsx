import React, { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="main-con">
        <div className="bg-1" data-aos="fade-up">
          <Header />
          <Hero />
          <div className="bg-1-scroll-btn"></div>
        </div>

        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
