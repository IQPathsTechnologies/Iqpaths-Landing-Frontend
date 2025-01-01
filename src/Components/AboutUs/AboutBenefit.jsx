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
      image: "public/monitor.png", // Replace with the path to your image
      title: "One on One Monitor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "#007bff", // Blue
    },
    {
      image: "public/hour.png", // Replace with the path to your image
      title: "24/7 Mentor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "#28a745", // Green
    },
    {
      image: "public/desktop.png", // Replace with the path to your image
      title: "Whiteboard",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "#ffc107", // Yellow
    },
    {
      image: "/images/price.png", // Replace with the path to your image
      title: "Affordable Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      bgColor: "#dc3545", // Red
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Benefits of IQ paths</h2>
      <p className={styles.para}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking
      </p>
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
