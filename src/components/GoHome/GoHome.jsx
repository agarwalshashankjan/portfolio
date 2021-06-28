import React, { Component } from "react";
import { withRouter } from "react-router";

import "./GoHome.css";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";

class GoHome extends Component {
  navigateToHome = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    const whiteBtn = this.props.location.pathname === "/";
    return (
      <button
        className={`go-home-btn ${whiteBtn ? "white-bkg" : "gradient-bkg"}`}
        onClick={this.navigateToHome}
      >
        <img
          className="home-icon"
          src={whiteBtn ? homeIconBlack : homeIconWhite}
          alt="Home icon here"
        />
      </button>
    );
  }
}

export default withRouter(GoHome);
