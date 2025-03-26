import React, { useState, useEffect } from 'react';
import styles from "./Slider.module.css"

function Slider() {
  
  const testimonials = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60',
      text: "The courses at IQpaths strike the right balance between theoretical knowledge and practical application. The mentors are extremely supportive, making the learning process seamless.",
      author: 'Deveshi Nema',
      role: "Perfect Blend of Theory and Practice" ,
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1545418776-a37fba72a75d?w=500&auto=format&fit=crop&q=60',
      text: "I was looking to excel in Aptitude, and IQpaths delivered exactly what I needed. The interactive learning experience and expert guidance made it worth every penny." ,
      author: "Renuka Vipat",
      role: "Best Investment in My Career" ,
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1543117976-792a2d6ddb1d?w=500&auto=format&fit=crop&q=60',
      text:"I’ve taken many online courses, but IQpaths stands out. The content is engaging, easy to understand, and the mentors go above and beyond to clarify doubts.",
      author: 'Raj Raghuwanshi',
      role: "Engaging and Informative" ,
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?w=500&auto=format&fit=crop&q=60',
      text: "I was hesitant about entering the tech field, but IQpaths provided the right direction and motivation. The real-world projects gave me the confidence to apply my skills effectively.",
      author: "Aditya Bodani",
      role: "Boosted My Confidence" ,
      link: '#'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60',
      text: "IQpaths' curriculum is well-structured and aligned with industry demands. The mentorship and career guidance helped me secure a role as an AI researcher in a reputed firm.",
      author: 'Hardik Patodi',
      role:"Career-Aligned Learning" ,
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1589304444311-44c26adfcfb8?w=500&auto=format&fit=crop&q=60',
      text: "The learning path at IQpaths is tailored to your goals. It’s personalized, interactive, and keeps you engaged throughout. I highly recommend it to anyone looking to grow in tech.",
      author: 'Vinayak Mandloi',
      role: "Personalized Learning Experience" ,
      link: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateTestimonial = () => {
      return testimonials[currentIndex];
    };

    updateTestimonial();
  }, [currentIndex]);

  const nextTestimonial = (event) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.mid3}>
        <div className={styles.title_box}>
          <h1 className={styles.title}>Don’t just take our word for it!</h1>
          <p className={styles.text}>See the feedback from your teammates.</p>
        </div>
        <div className={styles.testimonial}>
          <img id={styles.testimonial_image} src={testimonials[currentIndex].image} alt="Testimonial" />
          <div className={styles.testimonial_content}>
            <div>
              <svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" width="33.8179" height="37" fill="url(#pattern0_1347_4677)" />
                <defs>
                  <pattern id="pattern0_1347_4677" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1347_4677" transform="matrix(0.00213691 0 0 0.00195312 -0.047048 0)" />
                  </pattern>
                  <image id="image0_1347_4677" width="512" height="512" />
                </defs>
              </svg>
            </div>
            <div className={styles.part}>
              <p id="testimonial-text">{testimonials[currentIndex].text}</p>
              <div>
                <p className="author" id="testimonial-author">{testimonials[currentIndex].author}</p>
                <p className="role" id="testimonial-role">{testimonials[currentIndex].role}</p>
              </div>
             
            </div>
          </div>
          <div className={styles.avatars}>
            <img id="s1" src={testimonials[(currentIndex + 1) % testimonials.length].image} alt="Person 1" />
            <img id="s2" src={testimonials[(currentIndex + 2) % testimonials.length].image} alt="Person 2" />
            <img id="s3" src={testimonials[(currentIndex + 3) % testimonials.length].image} alt="Person 3" />
          </div>
        </div>
        <div className={styles.footer}>
          <p id="testimonial-count">{currentIndex + 1}/{testimonials.length} Testimonials</p>
          <a href="#" id="next-button" onClick={nextTestimonial}>
            Next <svg width="20" height="20" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.664062 10.9997H23.3307M23.3307 10.9997L13.6716 1.08301M23.3307 10.9997L13.6716 20.9163" stroke="#090808" stroke-width="2"/>
            </svg>
            
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
