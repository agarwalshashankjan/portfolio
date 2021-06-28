import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import GoHome from "../GoHome/GoHome";

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <GoHome />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
