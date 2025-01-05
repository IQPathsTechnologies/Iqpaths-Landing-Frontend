import React from "react";
import styles from "./EducationSection.module.css";

const EducationSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h5>Better Learning. Better Results</h5>
        <h1>
          Online education platform that fits <br />
          for everyone
        </h1>
        <p>
          Welcome to an inclusive online education platform that caters to
          learners of all backgrounds, levels, and aspirations. Our platform is
          designed to be accessible, flexible, and adaptable, making it the
          perfect choice for everyone, regardless of age or prior educational
          experience.
        </p>
        <button className={styles.exploreButton}>
          <a href="/home" className={styles.button}>
            Explore more about us &#8594;
          </a>
        </button>
      </div>
      <div className={styles.images}>
        <img src="./Experience.png" alt="Experience" />
      </div>
    </section>
  );
};

export default EducationSection;
