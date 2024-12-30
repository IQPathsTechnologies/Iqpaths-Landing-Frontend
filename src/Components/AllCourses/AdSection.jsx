import React from "react";
import styles from "./AdSection.module.css";

const AdSection = () => {
  const data = {
    title: "Start learning now and get 35% off", 
    description:
      "With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors",
    buttonText: "Enroll now",
    imageAlt: "Woman giving thumbs up with a laptop",
    imageUrl:
      "src/assets/banner.png", // Replace this URL with the actual image link
  };

  return (
    <div className={styles.adSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        {/* <button className={styles.button}>{data.buttonText}</button> */}
      </div>
      <div className={styles.imageContainer}>
        <img
          src={data.imageUrl}
          alt={data.imageAlt}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AdSection;
