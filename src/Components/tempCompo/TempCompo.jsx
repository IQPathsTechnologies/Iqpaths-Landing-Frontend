import React from 'react'
import styles from './tempCompo.module.css'

function tempCompo() {
return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Data Science using Python</h1>
            <p>Learn DS with Python, master data analysis with Python, and more courses to gain essential skills.</p>
            <div className={styles.whatYouLearn}>
                <h3>What you'll learn</h3>
                <ul>
                    <li>Gain proficiency in analyzing statistical procedures.</li>
                    <li>Interpret the output of various statistical tests.</li>
                    <li>Write results in APA format.</li>
                </ul>
            </div>
        </div>

        <div className={styles.sidebar}>
            <div className={styles.card}>
                <h2>$549 <span>40% off</span></h2>
                <button>Add to cart</button>
                <button>Buy Now</button>
                <p>30-day money-back guarantee</p>
            </div>
        </div>
    </div>
)
}

export default tempCompo