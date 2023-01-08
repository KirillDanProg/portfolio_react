import React from 'react';
import Skill from "./Skill";
import styles from "./Skills.module.scss"
import js from "../../assets/img/skillsImg/icons8-javascript.svg"
import css from "../../assets/img/skillsImg/icons8-css3.svg"
import redux from "../../assets/img/skillsImg/icons8-redux.svg"
import react from "../../assets/img/skillsImg/icons8-react.svg"
import html from "../../assets/img/skillsImg/icons8-html-5.svg"
import typescript from "../../assets/img/skillsImg/icons8-typescript.svg"
import {SubTitle} from "../../common/components/SubTitle";
import {Container} from "../../common/components/Container";

const skills = [
    {
        id: 0, name: "HTML", icon: html, description: [
            " Semantic Elements",
            " Block and Inline Elements",
            " Responsive Web Design"
        ]
    },
    {
        id: 1, name: "CSS", icon: css, description: [
            " Layout - The position Property",
            " Layout - The position Property",
            " Flexbox and Greed"
        ]
    },
    {
        id: 2, name: "JavaScript", icon: js, description: [
            " ES6+",
            " Scope",
            " Hoisting",
            " Closures",
            " Async"
        ]
    },
    {id: 3, name: "TypeScript", icon: typescript, description: [
            " Union Types",
            " Utility Types",
            " Enums",
        ]},
    {id: 4, name: "React", icon: react,  description: [
            " Hooks",
            " Props",
            " Class Components",
            " Router",
            " Context"
        ]},
    {id: 5, name: "Redux", icon: redux, description: [
            "Toolkit",
            "RTK Query",
            "Thunk",
        ]},
]

const mappedSkills = skills.map(skill => {
    return (
        <Skill key={skill.id}
               icon={skill.icon}
               name={skill.name}
               description={skill.description}
        />
    )
})

const Skills = () => {
    return (
        <Container>
            <SubTitle>my top skills</SubTitle>

            <div className={styles.skillsBox}>
                {mappedSkills}
            </div>
        </Container>
    );
};

export default Skills;