// import React from "react";
// import "../styles/playerStats.css";

// const PlayerStats = () => {
//   return (
//     <div id="playerStats">
//       <h1>LIVYA KENDI</h1>
//       <div id="playerStats__lines">
//         <span id="playerStats__lines__thick"></span>
//         <span id="playerStats__lines__thin"></span>
//       </div>
//       <h2>Fullstack Developer</h2>
//     </div>
//   );
// };

// export default PlayerStats;

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
      <div id="playerStats__buttons">
        <a 
          href="https://docs.google.com/document/d/1rJfgFdl_s-YpKqHS_aeeBw0iOp0jn5lq059CkCm9ggw/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="playerStats__button"
        >
          Download Resume
        </a>
        <a 
          href="https://www.upwork.com/freelancers/~015d499ee4405b621a?mp_source=share" 
          target="_blank" 
          rel="noopener noreferrer"
          className="playerStats__button"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default PlayerStats;