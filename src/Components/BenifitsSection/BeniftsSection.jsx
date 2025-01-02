import React, { useState, useRef } from "react";
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
          {isPlaying ? '❚❚' : '▶️'} 
        </div>
        <img src="/Triangle.png" alt="" className={styles.triangle} />
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
