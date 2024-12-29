import React from "react";
import styles from "./QueryCard.module.css";

function QueryCard({ title, shortDescription, longDescription, isExpanded, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.dropdownIcon}>
        <img src="src/assets/Tick Square.png" alt="icon" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>
          {isExpanded ? longDescription : shortDescription}
        </p>
        <span className={styles.readMore}>
          {isExpanded ? "Read Less..." : "Read More..."}
        </span>
      </div>
    </div>
  );
}

export default QueryCard;
