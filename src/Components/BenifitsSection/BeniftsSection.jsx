import React, { useState } from "react";
import styles from "./BeniftsSection.module.css";
import QueryCard from "./QueryCard";

const content = [
  {
    title: "1-on-1 lessons in more than 150 languages",
    shortDescription: "Our platform offers features to guide you in your journey.",
    longDescription:
      "Our platform is loaded with features that will help you in every step of your journey, offering personalized lessons and more."
  },
  {
    title: "Personalized learning plans",
    shortDescription: "Get a tailored learning plan for your needs.",
    longDescription:
      "Get a customized learning plan tailored to your needs and goals, ensuring that your progress is optimized."
  },
  {
    title: "Access to expert tutors",
    shortDescription: "Learn from experienced tutors.",
    longDescription:
      "Learn from the best with access to experienced tutors who can provide you with personalized guidance and expertise."
  }
];

function BeniftsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Tracks which section is expanded

  const toggleContent = (index) => {
    // If the same index is clicked, collapse it; otherwise, expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <img src="src/assets/video.png" alt="" className={styles.video} />
      </div>
      <div className={styles.containt}>
        <div className={styles.heading}>
          <h1>
            What Will You <span className={styles.blue}>Get</span>?
          </h1>
          <p>
            Our platform is loaded with features that will help you in every step of your journey.
          </p>
        </div>
        <div className={styles.queryContainer}>
          {content.map((item, index) => (
            <QueryCard
              key={index}
              title={item.title}
              shortDescription={item.shortDescription}
              longDescription={item.longDescription}
              isExpanded={expandedIndex === index}
              onClick={() => toggleContent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeniftsSection;
