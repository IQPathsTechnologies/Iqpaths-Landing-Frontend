import React from 'react'
import user from "../../assets/Workshop/userIcon.png"
import styles from './Benefits.module.css'

const Benefits = () => {
  return (
    <>
    <div className={styles.benefits}>
        <div className={styles.text}>
          <h1>Benefits</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking  </p>
        </div>
        <div className={styles.bottom}>
            <div className={styles.card}>
              <img src={user} alt="" />
              <h1>One on One Monitor</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className={styles.card}>
              <img src={user} alt="" />
              <h1>24/7 Mentor </h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className={styles.card}>
              <img src={user} alt="" />
              <h1>Whiteboard</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        </div>
    </div>


    </>
  )
}

export default Benefits