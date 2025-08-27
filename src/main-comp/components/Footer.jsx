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
    <footer className="d-flex justify-content-center">
      <div className="con1">
        <div className="content">
          <h3 className="heading">UDAY KUMAR N</h3>
          <p className="text pe-5 me-5">
            A Frontend focused Web Developer building the Frontend of
            Websites and Web Applications that leads to the success of the
            overall product.
          </p>
        </div>
      </div>
      <div className="con2">
        <div className="content">
          <h3 className="heading">SOCIAL</h3>
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
                    <i className={link.icon} style={{ color: "white" }} aria-hidden="true"></i>
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
