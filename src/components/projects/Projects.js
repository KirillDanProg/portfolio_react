import React from 'react';
import commonStyles from "../../common/commonStyles.module.css"
import styles from "./Projects.module.css"
import Project from "./Project";

const projects = [
    {id: 0, projectName: "Proj ONE"},
    {id: 1, projectName: "Proj TWO"},
    {id: 2, projectName: "Proj THREE"},
    {id: 3, projectName: "Proj FOUR"},
]

const mappedProjects = projects.map(pr => {
    return (
        <Project key={pr.id} projectName={pr.projectName}/>
    )
})

const Projects = () => {
    return (
        <div className={commonStyles.container}>

                <h2 style={{textAlign: "center", margin: "100px 0 50px"}} className={commonStyles.title}>My Projects</h2>

            <div className={styles.projectsBox}>
                {mappedProjects}
            </div>


        </div>
    );
};


export default Projects;