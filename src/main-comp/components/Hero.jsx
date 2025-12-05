import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-[90%] md:w-[60%] text-center my-auto px-5 md:px-0" data-aos="zoom-in">
      <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-extrabold leading-[1.3] md:leading-[1.4] lg:leading-[90px] text-center my-5 md:my-[30px] lg:my-[30px]">HEY, I'M UDAY KUMAR N</h1>
      <p className="text-[16px] md:text-[20px] lg:text-[22px] font-normal leading-relaxed text-center my-5 md:my-[20px] lg:my-[30px]">
        As a dedicated MCA graduate, I possess a strong foundation in web development with a passion for creating innovative
        and user friendly web applications. I am committed to delivering high-quality, maintainable code while driving successful
        outcomes for organization. Eager to continue my professional growth while fostering collaboration and sharing my skills
        in web technologies.
      </p>
      <button 
        className="bg-[#112D4E] text-[16px] md:text-[20px] font-bold leading-[30px] min-w-[120px] md:min-w-[200px] h-auto py-3 md:py-0 md:h-[50px] rounded-[6px] border-none text-white my-2 cursor-pointer transition-transform duration-100 ease-out tracking-[2px] md:tracking-[5px] hover:bg-[#112d4ee5] hover:-translate-y-0.5" 
        onClick={scrollToProjects}
        aria-label="View my projects"
      >
        PROJECTS
      </button>
    </div>
  );
};

export default Hero;
