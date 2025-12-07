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
    <div className="flex flex-col items-center py-20 px-5 bg-background text-foreground" data-aos="fade-up">
      <div className="text-center mb-16">
        <h2 className="text-[40px] font-bold leading-[60px] text-center mb-[30px] text-foreground" id="projects">PROJECTS</h2>
        <p className="text-[20px] font-medium leading-[35px] text-center mb-[30px] px-5 mx-2 text-muted-foreground max-w-[800px] mx-auto">
          Here you will find some of the personal projects that I created
          with each project containing its own live preview!
        </p>
      </div>

      {projects.map((project, index) => (
        <article className="w-[90%] md:w-[80%] flex flex-col xl:flex-row items-center justify-between gap-10 my-[50px] p-0" key={index} data-aos="zoom-in-up">
          <div className="w-full xl:w-1/2">
            <img 
              src={project.image} 
              alt={`Screenshot of ${project.title} project`}
              loading="lazy"
              className="w-full md:w-[30rem] h-auto md:h-[18rem] shadow-lg dark:shadow-none rounded-[8px] mx-auto block object-cover"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left px-4">
            <h3 className="text-[28px] font-bold my-2 text-foreground">{project.title}</h3>
            <p className="text-[18px] font-normal my-2 text-muted-foreground leading-relaxed max-w-[600px]">{project.description}</p>
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 my-[15px]">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-3 py-1.5 rounded-[20px] text-[12px] font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="bg-primary text-primary-foreground text-[20px] font-bold leading-[30px] w-full max-w-[200px] h-[50px] flex items-center justify-center rounded-[6px] border-none my-2 cursor-pointer transition-transform duration-100 ease-out tracking-[5px] hover:bg-primary/90 hover:-translate-y-[2px] no-underline mt-5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live ${project.title} project`}
            >
              Go live
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
