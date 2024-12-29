import React from "react";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Office Locations</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapPlaceholder}></div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Headquarters address</h3>
          <p className={styles.text}>
            Block no, Road name, City name, Country name - 101018
          </p>
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Contact Details</h3>
          <p className={styles.text}>info@emailid.com</p>
        </div>
        <button className={styles.button}>Get Directions</button>
      </div>
    </div>
  );
};

export default Location;
