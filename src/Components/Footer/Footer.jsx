import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerLogo}>
                        <img
                        src="src/assets/logoIcon.svg" 
                        alt="Paths Logo"
                        className={styles.logoImage}
                        />
                    </div>
                    <p className= {styles.footerDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim eligendi dolorem, corporis amet iure temporibus ipsam quas, 
                        voluptatum totam repudiandae laudantium, deserunt rem veniam laborum? Soluta officia officiis ut?</p>

                    <div className={styles.socialmediaLogoContainer}> 
                        <a href="https://www.youtube.com/@IQPaths" target="_blank" rel="noopener noreferrer">
                             <img
                            src="src/assets/youtubeLogo.svg" 
                            alt="youtube Logo"
                            className={styles.youtubeLogo}
                            />
                        </a> 
                        <a href="https://www.linkedin.com/company/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/linkedinLogo.svg" 
                                alt="Linkedin Logo"
                                className={styles.socialmediaLogo}
                            /> 
                        </a> 
                        
                        <a href="https://www.instagram.com/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/instagramLogo.svg" 
                                alt="instagram Logo"
                                className={styles.socialmediaLogo}
                            />
                        </a>                        
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <table>
                        <tr>
                            <td><a href="/">Home</a></td>
                            <td><a href="/courses">Courses</a></td>
                            <td><a href="/contact-us"> Contact Us</a></td>
                            
                        </tr>
                        <tr>
                            <td><a href="/my-learnings">My learnings</a></td>
                            <td><a href="/terms">Terms and conditions</a></td>
                            <td><a href="*">info@iqpaths.com</a></td>  
                        </tr>
                        <tr>
                            <td><a href="*">Cookies usage policy</a></td>
                            <td><a href="*">Mentors</a></td>
                            <td><a href="/privacy">Privacy policy</a></td>
                        </tr>
                        <tr>
                            <td><a href="/about"></a>About Us</td>
                            <td><a href="/cancellation">Shipping policy </a></td>
                        </tr>  
                        
                    </table>
                </div>               
            </div>     
        </footer>
        <hr className={styles.footerDivider} />
        <p className={styles.copyright}>Copiright © 2024 IQpaths - All Rights Reserverd</p>
        </div>
    );
};

export default Footer;