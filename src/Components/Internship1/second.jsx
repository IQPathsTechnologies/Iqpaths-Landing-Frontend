import React from 'react'
import styles from "./Second.module.css"

function Second() {
  return (
    <section className={styles.second}>
    <div className={styles.mid2}>
        <h3 className={styles.tittle}>What make IQ Paths a great place to work?</h3>
        <div className={styles.card_wrapper}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src="https://plus.unsplash.com/premium_photo-1679923906308-c26a0e2ca510?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
                <div className={styles.card_tittle}>
                Inclusive Culture
                </div>
                <div className={styles.card_des}>
                A welcoming environment that celebrates diversity and encourages collaboration.
                </div>
            </div>
            <div className={styles.card}>
                <div  className={styles.card_img}>
                    <img src="https://plus.unsplash.com/premium_photo-1679922390184-2e21a7e06bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt=""/>
                </div>
                <div className={styles.card_tittle}>
                Passionate Team
                </div>
                <div  className={styles.card_des}>
                Work with experts who are dedicated to making a difference in the world of AI and ML.
                </div>
            </div>
            <div className={styles.card}>
                <div  className={styles.card_img}>
                    <img src="https://plus.unsplash.com/premium_photo-1679923906308-c26a0e2ca510?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
                <div className={styles.card_tittle}>
                Continuous Learning
                </div>
                <div  className={styles.card_des}>
                We believe in lifelong learning and offer opportunities for personal and professional growth.
                </div>
            </div>
            <div className={styles.card}>
                <div  className={styles.card_img}>
                    <img src="https://plus.unsplash.com/premium_photo-1679922390184-2e21a7e06bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt=""/>
                </div>
                <div className={styles.card_tittle}>
                Work-Life Balance
                </div>
                <div  className={styles.card_des}>
                Flexible arrangements to ensure you excel in both personal and professional spheres.
                </div>
            </div>
            <div className={styles.card}>
                <div  className={styles.card_img}>
                    <img src="https://plus.unsplash.com/premium_photo-1679922390184-2e21a7e06bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8" alt=""/>
                </div>
                <div className={styles.card_tittle}>
                Impactful Work
                </div>
                <div className={styles.card_des}>
                Be part of projects that influence industries and create meaningful change.
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Second
