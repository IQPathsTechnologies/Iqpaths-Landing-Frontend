import React from "react";
import styles from "./Instructor.module.css";

const Instructor = () => {
  // Dynamic data for the component
  const instructorData = {
    title: "Our Instructor",
    description:
      "Discover brilliance in code with our expert instructor. Passionate mentors dedicated to fulfilling your coding journey at IQPaths.",
    instructorName: "Dr. Tejalal Choudhary",
    instructorTitle: "Data Scientist, Ph.D. (Bennett University)",
    instructorDescription:
      "Sanket Gupta is an ace software engineer working in the role of Computer Science at Medi-Caps University and a popular machine learning instructor at IQPaths.",
    instructorImage: "src/assets/instructorCourse.png", // Replace with the correct image path
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>{instructorData.title}</h2>
        <p className={styles.description}>{instructorData.description}</p>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <h3 className={styles.instructorName}>{instructorData.instructorName}</h3>
        <p className={styles.instructorTitle}>{instructorData.instructorTitle}</p>
        <p className={styles.instructorDescription}>
          {instructorData.instructorDescription}
        </p>
        <div className={styles.imageWrapper}>
          <img
            src={instructorData.instructorImage}
            alt={instructorData.instructorName}
            className={styles.instructorImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
