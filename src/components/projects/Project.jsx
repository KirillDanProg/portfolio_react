import React from 'react';
import styles from "./Projects.module.scss"
import github from "../../assets/img/icons/icons8-github.svg"

const Project = (props) => {
    return (
        <div className={styles.projectBox}>

            <img className={styles.projectImg} src={props.img}/>

            <div className={styles.projectInfo}>

                <h3 className={styles.projectTitle}>{props.projectName}</h3>
                <p className={styles.description}>{props.description}</p>

                <div className={styles.btns}>
                    <a className={`${styles.code} ${styles.btn}`} href={props.repo} target="_blank">
                        <span>code</span> <img alt={"github"} className={styles.icon} src={github}/>
                    </a>
                    {
                        props.projectName !== "Social-network" &&
                        <a className={`${styles.demo} ${styles.btn}`} href={props.link} target="_blank">
                            <span>demo</span>
                        </a>
                    }

                </div>
            </div>

        </div>
    );
};


export default Project;