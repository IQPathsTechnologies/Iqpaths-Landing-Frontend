import React, { useState } from "react";
import PlacementFilter from "./PlacementFilter";
import PlacementCard from "./PlacementCards";

const PlacementPage = () => {
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
      <PlacementFilter onCategoryChange={handleCategoryChange} onFilterChange={handleFilterChange} />
      <PlacementCard activeCategory={activeCategory} selectedFilters={selectedFilters} />
    </div>
  );
};

export default PlacementPage;
