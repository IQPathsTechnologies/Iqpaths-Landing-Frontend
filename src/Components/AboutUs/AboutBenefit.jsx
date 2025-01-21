import React from "react";
import styles from "./AboutBenefit.module.css";

const BenefitCard = ({ image, title, description, bgColor }) => (
  <div className={styles.card}>
    <div
      className={styles.imageWrapper}
      style={{ backgroundColor: bgColor }}
    >
      <img src={image} alt={title} className={styles.image} />
    </div>
    <h3 className={styles.cardHead}>{title}</h3>
    <p className={styles.cardPara}>{description}</p>
  </div>
);

const AboutBenefit = () => {
  const benefits = [
    {
      image: "/monitor.png", // Replace with the path to your image
      title: "One on One Monitor",
      description:
        "Get personalized learning with one-on-one sessions for faster progress.",
      bgColor: "#007bff", // Blue
    },
    {
      image: "/hour.png", // Replace with the path to your image
      title: "24/7 Mentor",
      description:
        "Access expert guidance anytime with our 24/7 mentor support.",
      bgColor: "#28a745", // Green 
    },
    {
      image: "/desktop.png", // Replace with the path to your image
      title: "Whiteboard",
      description:
        "Collaborate and visualize your ideas seamlessly with our interactive whiteboard.",
      bgColor: "#ffc107", // Yellow
    },
    {
      image: "/money.svg", // Replace with the path to your image
      title: "Affordable Price",
      description:
        "Get the best learning at an affordable price, making education accessible to all.",
      bgColor: "#dc3545", // Red
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Benefits of IQ paths</h2>
        <p className={styles.para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking
        </p>
      </div>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
            bgColor={benefit.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutBenefit;
