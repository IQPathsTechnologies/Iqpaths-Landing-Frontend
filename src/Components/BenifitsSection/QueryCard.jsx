import React from 'react'
import styles from './QueryCard.module.css'

function QueryCard(data) {
    const {title, description} = data;
  return (
    <div className={styles.container}>
        <div className={styles.dropdownIcon}>
            <img src="src\assets\Tick Square.png" alt="" />
        </div>
        <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}
                <span className={styles.readMore}> Read More...</span>
            </p>
        </div>
    </div>
  )
}

export default QueryCard