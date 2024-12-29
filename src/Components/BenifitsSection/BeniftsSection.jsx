import React from 'react';
import styles from './BeniftsSection.module.css';
import QueryCard from './QueryCard';

const content = [
  {
    title: "1-on-1 lessons in more than 150 languages",
    description: "Our platform is loaded with features that will help you in every step of your journey."
  },
  {
    title: "Personalized learning plans",
    description: "Get a customized learning plan tailored to your needs and goals."
  },
  {
    title: "Access to expert tutors",
    description: "Learn from the best with access to experienced."
  }
  // Add more items if needed
];

function BeniftsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <img src="src/assets/video.png" alt="" className={styles.video} />
      </div>
      <div className={styles.containt}>
        <div className={styles.heading}>
          <h1>What Will You <span className={styles.blue}>Get</span>?</h1>
          <p>Our platform is loaded with features that will help you in every step of your journey.</p>
        </div>
        <div className={styles.queryContainer}>
          {content.map((item, index) => (
            <QueryCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeniftsSection;
