import React, { useEffect } from "react";
import AOS from "aos";
import { ThemeProvider } from "./context/ThemeContext";
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
    <ThemeProvider>
      <div className="flex flex-col relative">
        <div className="h-screen flex flex-col items-center bg-hero-bg dark:bg-hero-bg-dark" data-aos="fade-up">
          <Header />
          <Hero />
          <div className="bg-1-scroll-btn"></div>
        </div>

        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;
