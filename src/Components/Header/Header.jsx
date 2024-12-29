// Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');
  

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
            "Services",
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
            <Link to="/signup" className={styles.link}>
                <div className={styles.btn}>Sign Up</div>
            </Link>
            <Link to="/login" className={styles.link}>
              <div className={styles.btn}>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
