import React from "react";
import styles from "./NewsletterSection.module.css";

const NewsletterSection = () => {
  const data = {
    title: "Newsletter - Stay tune and get the latest Update",
    description:
      "Know about insights and interview tips of IQPath early from the rest...",
    buttonText: "SUBSCRIBE",
  };

  return (
    <div className={styles.newsletterSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
      </div>
      <button className={styles.subscribeButton}>{data.buttonText}</button>
    </div>
  );
};

export default NewsletterSection;
