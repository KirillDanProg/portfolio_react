import React from 'react';
import styles from "./Main.module.scss"
import commonStyle from "../../common/commonStyles.module.scss"
import {Title} from "../../common/components/Title";
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import particlesConfig from "../../assets/particlesjs-config.json"
import {Container} from "../../common/components/Container";
import ReactTypingEffect from 'react-typing-effect';
import CV from "../../assets/сv/kirill-front-end-CV.pdf"

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Main = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Container className={commonStyle.container}>
            <Particles init={particlesInit}
                       options={particlesConfig}
                       className={styles.particles}
            />

            <div className={styles.main}>

                <h3 className={styles.subTitle}>hello & welcome</h3>

                <ReactTypingEffect
                    text={[
                        "i am kirill vychuzhanin",
                        "i am a front-end developer",
                    ]}
                    speed={50}
                    eraseSpeed={100}
                    eraseDelay={2000}
                    typingDelay={100}
                    className={commonStyle.title}
                />

                <ul className={styles.links}>
                    <li>
                        <a className={styles.link} href="https://instagram.com/kirill_vychuzhanin?igshid=MWI4MTIyMDE=">
                            <InstagramIcon/>
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://github.com/KirillDanProg?tab=repositories">
                            <GitHubIcon/>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a className={styles.link} href="#">*/}
                    {/*        <AlternateEmailIcon/>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>

                <a href={CV} download="Kirill Front-end CV" className={styles.downloadBtn}>
                    download <span className={styles.spanCv}>cv</span>
                </a>

            </div>
        </Container>
    );
};
