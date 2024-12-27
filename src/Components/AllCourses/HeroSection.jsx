import React from 'react';
import styles from './HeroSection.module.css';
// import heroImage from './assets/heroImage.jpg'; 

const HeroSection = () => {
  const overlayText = 'Learn something new everyday.'; 
  const overlayText2 = 'Become professionals and ready to join the world.';
 
  return (
    <div className={styles.heroSection}>
      <img src="./src/assets/heroImage.jpg" alt="Hero" className={styles.heroImage} />
      <div className={styles.textOverlay}>
        <h1>{overlayText}</h1>
        <h6>{overlayText2}</h6>
      </div>
    </div>
  );
};

export default HeroSection;
