import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Present",
    description:
      "Developed full-stack applications and led a team of 5 developers.",
  },
  {
    title: "Intern",
    company: "Innovate Labs",
    duration: "Jun 2019 - Dec 2019",
    description: "Assisted in the development of mobile apps and web projects.",
  },
  // Add more experiences as needed
];

function Experience() {
  return (
    <section id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
