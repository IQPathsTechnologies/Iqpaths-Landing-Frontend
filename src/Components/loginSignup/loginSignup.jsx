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
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state?.type || (location.pathname.includes('signup') ? 'signup' : 'login');


    useEffect(() => {
        setActiveForm(type);
    }, [type]);

    const { setUser, setIsLoggedIn } = useContext(UserContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
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
            console.error('Error during login:', error);
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
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

                navigate('/home');
            } else {
                console.log('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
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
                        <img src="/signupImg.png" alt="Signup" />
                    </div>
                )}

                <div className={styles.formContainer}>
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
                            Signup
                        </button>
                    </div>

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
                            <button className={styles.formButton} type="submit">
                                Signup
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
