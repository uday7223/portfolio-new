import React from "react";
import kandalaProject from "../../assets/kandalaJews.png";
import RoyaleKitchenProject from "../../assets/royaleKitchen.png";
import geminiClone from "../../assets/geminiClone.png";
import zeteobit from "../../assets/zeteobit.png";
import stocksPortfolio from "../../assets/stocksPortfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "ZeteoBit Business Website",
      description: `Designed and developed a modern, responsive multi-page website for ZeteoBit, an IT solutions company. Built using HTML, CSS, and JavaScript with smooth animations and interactivity. Implemented preloader, sliders, popups, and dynamic content loading. Delivered a professional UI with mobile responsiveness and deployed the final build on Render.`,
      image: zeteobit,
      link: "https://zeteobit.onrender.com/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },    
    {
      title: "Dynamic Stocks Portfolio Dashboard",
      description: `A Next.js-powered real-time portfolio tracking dashboard that fetches live stock market data from Yahoo Finance and Google Finance. This project dynamically updates CMP, P/E Ratio, and earnings every 15 seconds, helping investors monitor stock performance efficiently.`,
      image: stocksPortfolio,
      link: "https://dynamic-stocks-portfolio-dashboard.vercel.app/",
      technologies: ["Next.js", "Real-time Data", "Stock API", "Dashboard"]
    },
    {
      title: "Gemini Functional Clone",
      description: `Developed a fully functional Gemini clone utilizing the Gemini API for backend communication. Built with React for the frontend, delivering an intuitive and responsive UI/UX. Integrated Gemini API to handle user queries and responses in real-time, ensuring dynamic interactions. Implemented chat interface and real-time updates, providing a seamless user experience.`,
      image: geminiClone,
      link: "https://gemini-clone-p28c.onrender.com/",
      technologies: ["React", "Gemini API", "Chat Interface", "Real-time"]
    },
    {
      title: "Kandalaa House of Jewellery",
      description: "Kandalaa House of Jewellery is a stunning showcase of diverse jewellery collections, crafted to highlight exquisite designs. Developed using HTML and CSS, the website offers a visually appealing and user-friendly experience for jewellery enthusiasts.",
      image: kandalaProject,
      link: "https://uday7223.github.io/Kandalaa-House-of-Jewellery/",
      technologies: ["HTML", "CSS", "Jewellery", "E-commerce"]
    },
  ];

  return (
    <div className="bg-3 projects-sec flex-column" data-aos="fade-up">
      <div className="content">
        <h2 className="heading-main" id="projects">PROJECTS</h2>
        <p className="text px-5 mx-2">
          Here you will find some of the personal projects that I created
          with each project containing its own live preview!
        </p>
      </div>

      {projects.map((project, index) => (
        <article className="project p-0" key={index} data-aos="zoom-in-up">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
              <img 
                src={project.image} 
                alt={`Screenshot of ${project.title} project`}
                loading="lazy"
              />
            </div>
            <div className="details col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
              <h3 className="heading project-head">{project.title}</h3>
              <p className="text project-text">{project.description}</p>
              <div className="technologies mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="btn anchor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live ${project.title} project`}
              >
                Go live
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
