// import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>LIVYA KENDI</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Fullstack Developer</h2>
      <br />
      <div>
        <a href="/Livya Kendi Resume.pdf" download="Livya Kendi Resume.pdf" target="_blank">
          <button id="button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default PlayerStats;
