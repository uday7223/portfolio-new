import React from "react";

const Footer = () => {
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
    <footer className="flex flex-col md:flex-row justify-center min-h-[40vh] h-auto bg-black text-white w-full">
      <div className="w-full md:w-[45%] p-[2rem_1rem] md:p-[5rem_4rem] text-center md:text-left">
        <div className="md:w-[60%]">
          <h3 className="text-[24px] text-center md:text-left mb-[15px] md:mb-0 font-bold tracking-[2px]">UDAY KUMAR N</h3>
          <p className="text-[1rem] text-center md:text-left leading-loose tracking-normal md:pr-0 mt-4 text-gray-300">
            A Frontend focused Web Developer building the Frontend of
            Websites and Web Applications that leads to the success of the
            overall product.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[45%] p-[2rem_1rem] md:p-[5rem_4rem] flex flex-col items-center md:items-start mb-[79px] md:mb-0">
        <div className="content">
          <h3 className="text-[24px] text-center md:text-left mb-[15px] md:mb-5 font-bold tracking-[2px]">SOCIAL</h3>
          <div className="flex bg-black shadow-[1px_1px_40px_4px_rgba(119,119,131,0.411)] cursor-pointer rounded-[10px] p-2 relative top-0 md:top-[10%] justify-center md:justify-start">
            {socialMediaLinks.map((link, index) => (
              <div key={index} className="mx-[10px] scale-120 p-[0.5rem] cursor-pointer hover:scale-120 transition-all duration-200">
                {link.url && (
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.name} profile`}
                    className="block"
                  >
                    <i className={`${link.icon} hover:scale-125 transition-all duration-200 ease-linear`} style={{ color: "white" }} aria-hidden="true"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
