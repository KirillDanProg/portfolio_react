import React from "react";
import styles from "./Main.module.scss";
import commonStyle from "../../common/commonStyles.module.scss";
import CV from "../../assets/cv/Kirill-frontend-CV.pdf";
import { MediaLinks } from "./media-links/MediaLinks";
import { motion } from "framer-motion";

export const Main = () => {
  const titleTransition = { ease: "easeOut", duration: 0.7 };
  const generateAnimation = (x, opacity) => ({ x, opacity });
  return (
    <div id="#main" className={styles.main}>
      <motion.div
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
        className={styles.img}
      ></motion.div>
      <div className={styles.content}>
        <motion.h3
          className={styles.subTitle}
          animate={generateAnimation(0, 1)}
          initial={generateAnimation(200, 0)}
          transition={titleTransition}
        >
          front-end developer
        </motion.h3>
        <motion.h1
          className={styles.title}
          animate={generateAnimation(0, 1)}
          initial={generateAnimation(-300, 0)}
          transition={titleTransition}
        >
          Kirill Vychuzhanin
        </motion.h1>

        <motion.div
          className={styles.footer}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ ease: "circOut", duration: 0.7, delay: 0.2 }}
        >
          <MediaLinks />
          <a
            href={CV}
            download="Kirill Front-end CV"
            className={commonStyle.button}
          >
            download <span className={styles.spanCv}>cv</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
