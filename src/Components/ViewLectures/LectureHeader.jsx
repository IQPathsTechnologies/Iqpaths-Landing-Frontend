import React from "react";
import styles from "./lectureHeader.module.css";

const lectureHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
      </div>
      <div className={styles.breadcrumb}>
        <span>
            <img src="src/assets/Home.png" alt="Home" />
        </span>
        <p> &gt; </p>
        <span>
            Courses
        </span>
        <p> &gt; </p> 
        <span>
            User Experience
        </span> 
        <p> &gt; </p> 
        <span className={styles.active}>
            Ideate 101
        </span>
      </div>
      <div className={styles.actionIcons}>
        <p className={styles.icon}> &lt; </p>
        <p className={styles.previous}> Previous </p>
        <p className={styles.next}> Next </p>
        <p className={styles.icon}> &gt; </p>
      </div>
    </header>
  );
};

export default lectureHeader;
