import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import ThemeToggle from "./ThemeToggle";

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
      <header className="w-full flex justify-between items-center px-5 py-2.5 fixed top-0 z-[1000] text-foreground bg-background/95 backdrop-blur-md transition-all duration-1000 min-h-[70px] border-b border-border shadow-sm dark:shadow-none">
        <div className="flex items-center gap-8 flex-1">
          <a href="/" aria-label="Go to homepage">
            <img
              src={logo}
              alt="Uday Kumar N Logo"
              className="w-[50px] h-[50px] rounded-full transition-all duration-200 hover:shadow-[1px_1px_20px_0px_white]"
            />
          </a>
          <p className="mb-0 m-0 no-underline bg-gradient-to-r from-[#112D4E] via-[#764ba2] to-[#112D4E] dark:from-[#667eea] dark:via-[#fff] dark:to-[#667eea] bg-[length:200%_auto] bg-[-100%_center] bg-clip-text text-transparent transition-[background-position] duration-500 whitespace-nowrap hover:bg-[0%_center]">
            UDAY KUMAR N &nbsp; <i className="fa-solid fa-heart" aria-hidden="true"></i>
          </p>
        </div>

        <div className="flex-none">
          <ul className={`list-none flex items-center gap-4 ${isResponsive
            ? 'flex-col absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md rounded-b-[15px] shadow-lg py-5 pt-0 z-[1000] border-b border-border'
            : 'hidden md:flex'}`}>
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item} className={isResponsive ? 'block m-0 w-full' : 'm-0 p-0'}>
                <a
                  href={item === 'HOME' ? '/' : `#${item.toLowerCase()}`}
                  aria-label={`Go to ${item.toLowerCase()} section`}
                  className={`no-underline bg-gradient-to-r from-[#112D4E] via-[#764ba2] to-[#112D4E] dark:from-[#667eea] dark:via-[#fff] dark:to-[#667eea] bg-[length:200%_auto] bg-[-100%_center] bg-clip-text text-transparent transition-[background-position] duration-400 px-4 py-2.5 rounded-[5px] hover:bg-[0%_center] ${isResponsive ? 'block text-center text-[16px] w-full py-4' : ''}`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="theme-toggle-container ml-4">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Menu Button (Hamburger) - Visible only on small screens */}
          <div className="md:hidden flex items-center">
            <button
              className="bg-transparent border-none text-white text-[18px] p-2 cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isResponsive}
            >
              <i className={isResponsive ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Social Media Sidebar - Hidden on mobile */}
      <div className="hidden md:block absolute top-[35%] left-0 bg-background border border-border shadow-lg p-2 rounded-r-[10px] z-[900]">
        {socialMediaLinks.map((link, index) => (
          <div key={index} className="scale-200 p-4 cursor-pointer">
            {link.url && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name} profile`}
                className="block hover:scale-110 transition-transform duration-200"
              >
                <i className={link.icon} style={{ color: "var(--foreground)" }} aria-hidden="true"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
