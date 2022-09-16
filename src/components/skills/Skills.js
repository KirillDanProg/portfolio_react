import React from 'react';
import Skill from "./Skill";
import styles from "./Skills.module.css"
import containerStyle from "../../common/commonStyles.module.css"

const skills = [
    {id: 0, name: "HTML", icon: ""},
    {id: 1, name: "CSS", icon: ""},
    {id: 2, name: "JavaScript", icon: ""},
    {id: 3, name: "TypeScript", icon: ""},
    {id: 4, name: "React", icon: ""},
    {id: 5, name: "Redux", icon: ""},
]

const mappedSkills = skills.map(skill => {
    return (
        <Skill key={skill.id} icon={skill.icon} name={skill.name}/>
    )
})

const Skills = () => {
    return (
        <div className={containerStyle.container}>

            <div className={styles.skillsBox}>
                {mappedSkills}
            </div>

        </div>
    );
};

export default Skills;