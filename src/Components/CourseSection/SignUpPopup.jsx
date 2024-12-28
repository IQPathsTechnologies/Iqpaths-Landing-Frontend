import React from "react";
import styles from "./SignUpPopup.module.css";

const SignUpPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>

        <div className={styles.rightSection}>
            <img src="src/assets/loginImage.png" alt="Login image" className={styles.loginImage}/>
        </div>

        <div className={styles.leftSection}>
        {/* Header Section */}
        <div className={styles.header}>
          <img src="src/assets/logo.svg" alt="Logo" className={styles.logo} />
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Intro Text */}
        <p className={styles.introText}>
          Join us and get more benefits. We promise to keep your data safely.
        </p>

        {/* Social Sign Up Buttons */}
        <div className={styles.socialButtons}>
          <button className={`${styles.socialButton} ${styles.facebook}`}>
            <img src="src/assets/Facebook.png" alt="Facebook" />
            Sign Up with Facebook
          </button>
          <button className={`${styles.socialButton} ${styles.apple}`}>
            <img src="src/assets/Apple.png" alt="Apple" />
            Sign Up with Apple
          </button>
          <button className={`${styles.socialButton} ${styles.google}`}>
            <img src="src/assets/Google.png" alt="Google" />
            Sign Up with Google
          </button>
        </div>

        {/* Divider */}
        <p className={styles.orText}>or you can</p>

        {/* Email and Password Fields */}
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
          <button type="submit" className={styles.createAccount}>
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className={styles.footerText}>
          Already have an Account? <span className={styles.signInLink}>Sign Up</span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;
