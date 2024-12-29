import React from 'react';
import styles from './BeniftsSection.module.css';
import QueryCard from './QueryCard';

const content = [
  {
    title: "1-on-1 lessons in more than 150 languages",
    description: "Our platform is loaded with features that will help you in every step of your journey.",
    additionalContent: "Here’s more about how we provide personalized lessons tailored just for you."
  },
  {
    title: "Personalized learning plans",
    description: "Get a customized learning plan tailored to your needs and goals.",
    additionalContent: "Each learning plan is created by expert tutors to help you achieve your goals faster."
  },
  {
    title: "Access to expert tutors",
    description: "Learn from the best with access to experienced professionals.",
    additionalContent: "Our tutors are certified and have years of teaching experience to guide you."
  }
];

function BeniftsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <img src="src/assets/video.png" alt="Video" className={styles.video} />
      </div>
      <div className={styles.containt}>
        <div className={styles.heading}>
          <h1>
            What Will You <span className={styles.blue}>Get</span>?
          </h1>
          <p>Our platform is loaded with features that will help you in every step of your journey.</p>
        </div>
        <div className={styles.queryContainer}>
          {content.map((item, index) => (
            <QueryCard
              key={index}
              title={item.title}
              description={item.description}
              additionalContent={item.additionalContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeniftsSection;
