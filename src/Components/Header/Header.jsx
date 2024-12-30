// Header.jsx
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import SignUpPopup from "../CourseSection/SignUpPopup";
import { Link } from 'react-router-dom';

 
const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [popupType, setPopupType] = useState("");
  
    const handleOpenPopup = (type) => {
      setPopupType(type);
      setIsPopupVisible(true); // Show the pop-up
      document.body.style.overflow = "hidden"; // Disable scrolling
    };
  
    const handleClosePopup = () => {
      setIsPopupVisible(false); // Hide the pop-up
      setPopupType("");
      document.body.style.overflow = "auto"; // Enable scrolling
    };
  
    useEffect(() => {
      // Cleanup in case the component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);
  

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="src/assets/logo.svg"
          alt="Paths Logo"
          className={styles.logoImage}
        />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {[
            "Home",
            "About Us",
            // "Services",
            "Courses",
            "My Learnings",
            "Contact Us",
          ].map((tab) => (
            <Link to={`/${tab}`} key={tab} className={styles.link}>
            <li
              key={tab}
              className={`${styles.navItem} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className={styles.lightBlue}>
        <div className={styles.darkBlue}>
          <div className={styles.authButtons}>
            {/* <Link to="/signup" className={styles.link}> */}
                <div className={styles.btn} onClick={() => handleOpenPopup("Sign Up")}>Sign Up</div>
            {/* </Link> */}
            {/* <Link to="/login" className={styles.link}> */}
              <div className={styles.btn} onClick={() => handleOpenPopup("Login")}>Login</div>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <SignUpPopup type={popupType} onClose={handleClosePopup} />
      )}
    </header>
  );
};

export default Header;
