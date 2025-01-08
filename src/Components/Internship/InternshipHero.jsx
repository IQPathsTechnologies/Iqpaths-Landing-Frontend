import React, {useEffect} from 'react';
import styles from './InternshipHero.module.css';
// import heroImage from './assets/heroImage.jpg'; 

const InternshipHero = () => {
  const overlayText = 'Gain practical skills to enhance your expertise.'; 
  const overlayText2 = 'Prepare to excel in internships and kickstart your journey into the professional world.';
 

   useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.heroSection}>
      <img src="public\internship.jpg" alt="Hero" className={styles.heroImage} />
      <div className={styles.textOverlay}>
        <h1>{overlayText}</h1>
        <h6>{overlayText2}</h6>
      </div>
    </div>
  );
};

export default InternshipHero;
