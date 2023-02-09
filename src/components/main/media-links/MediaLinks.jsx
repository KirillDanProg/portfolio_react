import React from 'react';
import commonStyles from "../../../common/commonStyles.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from '@mui/icons-material/Telegram'

export const MediaLinks = () => {
    return (
        <ul className={commonStyles.links}>
            <li>
                <a className={commonStyles.link} href="https://instagram.com/kirill_vychuzhanin?igshid=MWI4MTIyMDE=">
                    <InstagramIcon fontSize={"large"}/>
                </a>
            </li>
            <li>
                <a className={commonStyles.link} href="https://github.com/KirillDanProg?tab=repositories">
                    <GitHubIcon fontSize={"large"}/>
                </a>
            </li>
            <li>
                <a className={commonStyles.link} href="https://t.me/Kirill_Vychuzhanin">
                    <TelegramIcon fontSize={"large"}/>
                </a>
            </li>
        </ul>
    );
};

