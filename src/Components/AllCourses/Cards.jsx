import React, { useState } from "react";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";

const Cards = () => {
  const [activeCategory, setActiveCategory] = useState("ALL PROGRAM");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <CourseFilter onCategoryChange={handleCategoryChange} />
      <CourseCard activeCategory={activeCategory} />
    </div>
  );
};

export default Cards;
