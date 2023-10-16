import React from 'react';
import styles from "./Skills.module.scss";

const Skill = (props) => {
    return (
        <div className={styles.skillBoxWrapper}>
        <div key={props.id} className={styles.skillBox}>
           <img alt="technology" src={props.icon}/>
            <span className={styles.skillName}>{props.name}</span>
            <ul className={styles.list}>
                {
                    props.description?.map((el, i) => <li key={i}>{el}</li>)
                }
            </ul>
        </div>
        </div>
    );
};

export default Skill;