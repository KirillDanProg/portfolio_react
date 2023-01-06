import React from 'react';
import styles from "../Main.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const MediaLinks = () => {
    return (
        <ul className={styles.links}>
            <li>
                <a className={styles.link} href="https://instagram.com/kirill_vychuzhanin?igshid=MWI4MTIyMDE=">
                    <InstagramIcon fontSize={"large"}/>
                </a>
            </li>
            <li>
                <a className={styles.link} href="https://github.com/KirillDanProg?tab=repositories">
                    <GitHubIcon fontSize={"large"}/>
                </a>
            </li>
        </ul>
    );
};

