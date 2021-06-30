import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="The Gluttony sin | Artist | Activist | Full Stack dev | Constant Leaner"
      />
      <div className="about-main">
        <div className="left">
          {/* subsection 1 */}
          <h3 className="sub-head">Teacher</h3>
          <p className="details">
            Teaching is my blah blah passion! Check out my projects at{" "}
            <a
              href="https://github.com/agarwalshashankjan/"
              className="link-element"
            >
              My Free projects to learn!!!
            </a>
          </p>

          {/* subsection 2 */}
          <h3 className="sub-head">Developer</h3>
          <p className="details">
            Lorem ipsum dolor sit! Check out my projects at{" "}
            <a
              href="https://github.com/agarwalshashankjan/"
              className="link-element"
            >
              My Free projects to learn!!!
            </a>
          </p>

          {/* subsection 3 */}
          <h3 className="sub-head">Artist</h3>
          <p className="details">
            Lorem ipsum dolor sit! Check out my projects at{" "}
            <a
              href="https://github.com/agarwalshashankjan/"
              className="link-element"
            >
              My Free projects to learn!!!
            </a>
          </p>
        </div>
        <div className="right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>
      <Footer phrase="Check out my " link="projects!" toAddress="/projects" />
      {/* Vector Frame */}
      <div className="vector-frame">
        <img src={aboutVector} alt="about" className="about-vector" />
      </div>
    </div>
  );
};

export default About;
