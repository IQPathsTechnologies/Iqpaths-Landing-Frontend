import React from 'react'
import styles from './ServiceCard2.module.css'
import { Link } from 'react-router-dom';
function ServiceCard({ data }) {
    const { coverPhoto, link, index, title, description } = data;

    console.log(data)

    return (
        <Link to={`/${title}`} className={styles.link}>
        <div className={`${styles.card} ${styles[`card${index % 3}`]} ${styles[`card${index % 6}`]}`}>
            {/* <div className={styles.logo}> */}
                <img src="src/assets/servicesImages/desktop_mac.png" alt={title}  className={styles.logo} />
            {/* </div> */}
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.description}>{description}</div>
            {/* <div className={styles.buttonContainer}>
                Learn More
            </div> */}
        </div>
        </Link>
    )
}

export default ServiceCard