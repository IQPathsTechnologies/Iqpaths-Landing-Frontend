import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.content}>
              <h1>Master New Skills with Course Mastery</h1>
              <p>Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
            </div>
            <div className={styles.buttonContainer}>
              <Link to="/courses" className={styles.button}>
                Register
              </Link>
              {/* <div className={styles.button}>
                Register
              </div> */}
            </div>
            <div className={styles.stats}>
              <div className={styles.statsSection}>
                <h1 className={styles.yellow}>30+</h1>
                <div>Courses to choose from</div>
              </div>
              <div className={styles.statsSection}>
                <h1 className={styles.blue}>3000+</h1>
                <div>students Trained</div>
              </div>
              <div className={styles.statsSection}>
                <h1 className={styles.red}>10+</h1>
                <div>Professional Trainers</div>
              </div>
            </div>
        </div>
        <div className={styles.right}>
            <img src="src/assets/heroSectionImage.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection