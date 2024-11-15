// src/components/Contact.js
import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import contactpic from "../assets/Contact.jpg";
import aboutBackground from "../assets/paralax3.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", query: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="contact-container" id="contact">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <label className="form__label">
              Name
              <input
                className="form__field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form__label">
              Email
              <input
                className="form__field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form__label">
              Query
              <textarea
                className="form__field"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">
              <span className="text">Submit</span>
            </button>
          </form>
          <div className="contact-image">
            <img src={contactpic} alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
