// Skills.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const skillData = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
  },
  {
    title: "Tech Stacks",
    skills: ["React", "Node.js", "Express", "MongoDB", "GraphQL"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Collaboration",
      "Adaptability",
      "Time Management",
      "Communication",
    ],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Docker", "Figma", "Postman", "VS Code"],
  },
  {
    title: "Other Skills",
    skills: [
      "Data Structures",
      "Algorithms",
      "Unit Testing",
      "Project Management",
      "UI/UX Design",
    ],
  },
];

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + skillData.length) % skillData.length
    );
  };

  return (
    <section id="skills">
      <div className="skills-container">
        <button className="arrow-button left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <motion.div
          className="skill-card"
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{skillData[currentIndex].title}</h2>
          <ul>
            {skillData[currentIndex].skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        <button className="arrow-button right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Skills;
