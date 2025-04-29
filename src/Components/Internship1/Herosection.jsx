import React from 'react';
import styles from "./Herosection.module.css"; 
import { Link } from 'react-scroll';

function First(){ 
  
  return (
    <section className={styles.first}>
      <div className={styles.mid}>
        <div className={styles.one}> 
          <h3 className={styles.title}>Join the team</h3>
          <p className={styles.des}>
          IQ Paths is an employee-centered company that looks after every employee, gives autonomy to
            make choices, supports self-development and career growth. Our development team is always in search
            of talented individuals to join our employee-centered culture.
          </p>
          <p className={styles.text}>
            Navigate below to see our current open positions!
          </p>
          <Link to="fourth" smooth= {true} duration={500} > <button type="button" className={styles.button}>
            See positions
          
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0V16M8 16L15 9.18182M8 16L1 9.18182" stroke="white" strokeWidth="2" />
            </svg>
          </button>
          </Link>
        </div>
        <div className={styles.two}>
          <img 
            src="https://plus.unsplash.com/premium_photo-1676009547155-32d75ba9d089?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
          />
        </div>
      </div>
    </section>
  );
}

export default First;
