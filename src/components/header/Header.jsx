import React from 'react';
import styles from "./Header.module.css"
import logo from "../../assets/img/logo/logo-no-background.png"

export const Footer = () => {
    return (
        <div className={styles.header}>
            <img src={logo}/>
        </div>
    );
};


