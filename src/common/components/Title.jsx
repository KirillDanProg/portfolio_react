import React from 'react';
import styles from "../commonStyles.module.scss";

export const Title = (props) => {
    return (
        <h1 className={styles.title}>{props.text}</h1>
    );
};
