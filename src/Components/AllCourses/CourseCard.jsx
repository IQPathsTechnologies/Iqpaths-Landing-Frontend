import React from 'react';
import styles from "./CourseCard.module.css";

import pythonImg from "../../assets/subject.png";
import machineLearningImg from "../../assets/subject.png";
import backendImg from "../../assets/subject.png";
import frontendImg from "../../assets/subject.png";
import uiuxImg from "../../assets/subject.png";
import ratingImg from "../../assets/rating.png"

const CourseCard = () => {
    const courses = [
        {
            image: pythonImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "DS using Python",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],
        },
        {
            image: machineLearningImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "Machine Learning",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],
        },
        {
            image: machineLearningImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "Machine Learning",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],
        },
        {
            image: backendImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "Back End Developer",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],
        },
        {
            image: frontendImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "Front End Developer",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],
        },
        {
            image: uiuxImg,
            badge: "Start Learning",
            img: ratingImg,
            rating: "4.0 (2 rating)",
            title: "UI/UX Design",
            details: [
                "Learn ML course with internship in IQPath Technologies",
                "Limited seats available!!",
                { original: "Rs. 9999", discounted: "Rs. 4999" },
            ],  
        },
    ];

    return (
        <>
            <div className={styles.cardsContainer}>
            {courses.map((course, index) => (
                <div key={index} className={styles.card}>
                    {/* Card Image */}
                    <img
                        src={course.image}
                        alt={course.title}
                        className={styles.cardImage}
                    />

                    {/* Card Content */}
                    <div className={styles.cardContent}>
                        {/* Badge */}
                        <div>
                            <div className={styles.learning}>
                                <img src="src/assets/play.png" alt="" /> 
                                <span className={styles.badge}>{course.badge}</span>
                            </div>
                            <div className={styles.ranking}>
                                <img src={course.img} alt="rating" className={styles.stars}/>
                                <p className={styles.rating}> {course.rating} </p>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className={styles.title}>{course.title}</h3>

                        {/* Details */}
                        <div className={styles.detailsss}>
                        <ul className={styles.pointsList}>
                            {course.details.map((detail, i) => (
                                <li key={i} className={styles.point}>
                                    {i === 0 && <span className={styles.primaryDetail}>{detail}</span>}
                                    {i === 1 && <span className={styles.secondaryDetail}>{detail}</span>}
                                    {i === 2 && 
                                        <span className={styles.priceDetail}>
                                            <span className={styles.originalPrice}>{detail.original}</span>{' '}
                                            <span className={styles.discountedPrice}>{detail.discounted}</span>
                                        </span>}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className={styles.learnNowButton}>
                        Learn Now
                    </button>
                </div>
                ))}
            </div>
        </>
    );
};

export default CourseCard;