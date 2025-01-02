import React from "react";
import styles from "./lectureHeader.module.css";

const lectureHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>
        <div>
            <img src="/Home.png" alt="Home" />
        </div>
        <div>
           <img src="/CaretRight.svg" alt="Home" /> 
        </div>

        <div>
            Courses
        </div>
       
        <div>
           <img src="/CaretRight.svg" alt="Home" /> 
        </div>
        <div>
            User Experience
        </div> 
       
        <div>
           <img src="/CaretRight.svg" alt="Home" /> 
        </div>
        <div className={styles.active}>
            Ideate 101
        </div>
      </div>
      <div className={styles.actionIcons}>
        <div className={styles.buttonContainer}>
          <div >
            <img src="/prevLec.svg" alt="Home" /> 
          </div>
          <p className={styles.previous}> Previous </p>
        </div>
        <div className={styles.buttonContainer}>
          <p className={styles.next}> Next </p>
          <div>
            <img src="/nextLec.svg" alt="Home" /> 
          </div>
        </div>

      </div>
    </header>
  );
};

export default lectureHeader;
