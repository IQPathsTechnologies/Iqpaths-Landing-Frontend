import React, { useState } from "react";
import styles from "./AboutHero.module.css";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Learn Skills From Our Top Instructors.",
    description:
      "Discover a world of knowledge and expertise as you embark on your learning journey with us. Our platform offers you the opportunity to learn from the best in the field, with top-tier instructors who are passionate about sharing their skills and insights.",
    buttonText: "Explore Courses",
    image: "./Slider.jpg", // Replace with your actual image link
  },
  {
    id: 2,
    title: "Enhance Your Career with Online Learning",
    description:
      "Take the next step in your career by gaining valuable skills. Join thousands of learners who have benefited from our expertly designed courses.",
    buttonText: "Get Started",
    image: "./Slider.jpg", // Replace with your actual image link
  },
  {
    id: 3,
    title: "Achieve Your Goals with Expert Guidance",
    description:
      "Our instructors are here to guide you every step of the way. Unlock your potential and achieve your personal and professional goals.",
    buttonText: "Learn More",
    image: "./Slider.jpg", // Replace with your actual image link
  },
];

const AboutHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }; 

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={styles.heroSection}
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className={styles.content}>
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
        <button className={styles.exploreButton}> 
          <Link to="/courses" className={styles.button}>
            {slides[currentSlide].buttonText}
          </Link>
        </button>
      </div>
      <div className={styles.controls}>
        <button className={styles.arrowButton} onClick={handlePrev}>
          &#8249;
        </button>
        <button className={styles.arrowButton} onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AboutHero;
