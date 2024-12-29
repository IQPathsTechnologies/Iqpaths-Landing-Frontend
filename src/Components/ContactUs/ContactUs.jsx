import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <h3 className={styles.subtitle}>Make an Appointment</h3>
        <div className={styles.forms}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <input
                        type="text"
                        placeholder="Full Name *"
                        className={styles.input}
                    />
                    <input
                        type="email"
                        placeholder="Email *"
                        className={styles.input}
                    />
                </div>
                <div className={styles.selects}>
                    <select className={styles.select}>
                        <option value="" disabled selected>
                            Please Select
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                    <select className={styles.select}>
                        <option value="" disabled selected>
                            4:00 Available
                        </option>
                        <option value="4:00">4:00 PM</option>
                        <option value="5:00">5:00 PM</option>
                    </select>
                </div>
                <textarea
                    placeholder="Message"
                    className={styles.textarea}
                ></textarea>
            </form>
        </div>
        <button type="submit" className={styles.button}>
            Book Appointment
        </button>
    </div>
  );
};

export default ContactUs;
