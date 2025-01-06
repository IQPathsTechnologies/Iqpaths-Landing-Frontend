import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      <h3 className={styles.subtitle}>Make an Appointment</h3>
      <div className={styles.forms}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Full Name *"
              {...register("fullName", { required: "Full Name is required" })}
              className={styles.input}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}

            <input
              type="email"
              placeholder="Email *"
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
          </div>

          <div className={styles.selects}>
            <select
              {...register("category", { required: "Category is required" })}
              className={styles.select}
              defaultValue=""
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="Courses">Courses</option>
              <option value="Internship">Internship</option>
              <option value="Placement Preparation">Placement Preparation</option>
            </select>
            {errors.category && (
              <span className={styles.error}>{errors.category.message}</span>
            )}

            <select
              {...register("time", { required: "Time is required" })}
              className={styles.select}
              defaultValue=""
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="4:00">4:00 PM</option>
              <option value="5:00">5:00 PM</option>
            </select>
            {errors.time && (
              <span className={styles.error}>{errors.time.message}</span>
            )}
          </div>

          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className={styles.textarea}
          ></textarea>
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}

          <button type="submit" className={styles.button}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
