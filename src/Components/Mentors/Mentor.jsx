import React from 'react'
import styles from './Mentor.module.css'
import InfiniteCarouselLeft from '../../utility/infiniteCarousel/infiniteCarouselLeft'
import InfiniteCarouselRight from '../../utility/infiniteCarousel/infiniteCarouselRight'


const images = [
  'src/assets/Mentors/mentor1.jpg',
  'src/assets/Mentors/mentor2.jpg',
  'src/assets/Mentors/mentor3.jpeg',
  'src/assets/Mentors/mentor4.jpg',
  'src/assets/Mentors/mentor5.jpg',
  
];

function Mentor() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Mentors</h1>
        <p>
          Our mentors are industry experts with years of experience in their
          respective fields. They are dedicated to providing personalized
          guidance and support to help you achieve your career goals. Whether
          you are looking to develop new skills, advance in your current role,
          or transition to a new career, our mentors are here to help you every
          step of the way.
        </p>

        <div className={styles.buttonContainer}> 
            <div className={styles.button}>
                Explore More
            </div>
        </div>
      </div>
      <div className="carousel">
        {/* <InfiniteCarouselLeft
          images={images}
        /> */}
        <br />
        <InfiniteCarouselRight
          images={images}
          />
      </div>
    </div>
  );
}

export default Mentor