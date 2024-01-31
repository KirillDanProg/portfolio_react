import React from "react";
import styles from "./Main.module.scss";
import commonStyle from "../../common/commonStyles.module.scss";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../assets/particlesjs-config.json";
import { Container } from "../../common/components/Container";
// import ReactTypingEffect from "react-typing-effect";
import CV from "../../assets/сv/Kirill-CV-front-end.pdf";
import { MediaLinks } from "./media-links/MediaLinks";

export const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Container className={commonStyle.container}>
      <Particles
        init={particlesInit}
        options={particlesConfig}
        className={styles.particles}
      />

      <div className={styles.main}>
        <h4 className={styles.subTitle}>hello & welcome</h4>
        {/* <ReactTypingEffect
          text={["i'm Kirill Vychuzhanin", "i'm a front-end developer"]}
          speed={50}
          eraseSpeed={100}
          eraseDelay={2000}
          typingDelay={100}
          className={`${commonStyle.title} ${styles.title}`}
        /> */}
        <h1 className={`${commonStyle.title} ${styles.title}`}>
          <span className={styles.title_up}>i'm Kirill Vychuzhanin</span>
          <span className={styles.title_down}>i'm a front-end developer</span>
        </h1>
        <MediaLinks />
        <a
          href={CV}
          download='Kirill Front-end CV'
          className={commonStyle.button}
        >
          download <span className={styles.spanCv}>cv</span>
        </a>
      </div>
    </Container>
  );
};
