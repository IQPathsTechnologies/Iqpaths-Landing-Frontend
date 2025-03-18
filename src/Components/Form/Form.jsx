import React, { useState } from 'react'
import styles from "./Form.module.css"
import { useForm } from "react-hook-form";
import { AuthService } from "../../axios/User";
import { notifySuccess } from "../../utility/Tostify/Tosts";
import { useParams } from 'react-router-dom';

const Form = () => {
  const {title} = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [uploadError, setUploadError] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);
  


  const onSubmit = (data) => {
    const file = data.resume[0];
    data.position = title;




    if (!file) {
      setUploadError('Please select a file.');
      return;
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      setUploadError('Invalid file type. Allowed types: PDF, DOC, DOCX');
      return;
    }

    if (file.size > maxSize) {
      setUploadError('File size exceeds 5MB.');
      return;
    }

    // Simulate upload (replace with your actual upload logic)
    // console.log('File uploaded:', file);
    setUploadError(null);
    if (uploadError == null) {
      handleFormSubmit(data);
      console.log(data);


    }

  };




  const apiClass = new AuthService();

  const handleFormSubmit = async (data) => {
    const resposne = await apiClass.internshipFormSubmit(data);
    if (resposne.status === 201) {
      setBookingResponse("form submitted");
      notifySuccess("form submitted");
    }


  };





  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>{title} Application form</h2>
        <div className={styles.main}>
          <div >
            <div className={styles.label}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="full name "
                {...register("fullName", { required: "Full Name is required" })}
                className={styles.input}
              />
              {errors.fullName && (
                <span className={styles.error}>{errors.fullName.message}</span>
              )}
            </div>
            <div className={styles.label}>
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                placeholder="email"
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
            <div className={styles.label}>
              <label htmlFor="">Contact No</label>
              <input
                type="tel"
                placeholder="contact"
                {...register("contact", { required: "contact is required" })}
                className={styles.input}
              />
              {errors.contact && (
                <span className={styles.error}>{errors.contact.message}</span>
              )}


            </div>
            <div className={styles.label}>
              <label htmlFor="">College Name</label>
              <input
                type="text"
                placeholder="college name"
                {...register("college", { required: "college is required" })}
                className={styles.input}
              />
              {errors.college && (
                <span className={styles.error}>{errors.college.message}</span>
              )}

            </div>
          </div>
          <div>



            <div className={styles.lab}>
              <label htmlFor="">Year</label>
              <select
                {...register("year", { required: "year is required" })}
                className={styles.select}
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="first year">1st Year</option>
                <option value="second year">2nd Year</option>
                <option value="third year">3rd Year</option>
                <option value="fourth year">4th Year</option>
              </select>
              {errors.year && (
                <span className={styles.error}>{errors.year.message}</span>
              )}

            </div>
            <div className={styles.label}>
              <label htmlFor="">git hub</label>
              <input
                type="url"
                placeholder='github(optional) '
                {...register("github", { required: false })}
                className={styles.input}
              />


            </div>
            <div className={styles.resume}>
              <label htmlFor="">Upload resume</label>
              <input
                type="file"
                {...register("resume", { required: "resume is required" })}
                className={styles.input}
              />
              {errors.resume && (
                <span className={styles.error}>{errors.resume.message}</span>
              )}
              {uploadError && <span className={styles.error} >{uploadError}</span>}

            </div>

            {bookingResponse && (
              <span className={styles.success}>{bookingResponse}</span>
            )}

            <button>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form