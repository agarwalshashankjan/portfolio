import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="The Gluttony sin | Artist | Activist | Full Stack dev | Constant Leaner"
      />

      <Footer phrase="Check out my " link="projects!" toAddress="/projects" />
      {/* Vector Frame */}
      <div className="vector-frame">
        <img src={aboutVector} alt="about" className="about-vector" />
      </div>
    </div>
  );
};

export default About;
