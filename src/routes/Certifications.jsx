import React from "react";
import "./Certification.css";

const certifications = [
  {
    title: "Certified React Developer",
    organization: "React Institute",
    date: "March 2021",
  },
  {
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "September 2020",
  },
  // Add more certifications as needed
];

function Certifications() {
  return (
    <section id="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-cards">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
              <p>{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
