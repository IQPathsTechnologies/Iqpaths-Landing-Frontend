import React from "react";
import styles from "./QueryCard.module.css";

function QueryCard({ title, shortDescription, longDescription, isExpanded, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.dropdownIcon}>
        <img src="/Tick Square.png" alt="icon" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p
          className={`${styles.description} ${
            isExpanded ? styles.expandedContent : ""
          }`}
        >
          {isExpanded ? longDescription : shortDescription}
        </p>
        <div className={styles.readMore}>
          {isExpanded ? "Read Less..." : "Read More..."}
        </div>
      </div>
    </div>
  );
}

export default QueryCard;
