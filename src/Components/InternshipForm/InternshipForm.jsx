import React, { useState } from 'react'
import styles from "./InternshipForm.module.css"
import { useForm } from "react-hook-form";
import { AuthService } from "../../axios/User";
import { notifyError, notifySuccess , } from "../../utility/Tostify/Tosts";
import { useParams } from 'react-router-dom';
import { LuLoaderCircle } from "react-icons/lu";

const Form = () => {
  const { title } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [uploadError, setUploadError] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [submitting, setsubmitting] = useState(false)




  const onSubmit = (data) => {
    setsubmitting(true)
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
      setUploadError('File size exceeds 10MB.');
      return;
    }

    // Simulate upload (replace with your actual upload logic)
    // console.log('File uploaded:', file);
    setUploadError(null);
    if (uploadError == null) {
      handleFormSubmit(data, file);
      // console.log(data); 
    }

  };




  const apiClass = new AuthService();

  const handleFormSubmit = async (data, file) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobileNo", data.mobileNo);
    formData.append("college", data.college);
    formData.append("year", data.year);
    formData.append("github", data.github || ""); // Handle optional GitHub link
    formData.append("position", title);
    formData.append("resume", file); // Append the actual file

    // console.log("FormData before sending:");
    for (let pair of formData.entries()) {
      // console.log(pair[0], pair[1]); // Debugging
    }

    try {
      const response = await apiClass.internshipFormSubmit(formData);
      if (response.status === 201) {
        setBookingResponse("Form submitted successfully!");
        notifySuccess("Form submitted successfully!");
        setsubmitting(false)
      }
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      setsubmitting(false)
      notifyError("Try again later");
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
                {...register("name", { required: "Full Name is required" })}
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
                {...register("mobileNo", { required: "contact is required" })}
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
              <label htmlFor="">Year/Experienced</label>
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
                <option value="experienced">Experienced</option>
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

            <button className={styles.btn}>{
              submitting ?
              <LuLoaderCircle  size={30} className={styles.loader}/>: "Submit"
            }

            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form