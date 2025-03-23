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
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt=""/>
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
                    <img src= "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
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
                    <img src="https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
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
                    <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" alt=""/>
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
                    <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt=""/>
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
