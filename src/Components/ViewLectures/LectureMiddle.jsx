import React from "react";
import styles from "./LectureMiddle.module.css";

const LectureMiddle = () => {
  const transcriptData = [
    {
      time: "00:00",
      text: "Welcome to the first lecture in introductory human physiology...",
    },
    {
      time: "00:12",
      text: "Today, we are going to talk about homeostasis...",
    },
    {
      time: "00:22",
      text: "And then we have been able to remove materials from the body...",
    },
    // Add more entries here if needed
  ];

  return (
    <div className={styles.middleSection}>
      {/* Title and Subtitle */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.subtitle}>
          By Dr. Aaryan Singhal • 25min • 4 Notes
        </p>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <img
          src="src/assets/lecture.png" // Replace with actual image URL
          alt="Course Thumbnail"
          className={styles.courseImage}
        />
        <div className={styles.videoControls}>
          <button className={styles.playButton}>▶</button>
          {/* Progress Bar */}
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}></div>
          </div>
        </div>
      </div>

      {/* Transcript Section */}
      <div className={styles.transcriptSection}>
        <h2 className={styles.transcriptTitle}>Full Transcript</h2>
        <div className={styles.transcriptContainer}>
          {transcriptData.map((entry, index) => (
            <div key={index} className={styles.transcriptEntry}>
              <span className={styles.timestamp}>{entry.time}</span>
              <p className={styles.text}>{entry.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.lecFooter}>
        <div className={styles.like}>
            <img src="src/assets/like.png" alt="Like" />
            <p> Like </p>
        </div>
        <div className={styles.dislike}>
            <img src="src/assets/dislike.png" alt="Dislike" />
            <p> Dislike </p>
        </div>
        <div className={styles.issue}>
            <img src="src/assets/issue.png" alt="Issue" />
            <p> Report an issue </p>
        </div>
        <div className={styles.share}>
            <img src="src/assets/share.png" alt="Share" />
            <p> Share </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LectureMiddle;
