import React, { useState } from "react";
import InternshipFilter from "./InternshipFilter";
import InternshipCard from "./InternshipCards";

const InternshipPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL DOMAINS"); 
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
      <InternshipFilter onCategoryChange={handleCategoryChange} onFilterChange={handleFilterChange} />
      <InternshipCard activeCategory={activeCategory} selectedFilters={selectedFilters} />
    </div>
  );
};

export default InternshipPage;
