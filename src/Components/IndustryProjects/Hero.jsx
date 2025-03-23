import React from 'react'
import image from '../../assets/IndustryProjects/hero.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
        <div className={styles.text}>
            <h1>Getting Quality Projects done by our Experts now! </h1>
            <p>Turn ideas into reality with guidance from industry experts. Whether you're looking to learn, grow, or showcase your skills, we've got you covered.</p>
            <button>Book your Projects </button>
        </div>
        <img src={image} alt="" />
    </div>
    </>
  )
}

export default Hero