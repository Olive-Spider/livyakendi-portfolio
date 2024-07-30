// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Projects from "./projects/Projects.jsx";
import Contact from "./contact/Contact.jsx";
import "./styles/app.css";
import Background from "./background/Background.jsx";
// import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <PlayerStats /> */}
    </Router>
  );
};

export default App;
