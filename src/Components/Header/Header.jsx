import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import SignUpPopup from "../CourseSection/SignUpPopup";
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';

const Header = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");

  const {  isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const apiClass = new AuthService();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Courses", link: "/courses" },
    { name: "My Learnings", link: "/my-learnings" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const handleLogout = async () => {
    try {
      await apiClass.logout();
      setIsLoggedIn(false);

      // Redirect to the login page
      // navigate('/home');
    } catch (error) {
      // Log the error for debugging
      // console.error("Logout failed", error);
      // Optionally provide feedback to the user
      alert("An error occurred while logging out. Please try again.");
    }
  };
  

  const handleOpenPopup = (type) => {
    setPopupType(type);
    setIsPopupVisible(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setPopupType("");
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await apiClass.getUser();
        if (response){
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Paths Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {navItems.map((tab) => (
            <li key={tab.name} className={styles.navItem}>
              <NavLink
                to={tab.link}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                {tab.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.lightBlue}>
        <div className={styles.darkBlue}>
          {isLoggedIn ? (
            <div className={styles.authButtons}>
              <NavLink to="/profile" className={styles.link}>
                <div className={styles.btn}>Profile</div>
              </NavLink>
              <div className={styles.btn} onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <NavLink
                to={{ pathname: '/signup', state: { type: 'signup' } }}
                className={styles.link}
              >
                <div className={styles.btn}>Sign Up</div>
              </NavLink>
              <NavLink
                to={{ pathname: '/login', state: { type: 'login' } }}
                className={styles.link}
              >
                <div className={styles.btn}>Login</div>
              </NavLink>
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
