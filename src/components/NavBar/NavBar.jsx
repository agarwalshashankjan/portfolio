import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    const { pathname } = this.props.location;
    const homeClass = pathname === "/" ? "active-item" : "";
    const aboutClass = pathname === "/about" ? "active-item" : "";
    const projectsClass = pathname === "/projects" ? "active-item" : "";
    const skillsClass = pathname === "/skills" ? "active-item" : "";
    const contactClass = pathname === "/contact" ? "active-item" : "";

    return (
      <Menu>
        <Link to="/" className={`menu-item ${homeClass}`}>
          Home
        </Link>
        <Link to="/about" className={`menu-item ${aboutClass}`}>
          About Me
        </Link>
        <Link to="/projects" className={`menu-item ${projectsClass}`}>
          My Projects
        </Link>
        <Link to="/skills" className={`menu-item ${skillsClass}`}>
          My Skills
        </Link>
        <Link to="/contact" className={`menu-item ${contactClass}`}>
          Contact me
        </Link>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
