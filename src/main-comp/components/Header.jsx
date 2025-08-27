import React, { useState } from "react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive((prev) => !prev);
    console.log('Menu toggled:', !isResponsive); // Debug log
  };

  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/udaykumar-n-83907a230/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/uday7223",
      icon: "fa-brands fa-github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/omfg_its_uday/",
      icon: "fa-brands fa-square-instagram",
    },
    {
      name: "Twitter",
      url: "/",
      icon: "fa-brands fa-square-x-twitter",
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~019b9d4e75bb0703b3",
      icon: "fa-brands fa-square-upwork",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCOwD3tDeafAGYw3dT8imHIg",
      icon: "fa-brands fa-youtube fa-xs",
    },
  ];

  return (
    <>
      <header className="w-100">
        <div className="head-left ps-3 justify-content-start col-xs-10 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center">
          <a href="/" aria-label="Go to homepage">
            <img src={logo} alt="Uday Kumar N Logo" />
          </a>
          <p className="mb-0">
            UDAY KUMAR N &nbsp; <i className="fa-solid fa-heart" aria-hidden="true"></i>
          </p>
        </div>
        <div className={`head-right pe-5 justify-content-end d-flex col-xs-2 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ${isResponsive ? "responsive" : ""}`}>
          <ul>
            <li>
              <button 
                className="icon" 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isResponsive}
              >
                <i className={isResponsive ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i>
              </button>
            </li>
            <li><a href="/" aria-label="Go to homepage">HOME</a></li>
            <li><a href="#about" aria-label="Go to about section">ABOUT</a></li>
            <li><a href="#projects" aria-label="Go to projects section">PROJECTS</a></li>
            <li><a href="#contact" aria-label="Go to contact section">CONTACT</a></li>
          </ul>
        </div>
      </header>
      
      <div className="bg-1-social">
        {socialMediaLinks.map((link, index) => (
          <div key={index} className="social">
            {link.url && (
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name} profile`}
              >
                <i className={link.icon} style={{ color: "#112d4e" }} aria-hidden="true"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
