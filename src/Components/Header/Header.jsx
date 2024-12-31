// Header.jsx
import React, { useState, useEffect, useContext } from 'react';
import styles from './Header.module.css';
import SignUpPopup from "../CourseSection/SignUpPopup";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';

 
const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [popupType, setPopupType] = useState("");

  const { user, isLoggedIn, setIsLoggedIn, setUser } = useContext(UserContext);

  const apiClass = new AuthService();
   
  const handleLogout = async () => {
    try {
      await apiClass.logout(); // Assuming there's a logout method in AuthService
      localStorage.removeItem('user');
      setUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
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
          src="/logo.svg"
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
        {isLoggedIn ? (
          <div className={styles.authButtons}>
            <Link to="/profile" className={styles.link}>
              <div className={styles.btn}>Profile</div>
            </Link>
            <div className={styles.btn} onClick={handleLogout}>Logout</div>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link to={{ pathname: '/signup', state: { type: 'signup' } }} className={styles.link}>
                <div className={styles.btn}>Sign Up</div>
            </Link>
            <Link to={{ pathname: '/login', state: { type: 'login' } }} className={styles.link}>
              <div className={styles.btn}>Login</div>
            </Link>
          </div>
        )}
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
