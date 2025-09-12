import React from "react";
import ReactPlayer from "react-player";
import styles from "./LectureMiddle.module.css";

const LectureMiddle = ({ selectedLecture }) => {
  if (!selectedLecture) {
    return (
      <div className={styles.illustrator}>
        <img
          src="/lactureisnot.jpeg"
          className={styles.lactureisnot}
          alt="lecture coming soon.."
        />
      </div>
    );
  }

  if (!selectedLecture?.video) {
    return (
      <div className={styles.illustrator}>
        <img
          src="/lactureisnot.jpeg"
          className={styles.lactureisnot}
          alt="lecture coming soon.."
        />
      </div>
    );
  }

  const transcriptData = [
    { time: "00:00", text: "Welcome to the first lecture in introductory human physiology..." },
    { time: "00:12", text: "Today, we are going to talk about homeostasis..." },
    { time: "00:22", text: "And then we have been able to remove materials from the body..." },
  ];

  return (
    <div className={styles.middleSection}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{selectedLecture.title}</h1>
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>
        <ReactPlayer
          url={selectedLecture.video}
          className={styles.courseImage}
          controls
          playing
          loop
          width="100%"
          height="100%"
          onError={() => console.log("Video failed to load")}
        />
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

        {/* Footer Actions */}
        <div className={styles.lecFooter}>
          <div className={styles.like}>
            <img src="/like.png" alt="Like" />
            <p>Like</p>
          </div>
          <div className={styles.dislike}>
            <img src="/dislike.png" alt="Dislike" />
            <p>Dislike</p>
          </div>
          <div className={styles.issue}>
            <img src="/issue.png" alt="Issue" />
            <p>Report an issue</p>
          </div>
          <div className={styles.share}>
            <img src="/share.png" alt="Share" />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureMiddle;