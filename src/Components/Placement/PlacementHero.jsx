import React, {useEffect} from 'react';
import styles from './PlacementHero.module.css';
// import heroImage from './assets/heroImage.jpg'; 

const PlacementHero = () => {
  const overlayText = 'Learn daily to sharpen your skills.'; 
  const overlayText2 = 'Prepare to become professionals ready to excel in placements and join the corporate world.';
 
   useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


  return (
    <div className={styles.heroSection}>
      <img src="public\placement.jpeg" alt="Hero" className={styles.heroImage} />
      <div className={styles.textOverlay}>
        <h1>{overlayText}</h1>
        <h6>{overlayText2}</h6>
      </div>
    </div>
  );
};

export default PlacementHero;
