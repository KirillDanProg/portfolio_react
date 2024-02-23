import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className={styles.header}>
      <button onClick={() => handleClickScroll("#main")}>main</button>
      <button onClick={() => handleClickScroll("#skills")}>skills</button>
      <button onClick={() => handleClickScroll("#projects")}>projects</button>
      <button onClick={() => handleClickScroll("#contact")}>mail</button>
    </div>
  );
};
