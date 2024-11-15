import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function Home() {
    window.scrollTo(0, 0);
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h1 onClick={Home}>Santhosh</h1>
      <div>
        {[
          "Home",
          "About",
          "Skills",
          "Projects",
          "Experience",
          "Certifications",
          "Contact",
        ].map((section) => (
          <Link
            key={section}
            to={section.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link"
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
