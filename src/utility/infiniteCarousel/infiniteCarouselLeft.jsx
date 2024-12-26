import React, { useRef, useEffect, useState } from 'react';
import styles from './infiniteCarousel.module.css';

const InfiniteCarousel = ({ images, direction = 'left', speed = 20 }) => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const requestRef = useRef();

  const totalWidth = images.length * 320; // 300px width + 20px margin

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      let newTranslateX;

      if (direction === 'left') {
        newTranslateX = -(progress * speed) / 1000;
        if (Math.abs(newTranslateX) >= totalWidth) {
          startTime = timestamp; // Reset when a full loop completes
          newTranslateX = 0;
        }
      } else if (direction === 'right') {
        newTranslateX = (progress * speed) / 1000;
        if (newTranslateX >= totalWidth) {
          startTime = timestamp; // Reset when a full loop completes
          newTranslateX = -totalWidth;
        }
      }

      setTranslateX(newTranslateX);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [images, direction, speed]);

  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(${translateX}px)`,
          width: `${totalWidth * 2}px`, // Double the width for seamless transition
        }}
      >
        {/* Render images and their duplicate */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel item ${index + 1}`}
            className={styles.carouselItem}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
