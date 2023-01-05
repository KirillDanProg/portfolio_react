import React from 'react';
import styles from "./Projects.module.css"
import github from "../../assets/img/icons/icons8-github.svg"
import view from "../../assets/img/icons/view.png"

const Project = (props) => {
    const [visible, setVisible] = React.useState(false)

    const showIconsHandler = () => {
        setVisible(true)
    }
    const hideIconsHandlers = () => {
        setVisible(false)
    }

    return (
        <div className={styles.projectBox} onMouseOver={showIconsHandler} onMouseLeave={hideIconsHandlers}>

            <img className={styles.projectImg} src={props.img}/>

            {visible &&
                <div className={styles.iconBox}>
                    <a href={props.repo} target="_blank">
                        <img alt={"github"} className={styles.icon} src={github}/>
                    </a>
                    <a href={props.link} target="_blank">
                        <img alt={"eye"} className={styles.icon} src={view}/>
                    </a>
                </div>

            }
            <h3 className={styles.projectTitle}>{props.projectName}</h3>
            <p className={styles.description}>description</p>
        </div>
    );
};


export default Project;