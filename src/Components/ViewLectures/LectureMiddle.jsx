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

  return (
    <div className={styles.middleSection}>
      {/* Title */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{selectedLecture.title}</h1>
      </div>

      {/* Video Player Section */}
      <div className={styles.videoSection}>
        <ReactPlayer
          url={selectedLecture.video}
          controls
          playing
          width="100%"
          height="100%"
          className={styles.reactPlayer}
        />
      </div>
    </div>
  );
};

export default LectureMiddle;
