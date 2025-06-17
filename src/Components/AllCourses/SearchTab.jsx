import React, { useContext, useRef, useState } from 'react';
import styles from './SearchTab.module.css';
import {AllTypeOfSearch} from '../../axios/Search';
import { CoursesContext } from '../../context/coursesContext'; 

const SearchTab = ({flag}) => {
  const searchClass = new AllTypeOfSearch();
  const{setCourses} = useContext(CoursesContext);
  
  const dataWhichNeedToBeSearched = useRef(""); 
  const [suggestions, setSuggestions] = useState([]);

  const handleWhatweWantToSearch =async()=>{
    const response = await searchClass.search(dataWhichNeedToBeSearched.current?.value, flag);

    setCourses(response.data.data.items);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleWhatweWantToSearch();
    }
  };

  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await searchClass.getSuggestions(value);
      setSuggestions(response.data.data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    dataWhichNeedToBeSearched.current.value = e.target.value;
    fetchSuggestions(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    dataWhichNeedToBeSearched.current.value = suggestion;
    setSuggestions([]);
    handleWhatweWantToSearch();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.inputWrapper}>
            <img
              src="/searchGrey.png"
              alt="Search"
              className={styles.inputIcon}
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Lessons Name"
              ref={dataWhichNeedToBeSearched}
              onKeyDown={handleKeyPress}
              onChange={handleInputChange}
            />
            
          </div>
          <button className={styles.searchButton} onClick={handleWhatweWantToSearch}>
            <img src="/Search.png" alt="Search" />
            <span>SEARCH</span>
          </button>
        </div>
      </div>

      {suggestions.length > 0 && (
        <ul className={styles.suggestionList}>
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(s)}
              className={styles.suggestionItem}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchTab;
