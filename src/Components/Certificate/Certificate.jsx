import React from "react";
import styles from "./Certificate.module.css";

const Certificate = () => {
  const certificates = [
    {
      image: 'src/assets/certificate1.png', // Replace with the actual path or URL
      alt: "Certificate Front",
    },
    {
      image: 'src/assets/certificate2.png', // Replace with the actual path or URL
      alt: "Certificate Back",
    },
  ];

  const benefits = {
    title: "Get Shareable Certificate",
    points: [
      {
        icon: 'src/assets/benefit1.png', // Replace with the actual path or URL
        text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
      },
      {
        icon: 'src/assets/benefit2.png', // Replace with the actual path or URL
        text: "TAs and presenters can be moved to the front of the class.",
      },
      {
        icon: 'src/assets/benefit3.png', // Replace with the actual path or URL
        text: "Teachers can easily see all students and class data at one time.",
      },
    ],
  };

  return (
    <div className={styles.section}>
      {/* Certificates */}
      <div className={styles.certificates}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.alt}
              className={styles.certificateImage}
            />
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <button className={styles.benefitsss}>Benefits</button>
        <h2 className={styles.benefitsTitle}>{benefits.title}</h2>
        <ul className={styles.benefitsList}>
          {benefits.points.map((point, index) => (
            <li key={index} className={styles.benefitItem}>
              <img src={point.icon} alt="Benefit Icon" className={styles.benefitIcon} />
              <p className={styles.benefitText}>{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
