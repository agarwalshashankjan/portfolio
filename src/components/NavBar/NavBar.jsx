import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Link to="/" className="menu-item active-item">
          Home
        </Link>
        <Link to="/about" className="menu-item">
          About Me
        </Link>
        <Link to="/projects" className="menu-item">
          My Projects
        </Link>
        <Link to="/skills" className="menu-item">
          My Skills
        </Link>
        <Link to="/contact" className="menu-item">
          Contact me
        </Link>
      </Menu>
    );
  }
}

export default NavBar;
