import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerLogo}>
                        <img
                        src="/logoIcon.svg" 
                        alt="Paths Logo"
                        className={styles.logoImage}
                        />
                    </div>
                    <p className= {styles.footerDescription}> IQPaths Technologies: Bridging the gap between skills and opportunities. Empowering individuals with innovative learning solutions, expert training, and personalized career guidance. Your partner in building a future-ready career.</p>

                    <div className={styles.socialmediaLogoContainer}> 
                        <Link to="https://www.youtube.com/@IQPaths" target="_blank" rel="noopener noreferrer">
                             <img
                            src="/youtubeLogo.svg" 
                            alt="youtube Logo"
                            className={styles.youtubeLogo}
                            />
                        </Link> 
                        <Link to="https://www.linkedin.com/company/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/linkedinLogo.svg" 
                                alt="Linkedin Logo"
                                className={styles.socialmediaLogo}
                            /> 
                        </Link> 
                        
                        <Link to="https://www.instagram.com/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/instagramLogo.svg" 
                                alt="instagram Logo"
                                className={styles.socialmediaLogo}
                            />
                        </Link>                        
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <table>
                        <tr>
                            <td><Link to="/">Home</Link></td>
                            <td><Link to="/courses">Courses</Link></td>
                            <td><Link to="/contact-us"> Contact Us</Link></td>
                            
                        </tr>
                        <tr>
                            <td><Link to="/my-learnings">My learnings</Link></td>
                            <td><Link to="/terms">Terms and conditions</Link></td>
                            <td><Link to="*">info@iqpaths.com</Link></td>  
                        </tr>
                        <tr>
                            <td><Link to="*">Cookies usage policy</Link></td>
                            <td><Link to="*">Mentors</Link></td>
                            <td><Link to="/privacy">Privacy policy</Link></td>
                        </tr> 
                        <tr>
                            <td><Link to="/about-us">About Us</Link></td>
                            <td><Link to="/cancellation">Return & refund policy </Link></td>
                        </tr>  
                        
                    </table>
                </div>               
            </div>     
        </footer>
        <hr className={styles.footerDivider} />
        <p className={styles.copyright}>Copyright © 2025 IQpaths - All Rights Reserved</p>
        </div>
    );
};

export default Footer;