import React from 'react'
import image from '../../assets/Workshop/hero.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
        <div className={styles.text}>
            <h1>Getting Quality Projects done by our Experts now! </h1>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
            <button>Book your Projects</button>
        </div>
        <img src={image} alt="" />
    </div>
    </>
  )
}

export default Hero