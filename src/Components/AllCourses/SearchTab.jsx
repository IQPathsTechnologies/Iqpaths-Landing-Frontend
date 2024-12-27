import React from 'react';
import styles from './SearchTab.module.css';
// import { FaSearch } from 'react-icons/fa'; 

const SearchTab = () => {
  return (
    <div className={styles.overlay}>
    <div className={styles.searchBarWrapper}>
      <div className={styles.searchBar}>
        <div className={styles.inputWrapper}>
            <img
                src="src/assets/searchGrey.png" 
                alt="Search"
                 className={styles.inputIcon}
            /> 
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Lessons Name"
            />
        </div>
        <button className={styles.searchButton}>
          <img src="src/assets/Search.png" alt="Search" />
          SEARCH
        </button>
      </div>
    </div>
    </div>
  );
};

export default SearchTab;
