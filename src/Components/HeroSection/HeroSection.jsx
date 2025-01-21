import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.container}> 
        <div className={styles.left}>
            <div className={styles.content}>
              <h1>Where Intelligence Meets Opportunity</h1>
              <p>Empowering future leaders with cutting-edge data-driven learning and personalized placement solutions.</p>
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
                <span >Courses Offered</span>
              </div>
              <div className={styles.statsSection}>
                <h1 className={styles.blue}>3000+</h1>
                <span>students Trained</span>
              </div>
              <div className={styles.statsSection}>
                <h1 className={styles.red}>10+</h1>
                <span>Professional Trainers</span>
              </div>
            </div>
        </div>
        <div className={styles.right}>
            <img src="/LandingHero.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection