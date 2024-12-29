import React, { useState } from "react";
import styles from "./QueryCard.module.css";

function QueryCard({ title, shortDescription, longDescription }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container} onClick={toggleContent}>
      <div className={styles.dropdownIcon}>
        <img src="src/assets/Tick Square.png" alt="icon" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>
          {isExpanded ? longDescription : shortDescription}
        </p>
      </div>
    </div>
  );
}

export default QueryCard;
