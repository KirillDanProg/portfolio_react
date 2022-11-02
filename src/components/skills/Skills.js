import React from 'react';
import Skill from "./Skill";
import styles from "./Skills.module.css"
import commonStyles from "../../common/commonStyles.module.css"
import js from "../../assets/img/skillsImg/icons8-javascript.svg"
import css from "../../assets/img/skillsImg/icons8-css3.svg"
import redux from "../../assets/img/skillsImg/icons8-redux.svg"
import react from "../../assets/img/skillsImg/icons8-react.svg"
import html from "../../assets/img/skillsImg/icons8-html-5.svg"
import typescript from "../../assets/img/skillsImg/icons8-typescript.svg"

const skills = [
    {id: 0, name: "HTML", icon: html},
    {id: 1, name: "CSS", icon: css},
    {id: 2, name: "JavaScript", icon: js},
    {id: 3, name: "TypeScript", icon: typescript},
    {id: 4, name: "React", icon: react},
    {id: 5, name: "Redux", icon: redux},
]

const mappedSkills = skills.map(skill => {
    return (
        <Skill key={skill.id} icon={skill.icon} name={skill.name}/>
    )
})

const Skills = () => {
    return (
        <div className={commonStyles.container}>

            <h2 className={commonStyles.title}>my top skills</h2>

            <div className={styles.skillsBox}>
                {mappedSkills}
            </div>

        </div>
    );
};

export default Skills;