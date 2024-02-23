import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

const Skill = ({
  id,
  icon,
  name,
  description,
  ref,
  isInView,
  ...restProps
}) => {
  return (
    <motion.div
      initial={{
        transform: "translateX(2000px)",
        opacity: 0,
      }}
      animate={{
        transform: isInView ? "translateX(0)" : null,
        opacity: 1,
      }}
      transition={{
        duration: 1.4,
        delay: 0.2,
      }}
      className={styles.skillBoxWrapper}
      {...restProps}
    >
      <div key={id} className={styles.skillBox}>
        <img alt="technology" src={icon} />
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
