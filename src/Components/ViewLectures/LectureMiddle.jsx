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
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{selectedLecture.title}</h1>
      </div>

      {/* Video Section using ReactPlayer */}
      <div className={styles.videoSection}>
        <div className={styles.reactPlayerWrapper}>
          <ReactPlayer
            url={selectedLecture.video}
            controls
            playing
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LectureMiddle;
