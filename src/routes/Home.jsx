import React from "react";
import "./Home.css";
import heroBackground from "../assets/paralax3.jpg";

function Aboutus() {
  window.scrollTo(0, 900);
}

function Home() {
  return (
    <section id="home" style={{ backgroundImage: `url(${heroBackground})` }}>
      <h2>
        Engineering is the closest thing to magic that exists in the world.
      </h2>
      <button className="get-started" onClick={Aboutus}>
        <span className="text">Get Started</span>
      </button>
    </section>
  );
}

export default Home;
