import React from "react";
import Skill from "./Skill";
import styles from "./Skills.module.scss";

import { SubTitle } from "../../common/components/SubTitle";
import { Container } from "../../common/components/Container";
import { skills } from '../../data/skills-data';



const mappedSkills = skills.map((skill) => {
  return (
    <Skill
      key={skill.id}
      icon={skill.icon}
      name={skill.name}
      description={skill.description}
    />
  );
});

const Skills = () => {
  return (
    <Container>
      <SubTitle>my top skills</SubTitle>
      <div className={styles.skillsBox}>{mappedSkills}</div>
    </Container>
  );
};

export default Skills;
