// src/pages/Projects.js
import React from "react";
import "./Projects.css";
import aboutBackground from "../assets/paralax3.jpg";

function Projects() {
  return (
    <section
      id="projects"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <h2>
        Engineering is the closest thing to magic that exists in the world.
      </h2>
    </section>
  );
}

export default Projects;
