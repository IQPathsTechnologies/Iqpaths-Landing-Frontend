import React from "react";
import styles from './newContactUs.module.css';

const newContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companyInfo}>
        <img
          src="/logo.png"
          alt="IQPaths Logo"
          className={styles.logo}
        />
        <h1>IQ Paths Technologies</h1>
        <p>INTELLECT QUEST PATHS TECHNOLOGIES PRIVATE LIMITED</p>
        <p>
          Flat No. 301, 74, Pricanco Colony, Sudama Nagar, Indore, Indore-452009, M.P
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="http://www.iqpaths.com" target="_blank" rel="noopener noreferrer">
            www.iqpaths.com
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:Sanket.iqpaths@gmail.com">Sanket.iqpaths@gmail.com</a>
        </p>
        <p><strong>Phone:</strong> +91 8120390205</p>
      </div>

      <div className={styles.formSection}>
        <h2>Contact Us</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out!");
          }}
          className={styles.form}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default newContactUs;
