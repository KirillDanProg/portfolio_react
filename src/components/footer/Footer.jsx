import React from 'react';
import logo from "../../assets/img/logo/logo-no-background.png"
import {MediaLinks} from "../main/media-links/MediaLinks";
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={logo} className={styles.logo}/>
            <MediaLinks/>
        </div>
    );
};


