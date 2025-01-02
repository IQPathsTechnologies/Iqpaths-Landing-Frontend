import React from 'react'
import styles from './ServiceCard.module.css'
import { Link } from 'react-router-dom';
function ServiceCard({ data }) {
    const { coverPhoto, link, index, title, description } = data;

    return (
        <div className={`${styles.card} ${styles[`card${index % 3}`]} `}>
            <div className={styles.logo}>
                <img src={coverPhoto} alt={title} />
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttonContainer}>
                <Link to={`/${title}`} className={styles.button}>Learn More</Link>
            </div>
        </div>
    )
}

export default ServiceCard