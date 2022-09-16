import React from 'react';
import styles from "./Footer.module.css"
import commonStyles from "../../common/commonStyles.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>

            <h3 className={commonStyles.title} style={{color: "white", textAlign: "center"}}>кирилл вычужанин</h3>

            <div className={styles.footerContent}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <span>Copyright © 2022 Kirill. All Rights Reserved</span>
        </div>
    );
};

export default Footer;