import React from "react";
import "./Contact.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedIn from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import facebook from "./../../assets/web.png";
import web from "./../../assets/web.png";

const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in Touch."
        details="Interested to Collaborate? Feel free to drop me an email."
      />

      {/* form section */}

      <div className="contact-from-container">
        <form action="" className="contact-from">
          <input
            type="email"
            placeholder="Your email ID"
            name="email"
            className="input-box email-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="input-box body-input"
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      {/* Social icons */}

      <div className="social-icons-container">
        <a href="https://github.com/agarwalshashankjan" className="social-icon">
          <img src={github} alt="social-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/jinkies-i-am-shashank-agarwal/"
          className="social-icon"
        >
          <img src={linkedIn} alt="social-link" />
        </a>
        <a href="https://instagram.com/itzmoonlover" className="social-icon">
          <img src={instagram} alt="social-link" />
        </a>
        <a href="https://github.io/agarwalshashankjan" className="social-icon">
          <img src={web} alt="social-link" />
        </a>
        <a href="https://facebook.com/shashankagarwal" className="social-icon">
          <img src={facebook} alt="social-link" />
        </a>
      </div>

      <Footer phrase="Read more " link="about me!" toAddress="/about" />
      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
};

export default Contact;
