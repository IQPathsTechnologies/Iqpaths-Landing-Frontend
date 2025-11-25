import React, { useState, useEffect, useContext, lazy } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import SignUpPopup from "../CourseSection/SignUpPopup";
import { UserContext } from "../../context/userContext";
import { AuthService } from "../../axios/User";
import { LoaderCircle, LogOut, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    { name: "Create Resume", link: "https://resume.iqpaths.com" },
  ];
  const navigate = useNavigate();
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await apiClass.logout();
      setIsLoggedIn(false);
      notifySuccess("Logged out successfully");

      // Redirect to the login page
    } catch (error) {
      // Log the error for debugging
      console.error("Logout failed", error);
      // Optionally provide feedback to the user
      notifyError("An error occurred while logging out. Please try again.");
    }
    finally
    {
      setIsLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClass.getUserDetails();
        // console.log('ProfilePage :: fetchUserDetails :: response', response);
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
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/newLogo.svg" alt="Paths Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            {navItems?.map((tab) => (
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

            <li className={`${styles.hamburgerMenu}`} onClick={openSideBar}>
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
                      <ShoppingCart size={30} />
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/profile">
                  <div className={`${styles.nacircle} ${styles.naProfile}`}>
                    <img
                      id="profileImage"
                      src={
                        userDetails?.profilePhoto
                          ? userDetails.profilePhoto
                          : `/dummyProfilePhoto.jpg`
                      }
                      alt="Profile"
                      className={styles.profilephoto}
                      onClick={toggleDropdown}
                      loading="lazy"
                    />
                  </div>
                  {/* {isDropdownVisible && (
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
                    )} */}
                </NavLink>
                {/* <NavLink to="/logout" className={styles.link}> */}
                  <div className={`${styles.nacircle} `} onClick={handleLogout}>
                    {isLoading ? <LoaderCircle /> : <LogOut size={30} />}
                  </div>
                {/* </NavLink> */}
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
              {navItems?.map((tab) => (
                <li
                  key={tab.name}
                  className={styles.navItemSideBar}
                  onClick={closeSideBar}
                >
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
              <NavLink
                to="/profile"
                className={styles.link}
                onClick={closeSideBar}
              >
                <div className={styles.btnSideBar}>Profile</div>
              </NavLink>
              <div
                className={`${styles.btnSideBar} ${styles.loginBtn}`}
                onClick={() => {
                  handleLogout();
                  closeSideBar();
                }}
              >
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
