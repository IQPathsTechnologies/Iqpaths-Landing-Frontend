import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactUs.module.css";
import { AuthService } from "../../axios/User";


const ContactUs = () => {

  const [bookingResponse, setBookingResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



    const apiClass = new AuthService();

  const handleContactUsSubmit = async (data) => {
    const resposne = await apiClass.contactUsFormSubmit(data);
    if(resposne.status === 201){ 
      setBookingResponse("Appointment Booked Successfully");
    }

    // setBookingResponse(resposne.);
    // console.log("Response:", resposne);
  };


  const onSubmit = (data) => {
      // console.log("Form Data:", data);
      handleContactUsSubmit(data);
  };

  return (
    <div className={styles.mainContainer}>
    <div className={styles.contactUsContainer}>
      <div className={styles.contactUsHeader}>
        <img  src="./newLogo.svg" alt="IQPaths Logo" style={{ transform: "rotate(270deg)" }}/>
        <h1>INTELLECT QUEST PATHS TECHNOLOGIES PRIVATE LIMITED</h1>
      </div>

      <div className={styles.contactUsAddress}>
        Flat No. 301, 74, Pricanco Colony, Sudama Nagar, Indore, Indore-452009, M.P
      </div>

      <div className={styles.contactUsInfoSection}>
        <div className={styles.contactUsCard}>
          <h3>Website</h3>
          <a href="https://www.iqpaths.com" target="_blank" rel="noopener noreferrer">
            www.iqpaths.com
          </a>
        </div>

        <div className={styles.contactUsCard}>
          <h3>Email</h3>
          <p>Sanket.iqpaths@gmail.com</p>
        </div>

        <div className={styles.contactUsCard}>
          <h3>Phone</h3>
          <p>+91 8120390205</p>
        </div>
      </div>
    </div>
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

          {bookingResponse && (
            <span className={styles.success}>{bookingResponse}</span>
          )}

          <button type="submit" className={styles.button}>
            Book Appointment
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
