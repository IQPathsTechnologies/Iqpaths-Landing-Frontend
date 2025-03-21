import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Card.module.css"

const Card = ({ title, description, }) => {
    return (
        <div className={styles.card}>
            <p className={styles.card_title}>
            {title}
            </p>
            <div className={styles.tags}>
                <div className={styles.tag}>Hybrid</div>
                <div className={styles.tag}>Full-time</div>
            </div>
            <div className={styles.carddes}>
              {description}
            </div>
            <div className={styles.buttons}>
                <Link to={`/internship/${title}`} className={styles.link}>
                 <button type="button">Apply Now<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12L20 12M20 12L13.1818 5M20 12L13.1818 19" stroke="white"
                        stroke-width="2" />
                </svg>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Card