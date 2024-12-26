// Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';

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
          {['Home', 'About Us', 'Services', 'Courses', 'My Learnings', 'Contact Us'].map((tab) => (
            <li
              key={tab}
              className={`${styles.navItem} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.signUp}>Sign Up</button>
        <button className={styles.login}>Login</button>
      </div>
    </header>
  );
};

export default Header;
