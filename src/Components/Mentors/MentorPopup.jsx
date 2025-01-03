import React, { useEffect } from 'react';
import styles from './MentorPopup.module.css';
import { Link } from 'react-router-dom';

const MentorPopup = ({ image, onClose, details }) => {
  // Disable background scrolling when popup is open
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, [image]);

  // Close popup if clicking outside the content
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
            <p>
              {details.description}
            </p>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <img src="/twitterLogo.svg" alt="Twitter" />
                </div>
                <div className={styles.icon}>
                    <Link to={details.linkedin}>
                    <img src="/linkedinLogo.svg" alt="Linked in" />
                    </Link>
                </div>
                <div className={styles.icon}>
                    <img src="/instagramLogo.svg" alt="Instagram" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorPopup;
