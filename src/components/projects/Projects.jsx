import React from "react";
import styles from "./Projects.module.scss";
import Project from "./Project";

import { SubTitle } from "../../common/components/SubTitle";
import { Container } from "../../common/components/Container/Container";
import { projects } from "../../data/projects-data";

const mappedProjects = projects.map((pr) => {
  return <Project key={pr.id} {...pr} />;
});

const Projects = () => {
  return (
    <Container>
      <SubTitle>My Projects</SubTitle>
      <div id="#projects" className={styles.projectsBox}>
        {mappedProjects}
      </div>
    </Container>
  );
};

export default Projects;
