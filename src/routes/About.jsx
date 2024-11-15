import React from "react";
import "./About.css";
import aboutBackground from "../assets/paralax3.jpg";

function About() {
  const handleResumeDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="about"
      className="about-section"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-intro">
          Hello! I'm Santhosh, a passionate developer with a knack for creating
          engaging and efficient digital experiences. I thrive on solving
          complex problems and continuously enhancing my skillset.
        </p>

        <h2 className="about-subtitle">Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">React</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">Express</li>
          <li className="skill-item">MySQL</li>
          <li className="skill-item">CSS & Sass</li>
          <li className="skill-item">Git & GitHub</li>
        </ul>

        <button className="resume-button" onClick={handleResumeDownload}>
          View or Download Resume
        </button>
      </div>
    </section>
  );
}

export default About;
