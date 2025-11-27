import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuLoaderCircle } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { AuthService } from "../../axios/User";
import { notifyError, notifySuccess } from "../../utility/Tostify/Tosts";
import styles from "./InternshipForm.module.css";
import { internshipFormSchema } from "./validationSchemas";

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
    watch,
  } = useForm({
    resolver: zodResolver(internshipFormSchema),
    mode: "onChange",
  });

  const apiClass = new AuthService();

  const onSubmit = (data) => {
    setSubmitting(true);
    const file = data.resume[0];
    data.internshipSelection = title;

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
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("collegeUniversity", data.collegeUniversity);
    formData.append("programCourse", data.programCourse);
    formData.append("yearOfStudy", data.yearOfStudy);
    formData.append("linkedinUrl", data.linkedinUrl || "");
    formData.append("portfolioUrl", data.portfolioUrl || "");
    formData.append("internshipSelection", title);
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
            <label htmlFor="">
              Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              placeholder="full name"
              {...register("fullName")}
              className={styles.input}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName.message}</span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">
              E-mail <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              className={styles.input}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">
              Contact No <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              placeholder="contact"
              {...register("phoneNumber")}
              className={styles.input}
            />
            {errors.phoneNumber && (
              <span className={styles.error}>{errors.phoneNumber.message}</span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">
              College/University <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              placeholder="college/university name"
              {...register("collegeUniversity")}
              className={styles.input}
            />
            {errors.collegeUniversity && (
              <span className={styles.error}>
                {errors.collegeUniversity.message}
              </span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">
              Program/Course <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., B.Tech CSE, BCA, MCA"
              {...register("programCourse")}
              className={styles.input}
            />
            {errors.programCourse && (
              <span className={styles.error}>
                {errors.programCourse.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className={styles.lab}>
            <label htmlFor="">
              Year of Study <span className={styles.required}>*</span>
            </label>
            <select
              {...register("yearOfStudy")}
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
            {errors.yearOfStudy && (
              <span className={styles.error}>{errors.yearOfStudy.message}</span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">LinkedIn URL</label>
            <input
              type="url"
              placeholder="linkedin profile (optional)"
              {...register("linkedinUrl")}
              className={styles.input}
            />
            {errors.linkedinUrl && (
              <span className={styles.error}>{errors.linkedinUrl.message}</span>
            )}
          </div>

          <div className={styles.label}>
            <label htmlFor="">Portfolio/GitHub</label>
            <input
              type="url"
              placeholder="portfolio or github (optional)"
              {...register("portfolioUrl")}
              className={styles.input}
            />
            {errors.portfolioUrl && (
              <span className={styles.error}>
                {errors.portfolioUrl.message}
              </span>
            )}
          </div>

          <div className={styles.resume}>
            <label htmlFor="">
              Upload Resume <span className={styles.required}>*</span>
            </label>
            <input
              type="file"
              {...register("resume")}
              className={styles.input}
            />
            {errors.resume && (
              <span className={styles.error}>{errors.resume.message}</span>
            )}
            {uploadError && <span className={styles.error}>{uploadError}</span>}
          </div>

          {bookingResponse && (
            <span className={styles.success}>{bookingResponse}</span>
          )}

          <button
            className={styles.btn}
            disabled={!isValid || submitting}
            style={{ backgroundColor: !isValid ? "#4D7FD1" : undefined }} // light background
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
