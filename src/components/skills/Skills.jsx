import React, { useRef } from "react";
import Skill from "./Skill";
import styles from "./Skills.module.scss";

import { SubTitle } from "../../common/components/SubTitle";
import { Container } from "../../common/components/Container/Container";
import { skills } from "../../data/skills-data";
import { useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mappedSkills = skills.map((skill) => {
    return (
      <Skill
        key={skill.id}
        icon={skill.icon}
        name={skill.name}
        description={skill.description}
        isInView={isInView}
      />
    );
  });
  return (
    <Container>
      <SubTitle>my top skills</SubTitle>
      <div id="#skills" className={styles.skillsBox} ref={ref}>
        {mappedSkills}
      </div>
    </Container>
  );
};

export default Skills;
