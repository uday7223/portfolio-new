import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.jpg";
import kandalaProject from "../assets/kandalaJews.png";
import RoyaleKitchenProject from "../assets/royaleKitchen.png";
import geminiClone from "../assets/geminiClone.png";
import emailjs from 'emailjs-com';
import AOS from "aos";

const Portfolio = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

      const [isResponsive, setIsResponsive] = useState(false);

      const toggleMenu = () => {
        setIsResponsive((prev)=> !prev);
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

  const projects = [
    {
      title:"Gemini Functional Clone",
      description:` Developed a fully functional Gemini clone utilizing the
 Gemini API for backend communication. Built with React
 for the frontend, delivering an intuitive and responsive
 UI/UX. Integrated Gemini API to handle user queries and
 responses in real-time, ensuring dynamic interactions.
 Implemented chat interface and real-time updates,
 providing a seamless user experience.`,
 image:geminiClone,
 link:"https://gemini-clone-p28c.onrender.com/"
    },
    {
      title: "Kandalaa House of Jewellery",
      description:
        "Kandalaa House of Jewellery is a stunning showcase of diverse jewellery collections, crafted to highlight exquisite designs. Developed using HTML and CSS, the website offers a visually appealing and user-friendly experience for jewellery enthusiasts.",
      image: kandalaProject,
      link: "https://uday7223.github.io/Kandalaa-House-of-Jewellery/",
    },
    {
      title: "Royale Kitchen And Brews",
      description:
        "Royale Kitchen And Brews is an elegant platform displaying a wide variety of food and drink options, designed to tantalize the taste buds. Developed using HTML, CSS, and JavaScript, the website offers an engaging and interactive experience for culinary enthusiasts.",
      image: RoyaleKitchenProject,
      link: "https://uday7223.github.io/RoyaleKitchenAndBrews/",
    },
  ];
  



  return (
    <>
      <div className="main-con" >
        <div className="bg-1" data-aos="fade-up">
          <header className="    w-100">
            <div  data-aos="fade-right" className="head-left justify-content-start  col-sm-5  col-md-4 col-lg-4col-xl-4 col-xxl-4 d-flex justify-content-center align-items-center">
              <a href="/">
                <img src={logo} alt="" />
              </a>
              <p className="mb-0">
                UDAY KUMAR N &nbsp; <i className="fa-solid fa-heart"></i>
              </p>
            </div>
            <div className={`head-right pe-5 justify-content-end d-flex  col-sm-7  col-md-8 col-lg-8col-xl-8 col-xxl-8 ${isResponsive ? "responsive" : ""}`} data-aos="fade-left">
      <ul>
      <li>
          <a href="#!" className="icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </a>
        </li>
        <li><a href="/">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
       
      </ul>
    </div>
          </header>
          <div className="content"  data-aos="zoom-in">
            <div className="heading">HEY, I'M UDAY KUMAR N</div>
            <div className="text">
            As a dedicated MCA graduate, I possess a strong foundation in web development with a passion for creating innovative
 and user friendly web applications. I am committed to delivering high-quality, maintainable code while driving successful
 outcomes for organization. Eager to continue my professional growth while fostering collaboration and sharing my skills
 in web technologies.
            </div>
            <button className="button" onClick={() => window.location = '#projects'}>PROJECTS</button>
          </div>
          <div className="bg-1-social" data-aos="fade-up">
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

        <div className="bg-2" data-aos="fade-up">
          <div className="content">
            <div className="heading" id="about">
              ABOUT ME
            </div>
            <div className="text px-5 mx-2">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </div>
          </div>

          <div className="bg-2-con" data-aos="fade-up">
            <div className="bg-2-con-1" data-aos="fade-right">
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

            <div className="bg-2-con-2" data-aos="fade-left">
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
          <button className="btn mt-3 contact-btn" onClick={() => window.location = '#contact'} >CONTACT</button>
        </div>

<div className="bg-3 projects-sec  flex-column " data-aos="fade-up">
  <div className="content">
    <div className="heading-main" id="projects">PROJECTS</div>
    <div className="text px-5 mx-2">
      Here you will find some of the personal projects that I created
      with each project containing its own live preview!
    </div>
  </div>

  {projects.map((project, index) => (
    <div className="project p-0" key={index} data-aos="zoom-in-up">
     <div className="row">
     <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="details col-sm-12  col-md-12 col-lg-12 col-xl-6 col-xxl-6">
        <div className="heading project-head">{project.title}</div>
        <div className="text project-text">{project.description}</div>
        <a
          href={project.link}
          className="btn anchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go live
        </a>
      </div>
     </div>
    </div>
  ))}
</div>

        <div className="bg-3" data-aos="fade-up">
          <div className="content">
            <div className="heading-main " id="contact" >
              CONTACT
            </div>
            <div className="text px-5 mx-5">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible.
            </div>
          </div>
<form className="contact" ref={form} onSubmit={sendEmail} data-aos="zoom-in">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone Number" maxLength="10" />
        <textarea className="pt-2" name="message" placeholder="Message" maxLength={150} required />
        <button type="submit" className="btn">SEND</button>
      </form>
        </div>

        <footer className="d-flex justify-content-center " >
          <div className="con1  " data-aos="fade-right">
            <div className="content ">
              <div className="heading">UDAY KUMAR N</div>
              <div className="text pe-5 me-5">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product.
              </div>
            </div>
          </div>
          <div className="con2" data-aos="fade-left">
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
