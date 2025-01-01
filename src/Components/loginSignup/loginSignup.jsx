import React, { useState, useContext, useEffect } from 'react';
import styles from './loginSignup.module.css';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ email: '', name: '', mobileNo: '', password: '' });
    const [errorMessageLogin, setErrorMessageLogin] = useState('');
    const [errorMessageSignup, setErrorMessageSignup] = useState(''); 
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type || (location.pathname.includes('signup') ? 'signup' : 'login');


    useEffect(() => {
        setActiveForm(type);
    }, [type]);

    const { setUser, setIsLoggedIn } = useContext(UserContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setErrorMessageLogin(''); 
        if (!loginData.email || !loginData.password) {
            console.log('Please fill in all fields.');
            return;
        }
        try {
            const response = await axios.post('/api/user/login', loginData);
            if (response.status === 200) {
                console.log('Login successful!');
                setUser(response.data.data);
                setIsLoggedIn(true);
                localStorage.setItem('user', JSON.stringify(response.data.data));

                // If login is successful, redirect to home page
                navigate('/home');
            } else {
                console.log('Login failed. Please try again.');
            }
        } catch (error) {
            const match = error.response.data.match(/<pre>(.*?)<br>/);
            if (match && match[1]) {
                const errorMessage = match[1].replace(/&#39;/g, "'");
                setErrorMessageLogin(errorMessage);
            } else {
                console.log('Error message not found');
            }
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setErrorMessageSignup(''); 
        if (!signupData.email || !signupData.name || !signupData.mobileNo || !signupData.password) {
            console.log('Please fill in all fields.');
            return;
        }
        try {
            const response = await axios.post('/api/user/register', signupData);
            if (response.status == 201) {
                console.log('Signup successful! Check your email for verification.');
                setUser(response.data.data);
                setIsLoggedIn(true);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                setActiveForm('login');
                navigate('/login');
            } else {
                console.log('Signup failed. Please try again.');
            }
        } catch (error) {
            const match = error.response.data.match(/<pre>(.*?)<br>/);
            if (match && match[1]) {
                const errorMessage = match[1].replace(/&#39;/g, "'");
                if (errorMessage && errorMessage.includes("E11000 duplicate key error collection")) {
                    setErrorMessageSignup("Error: User already exists with this email.")
                }
                else{
                    setErrorMessageSignup(errorMessage);
                }
                
            } else {
                console.log('Error message not found');
            }
        }
    };

    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === 'login') {
            setLoginData({ ...loginData, [name]: value });
        } else {
            setSignupData({ ...signupData, [name]: value });
        }
    };

    return (
        <div>
            <div className={styles.container}>
                {activeForm === 'login' ? (
                    <div className={styles.img}>
                        <img src="/loginImg.png" alt="Login" />
                    </div>
                ) : (
                    <div className={styles.img}>
                        <img src="/signupImg.png" alt="register Image" />
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
                                className={`${styles.toggleButton} ${activeForm === 'signup' ? styles.activeButton : ''}`}
                                onClick={() => setActiveForm('signup')}
                            >
                                register        
                            </button>
                        </div>
                    </section>
                        <p className={styles.formText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi.</p>
                    
                        {activeForm === 'login' ? (
                            <form onSubmit={handleLoginSubmit}>
                            <div className={styles.formField}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={loginData.email}
                                    onChange={(e) => handleInputChange(e, 'login')}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={loginData.password}
                                    onChange={(e) => handleInputChange(e, 'login')}
                                />
                            </div>
                            {errorMessageLogin && <p className={styles.errorMessageLogin}>{errorMessageLogin}</p>}
                            <div className={styles.formOptions}>
                                <label>
                                    <input type="checkbox" /> Remember me
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button className={styles.formButton} type="submit">
                                Login
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSignupSubmit}>
                            <div className={styles.formField}>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email Address"
                                    value={signupData.email}
                                    onChange={(e) => handleInputChange(e, 'signup')}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your User Name"
                                    value={signupData.name}
                                    onChange={(e) => handleInputChange(e, 'signup')}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Phone Number</label>
                                <input
                                    type="number"
                                    name="mobileNo"
                                    placeholder="Enter your Phone Number"
                                    value={signupData.mobileNo}
                                    onChange={(e) => handleInputChange(e, 'signup')}
                                />
                            </div>
                            <div className={styles.formField}>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={signupData.password}
                                    onChange={(e) => handleInputChange(e, 'signup')}
                                />
                            </div>
                            {errorMessageSignup && <p className={styles.errorMessageSignup}>{errorMessageSignup}</p>}
                            <button className={styles.formButton} type="submit">register</button>
                        </form>
                    )}   
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
