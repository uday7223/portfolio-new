import React, { useRef } from "react";
import logo from "../assets/logo.jpg";
import kandalaProject from "../assets/kandalaJews.png";
import RoyaleKitchenProject from "../assets/royaleKitchen.png";
import emailjs from 'emailjs-com';

const Portfolio = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_huog5b6',
          'template_18astu8',
          form.current,
          'GYtIIFDERyr7IMhqU'
        )
        .then((result) => {
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form
        }, (error) => {
          alert('Failed to send message, please enter a valid email address!');
          console.error(error.text);
        });
      };



  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "BOOSTRAP",
    "SASS",
    "REACT JS",
    "NODE JS",
    "EXPRESS JS",
    "MONGODB",
    "FIREBASE",
    "REST API",
    "JSON",
    "GITHUB",
    "GIT",
    "MYSQL",
  ];

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
      <div className="main-con">
        <div className="bg-1">
          <header className="    w-100">
            <div className="head-left justify-content-start col-md-4 col-lg-4 col-sm-4 col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center">
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <p className="mb-0">
                UDAY KUMAR N &nbsp; <i className="fa-solid fa-heart"></i>
              </p>
            </div>
            <div className="head-right justify-content-center d-flex col-md-8 col-lg-8 col-sm-8 col-xl-8 col-xxl-8" >
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#projects">PROJECTS</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </header>
          <div className="content">
            <div className="heading">HEY, I'M UDAY KUMAR N</div>
            <div className="text">
              As an ambitious MCA graduate adept at problem-solving,
              programming, and crafting clean, maintainable code. Experienced in
              data structures, algorithms. Aspiring to pursue a career in
              software engineering, harnessing a diverse skill set.
            </div>
            <button className="button" onClick={() => window.location = '#projects'}>PROJECTS</button>
          </div>
          <div className="bg-1-social">
            {socialMediaLinks.map((link, index) => (
              <div key={index} className="social">
                {link.url && (
                  <a href={link.url} target="_blank">
                    <i className={link.icon} style={{ color: "#112d4e" }}></i>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="bg-1-scroll-btn"></div>
        </div>

        <div className="bg-2">
          <div className="content">
            <div className="heading" id="about">
              ABOUT ME
            </div>
            <div className="text">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </div>
          </div>

          <div className="bg-2-con">
            <div className="bg-2-con-1">
              <div className="heading">Get to know me!</div>
              <div className="text">
                I'm a <span>Frontend Focused Web Developer</span> building and
                managing the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the <span>Projects section.</span> I also like sharing
                content related to the stuff that I have learned over the years
                in <span>Web Development</span> so it can help other people of
                the Dev Community. Feel free to Connect or Follow me on my
                Linkedin and Instagram where I post useful content related to
                Web Development and Programming. I'm open to{" "}
                <span>Job opportunities</span> where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to <span>contact me.</span>
              </div>
            </div>

            <div className="bg-2-con-2">
              <div className="heading">My Skills</div>
              <section>
                {skills.map((skill) => {
                  return (
                    <div className="text" key={skill}>
                      {skill}
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
          <button className="btn mt-3" onClick={() => window.location = '#contact'} >CONTACT</button>
        </div>

        <div className="bg-3">
          <div className="content">
            <div className="heading-main" id="projects">
              PROJECTS
            </div>
            <div className="text">
              Here you will find some of the personal projects that I created
              with each project containing its own live preview!
            </div>
          </div>

          <div className="project">
            <div>
              <img src={kandalaProject} alt="Kandalaa House of Jewellery" />
            </div>
            <div className="details">
              <div className="heading project-head">
                Kandalaa House of Jewellery
              </div>
              <div className="text project-text">
                Kandalaa House of Jewellery is a stunning showcase of diverse
                jewellery collections, crafted to highlight exquisite designs.
                Developed using HTML and CSS, the website offers a visually
                appealing and user-friendly experience for jewellery
                enthusiasts.
              </div>
              <a
                href="https://uday7223.github.io/Kandalaa-House-of-Jewellery/"
                className="btn anchor"
                target="_blank"
              >
                Go live
              </a>
            </div>
          </div>

          <div className="project">
            <div>
              <img src={RoyaleKitchenProject} alt="Royale Kitchen And Brews" />
            </div>
            <div className="details">
              <div className="heading project-head">
                Royale Kitchen And Brews
              </div>
              <div className="text project-text">
                Royale Kitchen And Brews is an elegant platform displaying a
                wide variety of food and drink options, designed to tantalize
                the taste buds. Developed using HTML, CSS, and JavaScript, the
                website offers an engaging and interactive experience for
                culinary enthusiasts.
              </div>
              <a
                href="https://uday7223.github.io/RoyaleKitchenAndBrews/"
                className="btn anchor"
                target="_blank"
              >
                Go live
              </a>
            </div>
          </div>
        </div>

        <div className="bg-3">
          <div className="content">
            <div className="heading-main " id="contact">
              CONTACT
            </div>
            <div className="text">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible.
            </div>
          </div>
<form className="contact" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone Number" maxLength="10" />
        <textarea className="pt-2" name="message" placeholder="Message" maxLength={150} required />
        <button type="submit" className="btn">SEND</button>
      </form>
        </div>

        <footer>
          <div className="con1">
            <div className="content">
              <div className="heading">UDAY KUMAR N</div>
              <div className="text pe-5 me-5">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </div>
            </div>
          </div>
          <div className="con2">
            <div className="content">
              <div className="heading">SOCIAL</div>

              <div className="bg-1-social">
            {socialMediaLinks.map((link, index) => (
              <div key={index} className="social">
                {link.url && (
                  <a href={link.url} target="_blank">
                    <i className={link.icon} style={{ color: "white" }}></i>
                  </a>
                )}
              </div>
            ))}
          </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
