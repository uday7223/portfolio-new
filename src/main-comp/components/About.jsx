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
    <div className="bg-2" data-aos="fade-up">
      <div className="content">
        <h2 className="heading" id="about">
          ABOUT ME
        </h2>
        <p className="text px-5 mx-2">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="bg-2-con" data-aos="fade-up">
        <div className="bg-2-con-1 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-right">
          <h3 className="heading">Get to know me!</h3>
          <p className="text">
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
          </p>
        </div>

        <div className="bg-2-con-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h3 className="heading">My Skills</h3>
          <section>
            {skills.map((skill) => (
              <div className="text" key={skill}>
                {skill}
              </div>
            ))}
          </section>
        </div>
      </div>
      <button 
        className="btn mt-3 contact-btn" 
        onClick={scrollToContact}
        aria-label="Contact me"
      >
        CONTACT
      </button>
    </div>
  );
};

export default About;
