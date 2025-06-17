import { useState,  useEffect } from "react";
import styles from "./InternshipForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { internshipFormSchema } from "./validationSchemas";
import { AuthService } from "../../axios/User";
import { notifyError, notifySuccess } from "../../utility/Tostify/Tosts";
import { useParams } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";

const Form = () => {
  const { title } = useParams();
  const [uploadError, setUploadError] = useState(null);
  const [bookingResponse, setBookingResponse] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm({
    resolver: zodResolver(internshipFormSchema),
    mode: "onChange",
  });

  const apiClass = new AuthService();

  const onSubmit = (data) => {
    setSubmitting(true);
    const file = data.resume[0];
    data.position = title;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setUploadError("Invalid file type. Allowed: PDF, DOC, DOCX");
      setSubmitting(false);
      return;
    }

    if (file.size > maxSize) {
      setUploadError("File size exceeds 10MB.");
      setSubmitting(false);
      return;
    }

    setUploadError(null);
    handleFormSubmit(data, file);
  };

  const handleFormSubmit = async (data, file) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobileNo", data.mobileNo);
    formData.append("college", data.college);
    formData.append("year", data.year);
    formData.append("github", data.github || "");
    formData.append("position", title);
    formData.append("resume", file);

    try {
      const response = await apiClass.careerFormSubmit(formData);
      if (response.status === 201) {
        setBookingResponse("Form submitted successfully!");
        notifySuccess("Form submitted successfully!");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      setSubmitting(false);
      notifyError("Try again later");
    }
  };


  useEffect(() => {
    const subscription = watch(() => {
      setBookingResponse(null);
    });
    return () => subscription.unsubscribe();
  }, [watch]);


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.heading}>{title} Application form</h2>
      <div className={styles.main}>
        <div>
          <div className={styles.label}>
            <label htmlFor="">Name <span className={styles.required}>*</span></label>
            <input
              type="text"
              placeholder="full name"
              {...register("name")}
              className={styles.input}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>

          <div className={styles.label}>
            <label htmlFor="">E-mail <span className={styles.required}>*</span></label>
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              className={styles.input}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.label}>
            <label htmlFor="">Contact No <span className={styles.required}>*</span></label>
            <input
              type="tel"
              placeholder="contact"
              {...register("mobileNo")}
              className={styles.input}
            />
            {errors.mobileNo && <span className={styles.error}>{errors.mobileNo.message}</span>}
          </div>

          <div className={styles.label}>
            <label htmlFor="">College Name <span className={styles.required}>*</span></label>
            <input
              type="text"
              placeholder="college name"
              {...register("college")}
              className={styles.input}
            />
            {errors.college && <span className={styles.error}>{errors.college.message}</span>}
          </div>
        </div>

        <div>
          <div className={styles.lab}>
            <label htmlFor="">Year/Experienced <span className={styles.required}>*</span></label>
            <select {...register("year")} className={styles.select} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="first year">1st Year</option>
              <option value="second year">2nd Year</option>
              <option value="third year">3rd Year</option>
              <option value="fourth year">4th Year</option>
              <option value="experienced">Experienced</option>
            </select>
            {errors.year && <span className={styles.error}>{errors.year.message}</span>}
          </div>

          <div className={styles.label}>
            <label htmlFor="">GitHub <span className={styles.required}>*</span></label>
            <input
              type="url"
              placeholder="github (optional)"
              {...register("github")}
              className={styles.input}
            />
            {errors.github && <span className={styles.error}>{errors.github.message}</span>}
          </div>

          <div className={styles.resume}>
            <label htmlFor="">Upload Resume <span className={styles.required}>*</span></label>
            <input
              type="file"
              {...register("resume")}
              className={styles.input}
            />
            {errors.resume && <span className={styles.error}>{errors.resume.message}</span>}
            {uploadError && <span className={styles.error}>{uploadError}</span>}
          </div>

          {bookingResponse && <span className={styles.success}>{bookingResponse}</span>}

           <button
            className={styles.btn}
            disabled={!isValid || submitting}
            style={{ backgroundColor: !isValid ? "#4D7FD1" : undefined, }}  // light background
          >
            {submitting ? (
              <LuLoaderCircle size={30} className={styles.loader} />
            ) : (
              "Submit"
            )}
          </button>


        </div>
      </div>
    </form>
  );
};

export default Form;
