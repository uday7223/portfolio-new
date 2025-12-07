import React from "react";

const About = () => {
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center bg-black dark:bg-about-bg-dark pt-12 pb-20 relative w-[90%] md:w-[70%] lg:w-[80%] mx-auto rounded-[16px] my-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30" data-aos="fade-up">
      <div className="w-full text-center mb-8">
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-[2px] mb-5 text-text-primary dark:text-white" id="about">
          ABOUT ME
        </h2>
        <p className="text-[18px] md:text-[20px] font-medium leading-[1.6] px-5 max-w-[800px] mx-auto text-text-secondary dark:text-gray-300">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 w-[90%] mx-auto" data-aos="fade-up">
        <div className="flex-1 text-left p-5 md:p-8 bg-white/50 dark:bg-black/30 rounded-[16px] shadow-sm" data-aos="fade-right">
          <h3 className="text-[24px] font-bold mb-5 text-text-primary dark:text-white">Get to know me!</h3>
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-gray-700 dark:text-gray-300 text-justify">
            I'm a <span className="font-bold text-text-primary dark:text-white">Frontend Focused Web Developer</span> building and
            managing the Front-end of Websites and Web Applications that
            leads to the success of the overall product. Check out some of
            my work in the <span className="font-bold text-text-primary dark:text-white">Projects section.</span> I also like sharing
            content related to the stuff that I have learned over the years
            in <span className="font-bold text-text-primary dark:text-white">Web Development</span> so it can help other people of
            the Dev Community. Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to
            Web Development and Programming. I'm open to{" "}
            <span className="font-bold text-text-primary dark:text-white">Job opportunities</span> where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <span className="font-bold text-text-primary dark:text-white">contact me.</span>
          </p>
        </div>

        <div className="flex-1 text-left p-5 md:p-8 bg-white/50 dark:bg-black/30 rounded-[16px] shadow-sm">
          <h3 className="text-[24px] font-bold mb-5 text-text-primary dark:text-white">My Skills</h3>
          <section className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div className="px-4 py-2 bg-gray-200/50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-[14px] md:text-[16px] font-semibold rounded-[8px] transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105" key={skill}>
                {skill}
              </div>
            ))}
          </section>
        </div>
      </div>
      <button
        className="mt-8 bg-[#112D4E] text-[18px] font-bold leading-[30px] px-10 py-3 rounded-[6px] border-none text-white cursor-pointer transition-all duration-300 tracking-[2px] hover:bg-[#112d4ee5] hover:-translate-y-[2px] shadow-md"
        onClick={scrollToContact}
        aria-label="Contact me"
      >
        CONTACT
      </button>
    </div>
  );
};

export default About;
