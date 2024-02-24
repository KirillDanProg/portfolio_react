import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skill = ({ id, icon, name, description, ...restProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        duration: 1.5,
        ease: "circInOut",
        delay: 0.2,
      }}
      className={styles.skillBoxWrapper}
      {...restProps}
    >
      <div key={id} className={styles.skillBox} ref={ref}>
        <img alt="technology" className={styles.icon} src={icon} />
        <span className={styles.skillName}>{name}</span>
        <ul className={styles.list}>
          {description?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Skill;
