import React, { useState, useEffect } from "react";
import styles from "./testimonials.module.css";
import { AuthService } from "../../axios/User";

const apiClass = new AuthService();

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialData, setTestimonialData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await apiClass.getTestimonials();
        setTestimonialData(response.testimonials || []); // Ensure response is not null/undefined
        // console.log("Testimonial :: getTestimonials :: response", response);
      } catch (error) {
        console.log("Testimonial :: getTestimonials :: error", error);
      }
    };
    getTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!testimonialData || testimonialData.length === 0) {
    return <p>Loading...</p>; // Render loading if no data is available
  }

  const { message, name, designation, profilePhoto } =
    testimonialData[currentIndex] || {}; // Safely access data

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="src/assets/invertedComma.svg" alt="" />
        <h1>What our students have to say</h1>
        <p>
          Our students are our biggest fans. Here's what they have to say about
          us.
        </p>
      </div>
      <div className={styles.testimonialcards}>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h4>What they say</h4>
            <div className={styles.dotContainer}>
              {testimonialData.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dots} ${
                    index === currentIndex
                      ? styles.dotactive
                      : styles.dotnotActive
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.description}>{message || "No message available"}</div>
          <div className={styles.profileContainerFooter}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>
                <img
                  src={profilePhoto || "src/assets/defaultProfile.png"} // Fallback for missing image
                  alt={name || "Anonymous"}
                />
              </div>
              <div className={styles.profileInfo}>
                <h2>{name || "Anonymous"}</h2>
                <p>{designation || "No designation provided"}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.btn} onClick={handlePrev}>
                {`<`}
              </div>
              <div className={styles.btn} onClick={handleNext}>
                {`>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
