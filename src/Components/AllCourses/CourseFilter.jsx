import React, { useState } from "react";
import styles from "./CourseFilter.module.css";

const CourseFilter = ({ onCategoryChange, onFilterChange }) => {
  const title = "Discover Course & Bootcamp";
  const categories = [
    {
      name: "Course Category",
      subcategories: [
        "Web Design",
        "Management",
        "Marketing",
        "Python",
        "UI/UX",
        "Machine Learning",
        "Database Management",
      ],
    },
    {
      name: "Instructors",
      subcategories: ["Maya Banjay", "Trishna Panse"],
    },
    {
      name: "Price",
      subcategories: ["All", "Free", "Paid"],
    },
    {
      name: "Review",
      subcategories: ["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"],
    },
    {
      name: "Level",
      subcategories: ["All levels", "Beginner", "Intermediate", "Expert"],
    },
  ];

  const categoryTabs = [
    "ALL PROGRAM",
    "DATA SCIENCE",
    "MACHINE LEARNING",
    "PYTHON",
    "UI/UX",
    "PRODUCT MANAGEMENT",
    "BRANDING DESIGN",
    "WEB DEVELOPMENT",
  ];

  const [activeCategory, setActiveCategory] = useState("ALL PROGRAM");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleTabClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleCheckboxChange = (categoryName, subcategory) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[categoryName]?.includes(subcategory)) {
        updatedFilters[categoryName] = updatedFilters[categoryName].filter(
          (item) => item !== subcategory
        );
      } else {
        if (!updatedFilters[categoryName]) {
          updatedFilters[categoryName] = [];
        }
        updatedFilters[categoryName].push(subcategory);
      }
      return updatedFilters;
    });
  };

  const applyFilters = () => {
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
    setIsFilterDropdownOpen(false);
  };

  return (
    <div className={styles.coursesSection}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <button
          className={styles.filterButton}
          onClick={toggleFilterDropdown}
        >
          <p>FILTERS</p>
        </button>
      </div>

      {/* Category Tabs Section */}
      <div className={styles.categoryTabs}>
        {categoryTabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeCategory === tab ? styles.activeTab : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter Dropdown */}
      {isFilterDropdownOpen && (
        <div className={styles.filterDropdown}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category.name)}
              >
                <h3 className={styles.categoryTitle}>
                  {category.name}
                  <span className={styles.arrow}>
                    {expandedCategories[category.name] ? "▲" : "▼"}
                  </span>
                </h3>
              </div>
              {expandedCategories[category.name] && (
                <ul className={`${styles.subcategories} ${styles.open}`}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className={styles.subcategory}>
                      <label>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          onChange={() =>
                            handleCheckboxChange(category.name, subcategory)
                          }
                          checked={
                            selectedFilters[category.name]?.includes(subcategory)
                          }
                        />
                        {subcategory}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button
            className={styles.applyFiltersButton}
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseFilter;
