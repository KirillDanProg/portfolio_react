import React from "react";
import styles from "./Projects.module.scss";
import github from "../../assets/img/icons/icons8-github.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Project = (props) => {
  const { img, description, projectName, link, repo, mobile } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageVariantClass = mobile
    ? styles.mobileProjectImage
    : styles.projectImg;

  const inViewAnimationClass = isInView ? styles.animation : "";
  return (
    <div ref={ref} className={styles.projectBox}>
      <img
        className={`${styles.img} ${imageVariantClass} ${inViewAnimationClass}`}
        src={img}
        alt="project"
      />
      <div className={`${styles.projectInfo} ${inViewAnimationClass}`}>
        <h3 className={styles.projectTitle}>{projectName}</h3>
        <div className={styles.description}>{description}</div>

        <div className={styles.btns}>
          <a
            className={`${styles.code} ${styles.btn}`}
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            <span>code</span>{" "}
            <img alt={"github"} className={styles.icon} src={github} />
          </a>
          {link && (
            <a
              className={`${styles.demo} ${styles.btn}`}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <span>demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
