import React, { useState } from 'react';
import styles from './QueryCard.module.css';

function QueryCard({ title, description, additionalContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownIcon}>
        <img src="src/assets/Tick Square.png" alt="icon" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <span className={styles.readMore} onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
        {isExpanded && (
          <div className={styles.expandedContent}>
            <p>{additionalContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryCard;
