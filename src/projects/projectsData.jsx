import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "JavaScript | Tailwind CSS | VueJS",
    image: projectOne,
    description: (
      <>
        <p>
          TTL, based in Kenya, pioneers African music on the global stage,
          empowering indie artists and labels in the digital realm. With a
          dynamic team of DJs, producers, radio hosts, and entrepreneurs, TTL
          stands at Africa's crossroads of opportunity.
        </p>
      </>
    ),
    github: "https://github.com/Olive-Spider/music-site",
    demo: "https://oes-music.netlify.app/",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
