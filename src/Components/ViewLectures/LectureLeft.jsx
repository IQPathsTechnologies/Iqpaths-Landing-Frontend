import React, { useState } from "react";
import styles from "./LectureLeft.module.css";

const LectureLeft = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  // Dynamic data
  const sections = [
    {
      title: "Getting Started",
      items: [
        { id: 1, image: "src/assets/icons.png", label: "Welcome to the course", isActive: true },
        { id: 2, image: "src/assets/icons.png",label: "What is React JS?", isActive: false },
        { id: 3, image: "src/assets/icons.png",label: "Why 'React' but not 'JavaScript'?", isActive: false },
        { id: 4, image: "src/assets/icons.png",label: "Setting up Environment", isActive: false },
      ],
    },
    {
      title: "JavaScript Refresher",
      items: [],
    },
    {
      title: "React Basics & Working with Components",
      items: [],
    },
    {
      title: "React States & Working with Events",
      items: [],
    },
  ];

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return isVisible ? (
    <aside className={styles.leftBar}>
      {/* Close Button */}
      <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}
      >
        Close
      </button>

      {/* Dynamic Sections */}
      <div className={styles.sectionContainer}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            {/* Section Title and Toggle Arrow */}
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection(index)}
            >
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <img
                src={
                  expandedSections[index]
                    ? "src/assets/down.png"
                    : "src/assets/rightArrow.png"
                }
                alt={expandedSections[index] ? "Down Arrow" : "Right Arrow"}
                className={styles.arrowIcon}
              />
            </div>

            {/* Section Content */}
            {expandedSections[index] && (
              <ul className={styles.sectionItems}>
                {section.items.length > 0 ? (
                  section.items.map((item) => (
                    <li
                      key={item.id}
                      className={`${styles.sectionItem} ${
                        item.isActive ? styles.activeItem : ""
                      }`}
                    >
                      {/* {item.image} */}
                      {item.label}
                    </li>
                  ))
                ) : (
                  <li className={styles.noContent}>No content available</li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  ) : (
    <button className={styles.openButton} onClick={() => setIsVisible(true)}>
      <img src="src/assets/rightArrow.png" alt="open" />
    </button>
  );
};

export default LectureLeft;
