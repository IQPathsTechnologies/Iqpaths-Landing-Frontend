import React, { useContext, useRef } from 'react';
import styles from './SearchTab.module.css';
// import { FaSearch } from 'react-icons/fa'; 
import {AllTypeOfSearch} from '../../axios/Search';
import { CoursesContext } from '../../context/coursesContext'; 

const SearchTab = ({flag}) => {
  const searchClass = new AllTypeOfSearch();
  const{setCourses}=useContext(CoursesContext);
  
  const dataWhichNeedToBeSearched = useRef(""); 
  const handleWhatweWantToSearch =async()=>{
    // console.log("data jo search kiya ", dataWhichNeedToBeSearched.current.value);
    const response = await searchClass.search(dataWhichNeedToBeSearched.current?.value, flag);
    console.log("search ka data",response.data.data.items);
    console.log("search ka pura data",response);
    setCourses(response.data.data.items);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleWhatweWantToSearch();
    }
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
            />
          </div>
          <button className={styles.searchButton} onClick={handleWhatweWantToSearch}>
            <img src="/Search.png" alt="Search" />
            <span>SEARCH</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
