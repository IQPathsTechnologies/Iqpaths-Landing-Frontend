import React, { useContext, useRef } from 'react';
import styles from './SearchTab.module.css';
// import { FaSearch } from 'react-icons/fa'; 
import {AllTypeOfSearch} from '../../axios/Search';
import { CoursesContext } from '../../context/coursesContext';

const SearchTab = () => {
  const searchClass = new AllTypeOfSearch();
  const{setCourses}=useContext(CoursesContext);
  const dataWhichNeedToBeSearched = useRef(""); 
  const handleWhatweWantToSearch =async()=>{
    const response = await searchClass.search(dataWhichNeedToBeSearched.current.value);
    console.log(response.data.data.courses);
    // setCourses(response.data.data.courses);
  }
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
            />
        </div>
        <button className={styles.searchButton} onClick={handleWhatweWantToSearch}>
          <img src="/Search.png" alt="Search" />
          SEARCH
        </button>
      </div>
    </div>
    </div>
  );
};

export default SearchTab;
