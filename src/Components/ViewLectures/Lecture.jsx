import React, { useState } from "react";
import LectureHeader from "./LectureHeader";
import LectureLeft from "./LectureLeft";
import LectureRight from "./LectureRight";
import LectureMiddle from "./LectureMiddle";
import styles from "./Lecture.module.css";

const Lecture = () => {
  const [isRightVisible, setIsRightVisible] = useState(true);

  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <LectureHeader />

      <div className={styles.mainContainer}>
        {/* Left Section */}
        <LectureLeft />

        <div className={styles.middleContainer}>
          <LectureMiddle />
        </div>

        {/* Right Section */}
        <LectureRight isVisible={isRightVisible} toggleVisibility={setIsRightVisible} />
      </div>
    </div>
  );
};

export default Lecture;
