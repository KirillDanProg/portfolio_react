import React from 'react';
import styles from "./Skills.module.css";

const Skill = ({id, icon, name, desc}) => {
    return (
        <div key={id} className={styles.skillBox}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.skillName}>{name}</span>
            <span className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
            </span>
        </div>
    );
};

export default Skill;