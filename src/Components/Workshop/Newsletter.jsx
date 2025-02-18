import React from 'react'
import styles from "./Newsletter.module.css"

const Newsletter = () => {
  return (
    <div className={styles.news}>
        <div className={styles.content}>
      <h1>Newsletter - Stay tune and get the latest Update</h1>
      <p>know about insights and interview tips of IQPath early from rest ...</p>
        </div>
        <button>SUBSCRIBE</button>
    </div>
  )
}

export default Newsletter