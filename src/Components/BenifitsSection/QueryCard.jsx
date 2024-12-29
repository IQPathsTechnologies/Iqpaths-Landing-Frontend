import React, { useState } from 'react';
import styles from './QueryCard.module.css';

function QueryCard({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLimit, setShowLimit] = useState(100); // Limit for description characters

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = description.substring(0, showLimit);

  return (
    <div className={styles.container}>
      <div className={styles.dropdownIcon}>
        <img src="src/assets/Tick Square.png" alt="icon" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>
          {isExpanded ? description : `${truncatedDescription}...`}
          <span className={styles.readMore} onClick={toggleExpand}>
            {isExpanded ? ' Read Less' : ' Read More...'}
          </span>
        </p>
        {isExpanded && (
          <div className={styles.expandedContent}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryCard;
