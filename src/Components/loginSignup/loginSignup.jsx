import React, { useState } from 'react';
import styles from './loginSignup.module.css'

const LoginSignup = () => {
    const [activeForm, setActiveForm] = useState('Register');

    return(   
        <div>
            <div className={styles.container}>
                {activeForm === 'login' ? (
                    <div className={styles.img}>
                        <img src="src/assets/loginImg.png" alt="login Image" />
                    </div> 
                ) : (
                    <div className={styles.img}>
                        <img src="src/assets/signupImg.png" alt="Register Image" />
                    </div>
                )}
                
                <div className={styles.formContainer}>
                    <p  className={styles.welcomeText}> Welcome to IQpaths!</p>
                    <section className={styles.toggleButtonContainer}>
                    <div className={styles.toggleButtons}>
                            <button
                                className={`${styles.toggleButton} ${activeForm === 'login' ? styles.activeButton : ''}`}
                                onClick={() => setActiveForm('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`${styles.toggleButton} ${activeForm === 'Register' ? styles.activeButton : ''}`}
                                onClick={() => setActiveForm('Register')}
                            >
                                Register
                            </button>
                        </div>
                    </section>
                        <p className={styles.formText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
                    
                        {activeForm === 'login' ? (
                            <form>
                            <div className={styles.formField}>
                                <label>User Name</label>
                                <input type="email" placeholder="Enter your User Name" />
                            </div>
                            <div className={styles.formField}>
                                <label>Password</label>
                                <input type="password" placeholder="Enter your Password" />
                            </div>
                            <div className={styles.formOptions}>
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button className={styles.formButton}type="submit">Login</button>
                        </form>
                        ) : (
                        <form>
                            <div className={styles.formField}>
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your Email Address" />
                            </div>
                            <div className={styles.formField}>
                                <label>User Name</label>
                                <input type="text" placeholder="Enter your User Name" />
                            </div>
                            <div className={styles.formField}>
                                <label>Phone number</label>
                                <input type="password" placeholder="Enter your Phone Number" />
                            </div>
                            <div className={styles.formField}>
                                <label>Password</label>
                                <input type="password" placeholder="Enter your Password" />
                            </div>
                            <button className={styles.formButton} type="submit">Register</button>
                        </form>
                    )}   
                </div>
            </div>
              
        </div>
    )
}

export default LoginSignup;