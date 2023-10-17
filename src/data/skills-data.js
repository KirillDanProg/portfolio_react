import js from "../assets/img/skillsImg/icons8-javascript.svg";
import css from "../assets/img/skillsImg/icons8-css3.svg";
import redux from "../assets/img/skillsImg/icons8-redux.svg";
import react from "../assets/img/skillsImg/icons8-react.svg";
import html from "../assets/img/skillsImg/icons8-html-5.svg";
import typescript from "../assets/img/skillsImg/icons8-typescript.svg";

export const skills = [
  {
    id: 4,
    name: "React",
    icon: react,
    description: [
      " Hooks",
      " Props",
      " Class Components",
      " Router",
      " Context",
    ],
  },
  {
    id: 5,
    name: "Redux",
    icon: redux,
    description: ["Toolkit", "RTK Query", "Thunk"],
  },
  {
    id: 3,
    name: "TypeScript",
    icon: typescript,
    description: [" Union Types", " Utility Types", " Enums"],
  },

  {
    id: 0,
    name: "HTML",
    icon: html,
    description: [
      " Semantic Elements",
      " Block and Inline Elements",
      " Responsive Web Design",
    ],
  },
  {
    id: 1,
    name: "CSS",
    icon: css,
    description: [
      " Layout - The position Property",
      " Layout - The position Property",
      " Flexbox and Greed",
    ],
  },
  {
    id: 2,
    name: "JavaScript",
    icon: js,
    description: [" ES6+", " Scope", " Hoisting", " Closures", " Async"],
  },
];