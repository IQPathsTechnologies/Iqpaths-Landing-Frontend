import React, { useState } from 'react';
import styles from './Mentor.module.css';
import InfiniteCarouselRight from '../../utility/infiniteCarousel/infiniteCarouselRight';
import MentorPopup from './MentorPopup';

const images = [
  'src/assets/Mentors/mentor1.jpg',
  'src/assets/Mentors/mentor2.jpg',
  'src/assets/Mentors/mentor3.jpeg',
  'src/assets/Mentors/mentor4.jpg',
  'src/assets/Mentors/mentor5.jpg',
];

function Mentor() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Mentors</h1>
        <p>
          Our mentors are industry experts with years of experience in their
          respective fields. They are dedicated to providing personalized
          guidance and support to help you achieve your career goals.
        </p>
      </div>
      <div className={styles.carousel}>
        <InfiniteCarouselRight
          images={images}
          onImageClick={openPopup} // Handle image click
        />
      </div>
      {selectedImage && (
        <MentorPopup image={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
}

export default Mentor;
