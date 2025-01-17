import React, { useState, useEffect, useContext } from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import SignUpPopup from "../CourseSection/SignUpPopup";
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';

const Header = () => { 
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  const {  isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const apiClass = new AuthService();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Courses", link: "/courses" },
    { name: "My Learnings", link: "/my-learnings" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate('/logout');
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
        const response = await apiClass.getUserForLogin();
        if (response){
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);


  const openSideBar = () => {
    setIsSideBarVisible(true);
  };

  const closeSideBar = () => {
    setIsSideBarVisible(false);
  }

  return (
    <>
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

            <li
              className={`${styles.hamburgerMenu}`}
              onClick={openSideBar}
            >
              <img src="./hamburgerMenu.svg" alt="" />
            </li>
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
                  to={{ pathname: "/signup", state: { type: "signup" } }}
                  className={styles.link}
                >
                  <div className={styles.btn}>Sign Up</div>
                </NavLink>
                <NavLink
                  to={{ pathname: "/login", state: { type: "login" } }}
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

      {isSideBarVisible && (
        <div className={styles.sidebar}>
          <nav className={styles.navbar}>
            <ul className={styles.navListSideBar}>
              <li className={styles.navItemClose} onClick={closeSideBar}>
                <img src="./HamburgerClose.svg" alt="" />
              </li>
              {navItems.map((tab) => (
                <li key={tab.name} className={styles.navItemSideBar} onClick={closeSideBar}>
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
          {isLoggedIn ? (
            <div>
              <NavLink to="/profile" className={styles.link}>
                <div className={styles.btnSideBar}>Profile</div>
              </NavLink>
              <div className={styles.btnSideBar} onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            <div>
              <NavLink
                to={{ pathname: "/signup", state: { type: "signup" } }}
                className={styles.link}
              >
                <div className={styles.btnSideBar}>Sign Up</div>
              </NavLink>
              <NavLink
                to={{ pathname: "/login", state: { type: "login" } }}
                className={styles.link}
              >
                <div className={`${styles.btnSideBar} ${styles.loginBtn}`}>
                  Login
                </div>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
