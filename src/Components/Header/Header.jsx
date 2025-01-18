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
  const [userDetails, setUserDetails] = useState({});

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const apiClass = new AuthService();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
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


  useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const response = await apiClass.getUserDetails();
          console.log('ProfilePage :: fetchUserDetails :: response', response);
          setUserDetails(response.user);
        } catch (error) {
          console.error("ProfilePage :: fetchUserDetails", error);
        }
      };
      fetchUserDetails();
    }, []);



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
        if (response) {
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
                <NavLink to="/cart" className={styles.link}>

                  <div className={styles.nacircle}>
                    <div className={styles.svg}>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.26953 0.493164C0.717246 0.493164 0.269531 0.940879 0.269531 1.49316C0.269531 2.04545 0.717246 2.49316 1.26953 2.49316V0.493164ZM3.56207 1.49316L4.52729 1.23175C4.40924 0.795846 4.01367 0.493164 3.56207 0.493164V1.49316ZM7.28744 15.2484L6.32221 15.5098C6.45248 15.9908 6.917 16.3025 7.41148 16.2407L7.28744 15.2484ZM18.7501 13.8156L18.8742 14.8078C19.2988 14.7547 19.6427 14.4373 19.7294 14.0182L18.7501 13.8156ZM20.4695 5.50511L21.4488 5.70771C21.5097 5.4132 21.4349 5.1069 21.245 4.87368C21.0551 4.64047 20.7703 4.50511 20.4695 4.50511V5.50511ZM4.64864 5.50511L3.68341 5.76652L4.64864 5.50511ZM1.26953 2.49316H3.56207V0.493164H1.26953V2.49316ZM7.41148 16.2407L18.8742 14.8078L18.6261 12.8233L7.16341 14.2561L7.41148 16.2407ZM19.7294 14.0182L21.4488 5.70771L19.4903 5.3025L17.7709 13.6129L19.7294 14.0182ZM2.59684 1.75458L3.68341 5.76652L5.61386 5.24369L4.52729 1.23175L2.59684 1.75458ZM3.68341 5.76652L6.32221 15.5098L8.25267 14.987L5.61386 5.24369L3.68341 5.76652ZM20.4695 4.50511H4.64864V6.50511H20.4695V4.50511ZM9.86953 19.0004C9.86953 19.2766 9.64567 19.5004 9.36953 19.5004V21.5004C10.7502 21.5004 11.8695 20.3811 11.8695 19.0004H9.86953ZM9.36953 19.5004C9.09339 19.5004 8.86953 19.2766 8.86953 19.0004H6.86953C6.86953 20.3811 7.98882 21.5004 9.36953 21.5004V19.5004ZM8.86953 19.0004C8.86953 18.7243 9.09339 18.5004 9.36953 18.5004V16.5004C7.98882 16.5004 6.86953 17.6197 6.86953 19.0004H8.86953ZM9.36953 18.5004C9.64567 18.5004 9.86953 18.7243 9.86953 19.0004H11.8695C11.8695 17.6197 10.7502 16.5004 9.36953 16.5004V18.5004ZM17.8695 19.0004C17.8695 19.2766 17.6457 19.5004 17.3695 19.5004V21.5004C18.7502 21.5004 19.8695 20.3811 19.8695 19.0004H17.8695ZM17.3695 19.5004C17.0934 19.5004 16.8695 19.2766 16.8695 19.0004H14.8695C14.8695 20.3811 15.9888 21.5004 17.3695 21.5004V19.5004ZM16.8695 19.0004C16.8695 18.7243 17.0934 18.5004 17.3695 18.5004V16.5004C15.9888 16.5004 14.8695 17.6197 14.8695 19.0004H16.8695ZM17.3695 18.5004C17.6457 18.5004 17.8695 18.7243 17.8695 19.0004H19.8695C19.8695 17.6197 18.7502 16.5004 17.3695 16.5004V18.5004Z" fill="black" />
                      </svg>

                    </div>
                  </div>
                </NavLink>
                <NavLink>
                  <div className={`${styles.nacircle} ${styles.naProfile}`}>
                    <img
                      id="profileImage"
                      src={userDetails?.profilePhoto ? userDetails.profilePhoto : `https://via.placeholder.com/80/d8d3de?text=User`}
                      alt="Profile"
                      className={styles.profilephoto}
                      onClick={toggleDropdown}
                    />

                    {isDropdownVisible && (
                      <div id="dropdownMenu" className={styles.dropdownMenu}>
                        <ul className={styles.dropdownMenuul}>
                          <NavLink to="/profile" className={styles.link}>
                            <li className={styles.dropdownMenuli}>Profile</li>
                          </NavLink>
                          <NavLink to="/logout" className={styles.link}>
                            <li className={styles.dropdownMenuli}>Logout</li>
                          </NavLink>
                        </ul>
                      </div>
                    )}
                  </div>
                </NavLink>

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
              <NavLink to="/profile" className={styles.link} onClick={closeSideBar}>
                <div className={styles.btnSideBar}>Profile</div>
              </NavLink>
              <div className={styles.btnSideBar} onClick=
                {() => {
                  handleLogout();
                  closeSideBar();
                }}>
                Logout
              </div>
            </div>
          ) : (
            <div>
              <NavLink
                to={{ pathname: "/signup", state: { type: "signup" } }}
                className={styles.link}
                onClick={closeSideBar}
              >
                <div className={styles.btnSideBar}>Sign Up</div>
              </NavLink>
              <NavLink
                to={{ pathname: "/login", state: { type: "login" } }}
                className={styles.link}
                onClick={closeSideBar}
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
