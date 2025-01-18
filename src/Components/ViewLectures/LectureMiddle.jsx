import React from "react";
import styles from "./LectureMiddle.module.css";

const LectureMiddle = ({ selectedLecture }) => {

  if(!selectedLecture){
    return <img src="/lactureisnot.jpeg" className={styles.lactureisnot} alt="lecture coming soon.." /> ;
  }

  if (!selectedLecture?.video) {
    // return <p>Please select a lecture to start playing.</p>;
    return <img src="/lactureisnot.jpeg" className={styles.lactureisnot} alt="lecture coming soon.." /> ;
  }


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
        <h1 className={styles.title}>{selectedLecture.title}</h1>
        {/* <p className={styles.subtitle}>
          By Dr. Aaryan Singhal  
        </p> */}
      </div>

      {/* Video Section */}
      <div className={styles.videoSection}>

        <iframe
          className={styles.courseImage}
          // onClick={handleVideoClick}
          autoPlay
          loop
          controls
          controlsList="nodownload"
          src={selectedLecture.video}
          width="100%" 
          height="100%" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          // muted
        >
          {console.log("selectedLecture.video", selectedLecture.video)}
        </iframe>
        
        {/* <div className={styles.videoControls}>
          <button className={styles.playButton}>▶</button>
         
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}></div>
          </div>
        </div> */}
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
            <img src="/like.png" alt="Like" />
            <p> Like </p>
        </div>
        <div className={styles.dislike}>
            <img src="/dislike.png" alt="Dislike" />
            <p> Dislike </p>
        </div>
        <div className={styles.issue}>
            <img src="/issue.png" alt="Issue" />
            <p> Report an issue </p>
        </div>
        <div className={styles.share}>
            <img src="/share.png" alt="Share" />
            <p> Share </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LectureMiddle;
