import React from 'react';
import styles from "./Projects.module.css"

const Project = (props) => {
    return (
        <div className={styles.projectBox}>

            <div className={styles.projectImg}>
                <a className={styles.viewBtn} href={"#"}>View</a>
            </div>
            <h3 className={styles.projectTitle}>{props.projectName}</h3>
            <p className={styles.description}>description</p>


        </div>
    );
};


export default Project;