import React, { useRef, useEffect, useState } from 'react';
import styles from './infiniteCarousel.module.css';

const RightCarousel = ({ images, speed = 20, onImageClick }) => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const requestRef = useRef();

  const totalWidth = images.length * 320; // 300px width + 20px margin

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = -totalWidth; // Start position at the end of the first set
    let animationFrame;

    const animate = () => {
      position += speed / 60; // Move right at the specified speed
      if (position >= 0) {
        position = -totalWidth; // Reset to the end when the full set has scrolled
      }
      setTranslateX(position);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [images, speed, totalWidth]);

  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${totalWidth * 2}px`, // Double the width for seamless looping
        }}
      >
        {/* Render images and their duplicate */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel item ${index + 1}`}
            className={styles.carouselItem}
            onClick={() => onImageClick(src)} // Pass the clicked image to onImageClick
          />
        ))}
      </div>
    </div>
  );
};

export default RightCarousel;
