import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/nexcent.png";
import projectThree from "../assets/project3.png";
import projectFour from "../assets/project4.png";

const projects = {
  1: {
    title: "JavaScript | Tailwind CSS | VueJS | TypeScript",
    image: projectFour,
    description: (
      <>
        <p>
        RTMS aims to elevate African rugby by using data and AI to identify and develop talent. Our platform empowers teams and players with precise, accessible tools for talent tracking and development, transforming how rugby is managed across the continent.
        </p>
      </>
    ),
    github: "https://github.com/Olive-Spider/",
    demo: "https://rtms-website-fleks-projects.vercel.app/",
  },
  2: {
    title: "JavaScript | Tailwind CSS | VueJS",
    image: projectThree,
    description: (
      <>
        <p>
        Lex.ai is a Legal Assistant that will answer any questions about any Judgements From Supreme Court or Court of Appeal of Kenya.
        </p>
      </>
    ),
    github: "https://github.com/Olive-Spider",
    demo: "https://lexaikenya.com/",
  },
  3: {
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
  4: {
    title: "JavaScript | Tailwind CSS | ReactJS",
    image: projectTwo,
    description: (
      <>
        <p>
        Nexcent is a simple landing page project I used to demonstrate my ReactJS and Tailwind CSS skills.
        </p>
      </>
    ),
    github: "https://github.com/Olive-Spider/nexcent",
    demo: "https://nexcent-nine-eta.vercel.app/",
  },
};

export default projects;
