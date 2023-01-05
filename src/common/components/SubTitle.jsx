import React from 'react';
import styles from "../commonStyles.module.scss";

export const SubTitle = (props) => {
    return (
        <h2 className={styles.subTitle}>{props.text || props.children}</h2>
    );
};
