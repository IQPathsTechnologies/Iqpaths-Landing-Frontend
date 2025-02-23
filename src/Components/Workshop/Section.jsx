import React from 'react'
import styles from './Section.module.css'

const Section = () => {
  return (
    <>
    <div className={styles.sec}>
        <div>
            <h1>80+</h1>
            <p>Successful Projects </p>
        </div>
        <hr />
        <div>
            <h1>12</h1>
            <p>Expert Mentors</p>
        </div>
        <hr />
        <div>
            <h1>50</h1>
            <p>Hours of Learning</p>
        </div>
        <hr />
        <div>
            <h1>700+</h1>
            <p>Active Learners</p>
        </div>
    </div>
    </>
  )
}

export default Section