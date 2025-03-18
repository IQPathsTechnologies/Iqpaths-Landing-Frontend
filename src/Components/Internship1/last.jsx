import React from 'react';
import styles from "./Last.module.css"

function last() { 
  return (
    <section className={styles.last}>
      <div className={styles.mid_last}>
        <h2 className={styles.title}> 
          Take a peep at what goes on at Iqpaths!
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.part}>
            <img 
              src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
              alt="" 
              className={styles.l1} 
            />
            <div className={styles.fir}>
              <img 
                src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                alt="" 
                className={styles.small} 
              />
              <img 
                src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                alt="" 
                className={styles.small} 
              />
            </div>
          </div>
          <div className={styles.part2}>
            <div className={styles.part_s}>
              <img 
                src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                alt="" 
                className={styles.small} 
              />
              <img 
                src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                alt="" 
                className={styles.long} 
              />
            </div>
            <div className={styles.part_s}>
              <img 
                src="https://plus.unsplash.com/premium_photo-1679920911492-59b551b5b205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                alt="" 
                className={styles.long} 
              />
              <div className={styles.b}>
                Explore more 
                <svg 
                  width="35" 
                  height="34" 
                  viewBox="0 0 35 34" 
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.30469 17.0007L29.113 17.0007M29.113 17.0007L19.3936 7.08398M29.113 17.0007L19.3936 26.9173"
                    stroke="white" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default last;
