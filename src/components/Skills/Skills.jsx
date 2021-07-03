import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { skillList } from "./../../assets/skillsData";
import "./Skills.css";
import skillsVector from "./../../assets/skills_vector.png";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="section-container">
      <Header
        heading="My skills."
        details="Passionate about new technologies, I keep expploring stuff! Here is the tech stack I've  worked with."
      />
      <div className="skills-card-container">
        {skillList.map(({ skillName, skillUrl }) => (
          <SkillCard skillName={skillName} skillUrl={skillUrl} />
        ))}
      </div>
      <Footer phrase="Get in " link="touch." toAddress="/contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} alt="Skills" className="skills-vector" />
      </div>
    </div>
  );
};

export default Skills;
