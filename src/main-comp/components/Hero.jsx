import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content" data-aos="zoom-in">
      <h1 className="heading">HEY, I'M UDAY KUMAR N</h1>
      <p className="text">
        As a dedicated MCA graduate, I possess a strong foundation in web development with a passion for creating innovative
        and user friendly web applications. I am committed to delivering high-quality, maintainable code while driving successful
        outcomes for organization. Eager to continue my professional growth while fostering collaboration and sharing my skills
        in web technologies.
      </p>
      <button 
        className="button" 
        onClick={scrollToProjects}
        aria-label="View my projects"
      >
        PROJECTS
      </button>
    </div>
  );
};

export default Hero;
