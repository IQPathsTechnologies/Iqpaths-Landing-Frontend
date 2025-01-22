import React, { useState, useRef } from "react";
import styles from "./BeniftsSection.module.css";
import QueryCard from "./QueryCard";

const content = [
  { 
    title: "Comprehensive Learning Programs",
    shortDescription: " Access advanced courses in machine learning, , data",
    longDescription:
      " Access advanced courses in machine learning, data analysis, and software development, tailored to industry demands and enriched with live projects and expert mentorship."
  },
  {
    title: "Hands-On Industry Experience",
    shortDescription: " Gain practical exposure through internships with top",
    longDescription:
      "Gain practical exposure through internships with top companies, enhancing your real-world skills and competitive edge."
  },
  {
    title: "Personalized Career Support",
    shortDescription: " Benefit from mock interviews, professional development",
    longDescription:
      "Benefit from mock interviews, professional development coaching, and personalized placement services to secure your dream job. "
  }
];

function BeniftsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null); 
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleContent = (index) => {
    // If the same index is clicked, collapse it; otherwise, expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        {/* <img src="/video.png" alt="" className={styles.video} /> */}

        <video
          className={styles.video}
          ref={videoRef}
          onClick={handleVideoClick}
          autoPlay
          loop
          // muted
        >
          <source src="BenifitsVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.playPauseIcon} onClick={handleVideoClick}>
          {isPlaying ? (<img src="/pause.svg" alt="" />) : (<img src="/play.svg" onClick={handleVideoClick} alt="" />)} 
        </div>
        <img src="/Triangle.png" alt="" className={styles.triangle} />
      </div>
      <div className={styles.containt}>
        <div className={styles.heading}>
          <h1>
            What Will You <span className={styles.blue}>Get</span>?
          </h1>
          <p>
            Unlock hands-on experience, expert guidance, exclusive internships, and career-boosting opportunities. Elevate your skills and knowledge with IQPaths—your success partner!
          </p>
        </div>
        <div className={styles.queryContainer}>
          {content?.map((item, index) => (
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
