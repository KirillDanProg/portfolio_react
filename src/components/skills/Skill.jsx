import React from 'react';
import styles from "./Skills.module.scss";

const Skill = (props) => {
    return (
        <div key={props.id} className={styles.skillBox}>

           <img alt={"technology image"} src={props.icon}/>
            <span className={styles.skillName}>{props.name}</span>
            <ul className={styles.list}>
                {
                    props.description?.map(el => <li key={props.id}>{el}</li>)
                }
            </ul>
        </div>
    );
};

export default Skill;