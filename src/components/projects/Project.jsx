import React from 'react';
import styles from "./Projects.module.scss"
import github from "../../assets/img/icons/icons8-github.svg"

const Project = (props) => {
    const {
        img,
        description,
        projectName,
        link,
        repo,
        mobile
    } = props

    return (
        <div className={styles.projectBox}>

            <img className={mobile ? styles.mobileProjectImage : styles.projectImg} src={img}/>

            <div className={styles.projectInfo}>

                <h3 className={styles.projectTitle}>{projectName}</h3>
                <div className={styles.description}>
                    {
                        description
                    }
                </div>

                <div className={styles.btns}>
                    <a className={`${styles.code} ${styles.btn}`} href={repo} target="_blank">
                        <span>code</span> <img alt={"github"} className={styles.icon} src={github}/>
                    </a>
                    {
                        props.projectName !== "Social-network" &&
                        <a className={`${styles.demo} ${styles.btn}`} href={link} target="_blank">
                            <span>demo</span>
                        </a>
                    }
                </div>
            </div>

        </div>
    );
};


export default Project;
