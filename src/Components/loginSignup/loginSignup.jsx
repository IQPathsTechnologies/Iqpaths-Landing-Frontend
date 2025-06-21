import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./loginSignup.module.css";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import { notifySuccess } from "../../utility/Tostify/Tosts";

const LoginSignup = () => {
  const [activeForm, setActiveForm] = useState("login");
  const { setIsLoggedIn } = useContext(UserContext);
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessageSignup, setErrorMessageSignup] = useState("");
  const [passwordVisibleLogin, setPasswordVisibleLogin] = useState(false);
  const [passwordVisibleSignup, setPasswordVisibleSignup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const type =
    location.state?.type ||
    (location.pathname.includes("signup") ? "signup" : "login");

  useEffect(() => {
    setActiveForm(type);
    window.scrollTo(0, 0);
  }, [type]);


  useEffect(() => {
    // Check for the error query parameter in the URL
    const queryParams = new URLSearchParams(location.search);
    const error = queryParams.get("error");
    if (error === "userAlreadyExists") {
      setErrorMessageSignup("Error: User already logged in with this email.");
    }
  }, [location.search]);

  // React Hook Form setup
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    // reset:loginreset
  } = useForm();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    reset: signupreset,
  } = useForm();

  const onSubmitLogin = async (data) => {
    setErrorMessageLogin("");
    try {
      const response = await axios.post("/api/user/login", data);
      console.log(response)
      if (response.status === 200) {
        // console.log("Login successful!");
        // console.log(response.data.data);
        setIsLoggedIn(true);
        notifySuccess("Login Successful");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      // console.log(error.response);
      console.log(error?.response?.data?.message);
      // const match = error?.response.data;
      if (error?.response?.data?.message) {
        // const errorMessage = match[1].replace(/&#39;/g, "'");
        setErrorMessageLogin(error?.response?.data?.message);
      } else {
        console.log("Error message not found");
      }
    }
  };

  const onSubmitSignup = async (data) => {
    setErrorMessageSignup("");
    try {
      const response = await axios.post("/api/user/register", data);
      if (response.status === 201) {
        // console.log("Signup successful!");
        notifySuccess("Signup Successful");
        signupreset();
        setActiveForm("login");
        navigate("/login");
      }
    } catch (error) {
      // const match = error.response.data.match(/<pre>(.*?)<br>/);
      if (error?.response?.data?.message) {
        // const errorMessage = match[1].replace(/&#39;/g, "'");
        // if (
        //   errorMessage &&
        //   errorMessage.includes("E11000 duplicate key error collection")
        // ) {
        //   setErrorMessageSignup("Error: User already exists with this email.");
        // } else {
          setErrorMessageSignup(error?.response?.data?.message);
        // }
      } else {
        console.log("Error message not found");
      }
    }
  };

  const handleGoogleLogin = (formType) => {
    const redirectUrl = formType === "login" ? "login" : "signup";
    // console.log(redirectUrl);
    window.location.href = `https://quiz.iqpaths.com/api/auth/google`;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibleLogin(!passwordVisibleLogin);
  };

  const togglePasswordVisibilitySignup = () => {
    setPasswordVisibleSignup(!passwordVisibleSignup);
  }


  return (
    <div>
      <div className={styles.container}>
        {activeForm === "login" ? (
          <div className={styles.img}>
            <img src="/loginImg.png" alt="Login" />
          </div>
        ) : (
          <div className={styles.img}>
            <img src="/signupImg.png" alt="register Image" />
          </div>
        )}

        <div className={styles.formContainer}>
          <p className={styles.welcomeText}> Welcome to IQpaths!</p>
          <div className={styles.toggleButtonContainer}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${
                  activeForm === "login" ? styles.activeButton : ""
                }`}
                onClick={() => setActiveForm("login")}
              >
                Login
              </button>
              <button
                className={`${styles.toggleButton} ${
                  activeForm === "signup" ? styles.activeButton : ""
                }`}
                onClick={() => setActiveForm("signup")}
              >
                register
              </button>
            </div>
          </div>

          {activeForm === "login" ? (
            <div className={styles.loginContainer}>
              <form
                onSubmit={handleLoginSubmit(onSubmitLogin)}
                className={styles.form}
              >
                <div className={styles.formField}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    {...registerLogin("email", {
                      required: "Email is required",
                    })}
                  />
                  {loginErrors.email && (
                    <p className={styles.errorMessageLogin}>
                      {loginErrors.email.message}
                    </p>
                  )}
                </div>
                <div className={styles.formField}>
                  <label>Password</label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type={passwordVisibleLogin ? "text" : "password"}
                      name="password"
                      placeholder="Enter your Password"
                      {...registerLogin("password", {
                        required: "Password is required",
                      })}
                    />
                    <button
                      type="button"
                      className={styles.eyeIcon}
                      onClick={togglePasswordVisibility}
                    >
                      
                      {
                      passwordVisibleLogin ? 
                       <img src="/hide.svg"></img>
                       :
                       <img src="/show.svg"></img>
                       }
                    </button>
                  </div>
                  {loginErrors.password && (
                    <p className={styles.errorMessageLogin}>
                      {loginErrors.password.message}
                    </p>
                  )}
                </div>
                {errorMessageLogin && (
                  <p className={styles.errorMessageLogin}>
                    {errorMessageLogin}
                  </p>
                )}
                {/* <div className={styles.formOptions}>
                  <a href="#">Forgot Password?</a>
                </div> */}
                <button className={styles.formButton} type="submit">
                  Login
                </button>
              </form>
              <button className={styles.googleButton} onClick={()=>handleGoogleLogin("login")}>
                <img
                  src="/googleLogo.png"
                  alt="Google Logo"
                  className={styles.googleLogo}
                />
                log in with Google
              </button>
            </div>
          ) : (
            <div className={styles.loginContainer}>
              <form
                onSubmit={handleSignupSubmit(onSubmitSignup)}
                className={styles.form}
              >
                <div className={styles.formField}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    {...registerSignup("email", {
                      required: "Email is required",
                    })}
                  />
                  {signupErrors.email && (
                    <p className={styles.errorMessageSignup}>
                      {signupErrors.email.message}
                    </p>
                  )}
                </div>
                <div className={styles.formField}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your User Name"
                    {...registerSignup("name", {
                      required: "Name is required",
                    })}
                  />
                  {signupErrors.name && (
                    <p className={styles.errorMessageSignup}>
                      {signupErrors.name.message}
                    </p>
                  )}
                </div>
                <div className={styles.formField}>
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="mobileNo"
                    placeholder="Enter your Phone Number"
                    {...registerSignup("mobileNo", {
                      required: "Phone Number is required",
                    })}
                  />
                  {signupErrors.mobileNo && (
                    <p className={styles.errorMessageSignup}>
                      {signupErrors.mobileNo.message}
                    </p>
                  )}
                </div>
                <div className={styles.formField}>
                  <label>Password</label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type={passwordVisibleSignup ? "text" : "password"}
                      name="password"
                      placeholder="Enter your Password"
                      {...registerSignup("password", {
                        required: "Password is required",
                      })}
                    />

                    <button
                      type="button"
                      className={styles.eyeIcon}
                      onClick={togglePasswordVisibilitySignup}
                    >
                      {passwordVisibleSignup ? 
                      <img src="/hide.svg"></img>
                      :
                      <img src="/show.svg"></img>
                      }
                    </button>
                  </div>
                  {signupErrors.password && (
                    <p className={styles.errorMessageSignup}>
                      {signupErrors.password.message}
                    </p>
                  )}
                </div>
                {errorMessageSignup && (
                  <p className={styles.errorMessageSignup}>
                    {errorMessageSignup}
                  </p>
                )}
                <button className={styles.formButton} type="submit">
                  register
                </button>
              </form>
              <button className={styles.googleButton} onClick={()=>handleGoogleLogin("signup")}>
                <img
                  src="/googleLogo.png"
                  alt="Google Logo"
                  className={styles.googleLogo}
                />
                Sign in with Google
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
