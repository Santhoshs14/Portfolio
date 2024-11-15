import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/santhoshs14/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://github.com/Santhoshs14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://x.com/iamsanthoshs14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
      </div>
      <div className="footer-contact">
        <p>📞 7550055797</p>
        <p>📧 santhoshs.sivakumar@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
