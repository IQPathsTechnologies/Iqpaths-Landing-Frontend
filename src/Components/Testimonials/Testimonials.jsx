import React from 'react'
import styles from './testimonials.module.css'

function testimonial() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img src="src\assets\invertedComma.svg" alt="" />
            <h1> what our students have to say</h1>
            <p>Our students are our biggest fans. Here's what they have to say about us.</p>
        </div>
        <div className={styles.testimonialcards}>
            <div className={styles.card}>
                <div className={styles.cardHeading}>
                    <h4>What they say</h4>
                    <div className={styles.dots}>. . . . .</div>
                </div>
                <div className={styles.description}>
                “Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”
                </div>
                <div className={styles.profileContainerFooter}>
                    <div className={styles.profileContainer}>
                        <div className={styles.profile}>
                            <img src="src/assets/user1.png" alt="" />
                        </div>
                        <div>
                            <h2>John Doe</h2>
                            <p>Product Designer at tokopedia</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.btn}>{`<`}</div>
                        <div className={styles.btn}>{`>`}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default testimonial