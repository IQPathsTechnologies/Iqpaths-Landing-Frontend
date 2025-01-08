import React, { useEffect } from 'react';
import styles from './MentorPopup.module.css';
import { Link } from 'react-router-dom';

const MentorPopup = ({ image, onClose, details }) => {
  details = {
    ...details,
    linkedin: details.linkedin || 'https://www.linkedin.com/in/default-profile', 
  };

  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [image]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  if (!image) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={image} alt="Mentor" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h2>{details.name}</h2>
            <p>{details.description}</p>
            <div className={styles.icons}>
              {details.linkedin && (
                <div className={styles.icon}>
                  <a href={details.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/linkedinLogo.svg" alt="LinkedIn" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPopup;
