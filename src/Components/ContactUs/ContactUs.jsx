import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./newContactUs.module.css";
import { AuthService } from "../../axios/User";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { notifySuccess, notifyError } from "../../utility/Tostify/Tosts";

const ContactUs = () => {
  const [bookingResponse, setBookingResponse] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const apiClass = new AuthService();

  const handleContactUsSubmit = async (data) => {
    // console.log("Form Data:", data);
    const response = await apiClass.contactUsFormSubmit(data);
    if (response.status === 201) {
      setBookingResponse("Appointment Booked Successfully");
      notifySuccess("Thank you for reaching out!");
      reset();
    } else {
      setBookingResponse("Something went wrong. Please try again.");
      notifyError("Failed to submit the form. Please try again.");
    }
  };

  const onSubmit = (data) => {
    handleContactUsSubmit(data);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Left Side: Company Details */}
        <div className={styles.companyCard}>
          <div className={styles.logoSection}>
            <img src="/logo.png" alt="IQPaths Logo" className={styles.logo} />
            <h1>IQ Paths Technologies</h1>
            <span className={styles.tagline}>
              INTELLECT QUEST PATHS TECHNOLOGIES PRIVATE LIMITED
            </span>
          </div>

          <div className={styles.infoGroup}>
            <FaMapMarkerAlt
              className={styles.icon}
              style={{ marginTop: "10px" }}
            />
            <p>
              Flat No. 301, 74, Pricanco Colony, Sudama Nagar, Indore,
              Indore-452009, M.P
            </p>
          </div>

          <div className={styles.infoGroup}>
            <FaGlobe className={styles.icon} />
            <a
              href="http://www.iqpaths.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.iqpaths.com
            </a>
          </div>

          <div className={styles.infoGroup}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:info@iqpaths.com">info@iqpaths.com</a>
          </div>

          <div className={styles.infoGroup}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:iqpathstechnologies@gmail.com">
              iqpathstechnologies@gmail.com
            </a>
          </div>

          <div className={styles.infoGroup}>
            <FaPhoneAlt className={styles.icon} />
            <span>+91 8120390205</span>
          </div>
        </div>

        {/* Right Side: Functional Contact Form */}
        <div className={styles.formCard}>
          <h2>Contact Us</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Your Name *"
              {...register("fullName", { required: "Name is required" })}
              className={styles.input}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}

            <input
              type="email"
              placeholder="Your Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={styles.input}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}

            <textarea
              placeholder="Your Message *"
              {...register("message", { required: "Message is required" })}
              className={styles.textarea}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}

            {bookingResponse && (
              <span className={styles.success}>{bookingResponse}</span>
            )}

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
