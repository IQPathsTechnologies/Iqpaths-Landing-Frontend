import React, { useState } from "react";
import styles from "./testimonials.module.css";

const testimonials = [
  {
    quote:
      "Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
    name: "Resky Fernanda",
    role: "Product Designer at Tokopedia",
    image: "src/assets/user1.png",
  },
  {
    quote:
      "WOC gave me the tools and confidence to excel in my career. The instructors were inspiring and supportive.",
    name: "John Doe",
    role: "Software Engineer at Google",
    image: "src/assets/user1.png",
  },
  {
    quote:
      "An amazing learning experience! The courses are very practical and insightful. Highly recommend WOC to everyone.",
    name: "Jane Smith",
    role: "UI/UX Designer at Microsoft",
    image: "src/assets/user1.png",
  },
  {
    quote:
      "WOC gave me the tools and confidence to excel in my career. The instructors were inspiring and supportive.",
    name: "John Doe",
    role: "Software Engineer at Google",
    image: "src/assets/user1.png",
  },
  {
    quote:
      "An amazing learning experience! The courses are very practical and insightful. Highly recommend WOC to everyone.",
    name: "Jane Smith",
    role: "UI/UX Designer at Microsoft",
    image: "src/assets/user1.png",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { quote, name, role, image } = testimonials[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="src/assets/invertedComma.svg" alt="" />
        <h1>What our students have to say</h1>
        <p>Our students are our biggest fans. Here's what they have to say about us.</p>
      </div>
      <div className={styles.testimonialcards}>
        <div className={styles.card}>
          <div className={styles.cardHeading}>
            <h4>What they say</h4>
            <div className={styles.dotContainer}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dots} ${index === currentIndex ? styles.dotactive : styles.dotnotActive}`}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.description}>{quote}</div>
          <div className={styles.profileContainerFooter}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>
                <img src={image} alt={name} />
              </div>
              <div className={styles.profileInfo}>
                <h2>{name}</h2>
                <p>{role}</p>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.btn} onClick={handlePrev}>
                {`<`}
              </div>
              <div className={styles.btn} onClick={handleNext}>
                {`>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
