import React, { useState } from "react";
import styles from "./LectureLeft.module.css";

const LectureLeft = ({
  chapters,
  onLectureSelect,
  selectedChapter,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
 
  const handleClickWhenChapterSectionIsPressed = (index) => {
    toggleSection(index);
  };

  const sendLectureDataWhenLecturebuttonIsPressed = (item, sectionId) => {
    onLectureSelect(item ,sectionId);
  };
  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return isVisible ? (
    <aside className={styles.leftBar}>
      {/* Close Button */}
      <div className={styles.closeButton} onClick={() => setIsVisible(false)}>
        <img src="/prevLec.svg" alt="Home" />
        <span>Close</span>
      </div>

      {/* Dynamic Sections */}
      <div className={styles.sectionContainer}>
        {chapters?.map((section, index) => (
          <div key={index} className={styles.section}>
            {/* Section Title and Toggle Arrow */}
            <div
              className={styles.sectionHeader}
              onClick={() =>
                handleClickWhenChapterSectionIsPressed(index)
              }
            >
              <h3 className={styles.sectionTitle}>{section.name}</h3>
              <img
                src={expandedSections[index] ? "/down.png" : "/rightArrow.png"}
                alt={expandedSections[index] ? "Down Arrow" : "Right Arrow"}
                className={styles.arrowIcon}
              />
            </div>

            {/* {console.log("section", section.lectures)} */}
            {}
            {/* Section Content */}
            {expandedSections[index] && (
              <ul className={styles.sectionItems}>
                {section?.lectures?.length > 0 ? (
                  section.lectures?.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className={`${styles.sectionItem} ${
                          item.isActive ? styles.activeItem : ""
                        }`}
                        onClick={() =>
                          sendLectureDataWhenLecturebuttonIsPressed(item,section._id)
                        }
                      >
                        {/* {item.image} */}
                        {item.title}
                      </li>
                    );
                  })
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
      <img src="/nextLec.svg" alt="open" />
    </button>
  );
};

export default LectureLeft;
