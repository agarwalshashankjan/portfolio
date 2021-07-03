import React from "react";
import "./Projects.css";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import { projectsData } from "./../../assets/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="section-container">
      <Header
        heading="My Projects."
        details="Here are a few cool things I've worked!!!"
      />

      <div className="projects-card-container">
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, projectUrl }) => {
            return (
              <ProjectCard
                projectName={projectName}
                imageUrl={imageUrl}
                projectDescription={projectDescription}
                projectUrl={projectUrl}
              />
            );
          }
        )}
      </div>

      <Footer phrase="Check out " link="my skills!" toAddress="/skills" />
    </div>
  );
};

export default Projects;
