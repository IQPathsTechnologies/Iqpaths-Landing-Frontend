import React, { useState } from "react";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";

const CoursePage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROGRAM");
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const courses = [
    // Array of courses
  ];

  return (
    <div>
      <CourseFilter onCategoryChange={handleCategoryChange} onFilterChange={handleFilterChange} />
      <CourseCard activeCategory={activeCategory} selectedFilters={selectedFilters} />
    </div>
  );
};

export default CoursePage;
