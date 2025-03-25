import React, { useEffect, useState } from 'react'
import styles from "./Position.module.css"
import Card from './Card';
import { AuthService } from '../../axios/User';

const apiClass = new AuthService();

function Position() {
    const [positions, setPositions] = useState(null)
    // const position = [
    //     { _id: "677d1bc4d5f03c47e237798d", title: "Full Stack Web Development", category: "Engineering" },
    //     { _id: "678a80babf149ca1567ba608", title: "Web Development with React", category: "Engineering" },
    //     { _id: "678a8100bf149ca1567ba609", title: "Backend Web Development", category: "Engineering" },
    //     { _id: "677d1bc4d5f03c47e237768d", title: "Machine Learning", category: "Engineering" },
    //     { _id: "677d1bc4d5f03c47e237793d", title: "Data Science", category: "Product" },
    //     { _id: "67d968a577712cb5eab31b81", title: "Operations", category: "Operations" },
    //     { _id: "67d96a5c77712cb5eab31b63", title: "Digital Marketing", category: "Marketing" },
    //     { _id: "67d96b2f77712cb5eab36b64", title: "Video Editor", category: "Design" },
    //     { _id: "67d96b8977712cb5eab31b65", title: "Graphic Designer", category: "Design" },
    //   ];

    
    const categories = [
        { name: "All Positions", count: positions ? positions.length : 0 },
        { name: "Engineering", count: positions ? positions.filter((c) => c.category === "Engineering").length : 0 },
        { name: "Product", count: positions ? positions.filter((c) => c.category === "Product").length : 0 },
        { name: "Design", count: positions ? positions.filter((c) => c.category === "Design").length : 0 },
        { name: "Operations", count: positions ? positions.filter((c) => c.category === "Operations").length : 0 },
        { name: "Marketing", count: positions ? positions.filter((c) => c.category === "Marketing").length : 0 },
    ];

    const [activeCategory, setActiveCategory] = useState("All Positions");

    // Filter courses based on selected category
    const filteredPositions =
        activeCategory === "All Positions"
            ? positions
            : positions.filter((post) => post.category === activeCategory);



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
                We have {positions ? positions.length : 0} open positions now!
            </p>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <ul>
                        {categories.map((cat) => (
                            <li
                                key={cat.name}
                                className={`${activeCategory === cat.name ? styles.active : ""}`}

                                onClick={() => setActiveCategory(cat.name)}
                            >
                                {cat.name} ({cat.count})
                            </li>
                        ))}
                    </ul>
                    <p className={styles.text}>We are always seeking talented people. In case you cannot find your desired position
                        here, please send us your LinkedIn profile and give us your contact information. We will be in
                        touch. </p>
                    <button type={styles.button}>Join the Team </button>
                </div>
                <div className={styles.right}>
                    <div>
                        {positions ? filteredPositions.map((item, index) => (
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

export default Position
