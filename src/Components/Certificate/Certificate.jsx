import React from "react";
import styles from "./Certificate.module.css";

const Certificate = () => {
  const certificates = [
    {
      image: '/certificate1.png', // Replace with the actual path or URL
      alt: "Certificate Front",
    },
    {
      image: '/certificate2.png', // Replace with the actual path or URL
      alt: "Certificate Back",
    },
  ];

  const benefits = {
    title: "Get Shareable Certificate",
    points: [
      {
        icon: '/benefit1.png', // Replace with the actual path or URL
        text: "Proof of Skills: Certificates validate students' expertise and enhance their professional profiles",
      },
      {
        icon: '/benefit2.png', // Replace with the actual path or URL
        text: "Career Boost: Certificates increase job prospects and help students stand out in applications.",
      },
      {
        icon: '/benefit3.png', // Replace with the actual path or URL
        text: "Shareable Credentials: Digital certificates are easily shareable and verifiable online.",
      },
    ],
  };

  return (
    <div className={styles.section}>
      {/* Certificates */}
      <div className={styles.certificates}>
        
          <div  className={styles.certificateCard}>
            <img
              src="/CERTIFICATE.png"
              alt="Certificate"
              className={styles.certificateImage}
            />
          </div>
     
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        {/* <button className={styles.benefitsss}>Benefits</button> */}
        <h2 className={styles.benefitsTitle}>{benefits.title}</h2>
        <ul className={styles.benefitsList}>
          {benefits.points?.map((point, index) => (
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
