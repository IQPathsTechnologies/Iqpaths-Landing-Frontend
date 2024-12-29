import React, { useState } from "react";
import styles from "./CourseFilter.module.css";

const CourseFilter = ({ onCategoryChange }) => {
  const title = "Discover Course & Bootcamp";
  const categories = [
    "ALL PROGRAM",
    "DATA SCIENCE",
    "MACHINE LEARNING",
    "PYTHON",
    "UI/UX",
    "PRODUCT MANAGEMENT",
    "BRANDING DESIGN",
    "WEB DEVELOPMENT",
  ];
  const filterButtonLabel = "FILTERS";

  const [activeCategory, setActiveCategory] = useState("ALL PROGRAM");

  const handleTabClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category); // Notify parent of the category change
    }
  };

  return (
    <div className={styles.coursesSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.filterButton}>
          <p>{filterButtonLabel}</p>
        </button>
      </div>

      {/* Category Tabs Section */}
      <div className={styles.categoryTabs}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeCategory === category ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
