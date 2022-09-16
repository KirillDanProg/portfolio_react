import React from 'react';
import styles from "./Main.module.css"
import containerStyle from "../../common/commonStyles.module.css"

const Main = () => {
    return (
        <div className={containerStyle.container}>

            <div className={styles.main}>

                <div className={styles.mainContent}>
                    <span>Hi! I'm Kirill</span>
                    <h1 className={styles.title}>I'm a frontend developer</h1>
                </div>

                <div className={styles.photo}></div>

            </div>

        </div>
    );
};

export default Main;