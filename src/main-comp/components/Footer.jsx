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
    <footer className="bg-black text-white w-full py-20 min-h-[40vh] flex items-center">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10 lg:gap-20">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="md:max-w-[80%]">
            <h3 className="text-[24px] font-bold tracking-[2px] mb-4">UDAY KUMAR N</h3>
            <p className="text-[1rem] leading-loose text-gray-300">
              A Frontend focused Web Developer building the Frontend of
              Websites and Web Applications that leads to the success of the
              overall product.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="md:max-w-[80%]">
            <h3 className="text-[24px] font-bold tracking-[2px] mb-4">SOCIAL</h3>
            <div className="flex bg-black shadow-[1px_1px_40px_4px_rgba(119,119,131,0.411)] rounded-[10px] p-2 gap-4 justify-center md:justify-start">
              {socialMediaLinks.map((link, index) => (
                <div key={index} className="p-2 transition-transform duration-200 hover:scale-110">
                  {link.url && (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Visit ${link.name} profile`}
                      className="block"
                    >
                      <i className={`${link.icon} text-xl`} style={{ color: "white" }} aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
