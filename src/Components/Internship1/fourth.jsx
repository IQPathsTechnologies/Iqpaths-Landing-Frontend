import React, { useEffect, useState } from 'react'
import styles from "./Fourth.module.css"
import Card from './Card';
import { AuthService } from '../../axios/User';

const apiClass = new AuthService();

function Fourth() {
    const [positions, setPositions] = useState(null)
    


    useEffect(() => {
        async function fetchData() {
            try {
                const responseInternship = await apiClass.getInternshipPositions();
                console.log(responseInternship.internships)
                setPositions(responseInternship.internships)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
        , []);


    return (
        <section id='fourth' className={styles.fourth}>
            <p className={styles.title}>
                We have 17 open positions now!
            </p>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <ul>
                        <li className={styles.active}>All positions ({positions ? positions.length : 0})</li>
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
                        {positions ? positions.map((item, index) => (
                            <Card key={index} title={item.title} description={item.detailedDescription} />
                        )) : (
                            Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className={styles.skeletonCard}></div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fourth
