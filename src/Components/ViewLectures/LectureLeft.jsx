import React, { useState } from "react";
import styles from "./LectureLeft.module.css";

const LectureLeft = ({
  chapters,
  onLectureSelect,
  selectedChapter,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  // console.log("left me ye chapter aye", chapters);
  // Dynamic data
  const sections = [
    {
      title: "Getting Started",
      items: [
        {
          id: 1,
          image: "/icons.png",
          label: "Welcome to the course",
          isActive: true,
        },
        {
          id: 2,
          image: "/icons.png",
          label: "What is React JS?",
          isActive: false,
        },
        {
          id: 3,
          image: "/icons.png",
          label: "Why 'React' but not 'JavaScript'?",
          isActive: false,
        },
        {
          id: 4,
          image: "/icons.png",
          label: "Setting up Environment",
          isActive: false,
        },
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
    {
      title: "Getting Started",
      items: [
        {
          id: 1,
          image: "/icons.png",
          label: "Welcome to the course",
          isActive: true,
        },
        {
          id: 2,
          image: "/icons.png",
          label: "What is React JS?",
          isActive: false,
        },
        {
          id: 3,
          image: "/icons.png",
          label: "Why 'React' but not 'JavaScript'?",
          isActive: false,
        },
        {
          id: 4,
          image: "/icons.png",
          label: "Setting up Environment",
          isActive: false,
        },
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
    {
      title: "Getting Started",
      items: [
        {
          id: 1,
          image: "/icons.png",
          label: "Welcome to the course",
          isActive: true,
        },
        {
          id: 2,
          image: "/icons.png",
          label: "What is React JS?",
          isActive: false,
        },
        {
          id: 3,
          image: "/icons.png",
          label: "Why 'React' but not 'JavaScript'?",
          isActive: false,
        },
        {
          id: 4,
          image: "/icons.png",
          label: "Setting up Environment",
          isActive: false,
        },
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
    {
      title: "Getting Started",
      items: [
        {
          id: 1,
          image: "/icons.png",
          label: "Welcome to the course",
          isActive: true,
        },
        {
          id: 2,
          image: "/icons.png",
          label: "What is React JS?",
          isActive: false,
        },
        {
          id: 3,
          image: "/icons.png",
          label: "Why 'React' but not 'JavaScript'?",
          isActive: false,
        },
        {
          id: 4,
          image: "/icons.png",
          label: "Setting up Environment",
          isActive: false,
        },
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
