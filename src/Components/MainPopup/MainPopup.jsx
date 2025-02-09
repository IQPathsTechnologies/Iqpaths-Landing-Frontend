import React, { useState, useEffect } from "react";
import styles from "./MainPopup.module.css"; 

const MainPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const popupContent = {
    title: "Aptitude Placement Course",
    description:
      "Prepare for placements with expert-led content, practice tests, and a certificate to enhance your resume.",
    highlights: [
      "50+ hours of expert lectures",
      "1000+ practice questions",
      "Mock placement tests",
    ],
    buttonText: "Get It Now",
    imageUrl: "/aptibanner.png", 
    courseLink: "/course/Quant%20Aptitude%20&%20Reasoning/677e6daef63b686896f77ce7", 
  };

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("popupShown");
    if (!isPopupShown) {
      setIsVisible(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.(); 
  };

  const handleRedirect = () => {
    window.location.href = popupContent.courseLink; 
  };

  return isVisible ? (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{popupContent.title}</h2>
          <p className={styles.para}>{popupContent.description}</p>
          <ul className={styles.highlights}>
            {popupContent.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={handleRedirect} className={styles.redirectBtn}>
            {popupContent.buttonText}
          </button>
        </div>
        <div className={styles.image}>
          <img
            src={popupContent.imageUrl}
            alt="Course Banner"
            className={styles.banner}
          />
          <button onClick={handleClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default MainPopup;
