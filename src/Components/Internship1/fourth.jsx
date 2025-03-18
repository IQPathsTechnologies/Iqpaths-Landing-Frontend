import React, { useState } from 'react'
import styles from "./Fourth.module.css"
import Card from './Card';

const tempData = [
    {
        title: "Full Stack Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore, non commodi fugit nihil nemo accusantium ut eius et laborum modi dolorum recusandae ullam aspernatur obcaecati rem iusto? A, recusandae?"

    },
    {
        title: "Operational Manager",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore, non commodi fugit nihil nemo accusantium ut eius et laborum modi dolorum recusandae ullam aspernatur obcaecati rem iusto? A, recusandae?"

    },
    {
        title: "React Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore, non commodi fugit nihil nemo accusantium ut eius et laborum modi dolorum recusandae ullam aspernatur obcaecati rem iusto? A, recusandae?"

    },

]

function Fourth() {
    const [positions, setPositions] = useState(tempData)
    console.log(tempData[0].title)

    return (
        <section id='fourth' className={styles.fourth}>
            <p className={styles.title}>
                We have 17 open positions now!
            </p>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <ul>
                        <li className={styles.active}>All positions (17)</li>

                        <li>Enginering (7)</li>

                        <li>Product (3)</li>

                        <li>Design (1)</li>

                        <li>Operation (4)</li>

                        <li>Marketing (2)</li>

                    </ul>
                    <p className={styles.text}>We are always seeking talented people. In case you cannot find your desired position
                        here, please send us your LinkedIn profile and give us your contact information. We will be in
                        touch. </p>
                    <button type={styles.button}>Share your LinkedIn profile</button>
                </div>
                <div className={styles.right}>
                    <div>
                        {positions.map((item, index) => (
                            
                            <Card key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fourth
