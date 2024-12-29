import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerLogo}>
                        <img
                        src="src/assets/footerLogo.png" 
                        alt="Paths Logo"
                        className={styles.logoImage}
                        />
                        <p className={styles.footerText}>IQpaths</p>
                    </div>
                    
                    <p className= {styles.footerDescription}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim eligendi dolorem, corporis amet iure temporibus ipsam quas, 
                        voluptatum totam repudiandae laudantium, deserunt rem veniam laborum? Soluta officia officiis ut?</p>

                    <div className={styles.socialmediaLogoContainer}> 
                        <a href="*">
                             <img
                            src="src/assets/twitterLogo.svg" 
                            alt="Paths Logo"
                            className={styles.socialmediaLogo}
                            />
                        </a> 
                        <a href="https://www.linkedin.com/company/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="src/assets/linkedinLogo.svg" 
                                alt="Paths Logo"
                                className={styles.socialmediaLogo}
                            /> 
                        </a> 
                        
                        <a href="https://www.instagram.com/iqpaths/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="src/assets/instagramLogo.svg" 
                                alt="Paths Logo"
                                className={styles.socialmediaLogo}
                            />
                        </a>                        
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <table>
                        <tr>
                            <td><a href="*">Home</a></td>
                            <td><a href="*">Course</a></td>
                            <td><a href="*">Article</a></td>
                            <td><a href="*">Contact Us</a></td>
                        </tr>
                        <tr>
                            <td><a href="*">Product</a></td>
                            <td><a href="*">HTML CSS</a></td>
                            <td><a href="*">New</a></td>
                            <td><a href="*">abc@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td><a href="*">Course</a></td>
                            <td><a href="*">Javascript</a></td>
                            <td><a href="*">Old</a></td>
                        </tr>
                        <tr>
                            <td><a href="*">Course</a></td>
                            <td><a href="*">Javascript</a></td>
                            <td><a href="*">Old</a></td>
                        </tr>
                        <tr>
                            <td><a href="*">Course</a></td>
                            <td><a href="*">Javascript</a></td>
                            <td><a href="*">Old</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </footer>
    );
};

export default Footer;