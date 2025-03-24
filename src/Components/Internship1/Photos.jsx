import React from 'react';
import styles from "./Photos.module.css"
import { Link } from 'react-router-dom';

function Photos() { 
  
  return (
    <section className={styles.last}>
      <div className={styles.mid_last}>
        <h2 className={styles.title}> 
          Take a peep at what goes on at Iqpaths!
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.part}>
            <img 
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
              alt="" 
              className={styles.l1} 
            />
            <div className={styles.fir}>
              <img 
                src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg"
                alt="" 
                className={styles.small} 
              />
              <img 
                src="https://plus.unsplash.com/premium_photo-1663050681752-4c95effcca58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmZlc3Npb25hbCUyMGltYWdlcyUyMCUyMGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="" 
                className={styles.small} 
              />
            </div>
          </div>
          <div className={styles.part2}>
            <div className={styles.part_s}>
              <img 
                src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZmZXNzaW9uYWwlMjBpbWFnZXMlMjAlMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
                alt="" 
                className={styles.small} 
              />
              <img 
                src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHx0ZWNofGVufDB8fDB8fHww"
                alt="" 
                className={styles.long} 
              />
            </div>
            <div className={styles.part_s}>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxwcm9mZmVzc2lvbmFsJTIwaW1hZ2VzJTIwJTIwY29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
                alt="" 
                className={styles.long} 
              />
               <Link to = "/about-us">
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
                    stroke="black" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photos;
