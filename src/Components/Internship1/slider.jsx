import React, { useState, useEffect } from 'react';
import styles from "./Slider.module.css"

function Slider() {
  const testimonials = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60',
      text: 'I do admire the company culture and, I like that. Visioncraft is truly the place where good attitudes have blended with proficiency. If you’re going to craft something great and you have a strong eagerness to do that, Visioncraft will remove all hassles in your journey.',
      author: 'James Olson',
      role: 'Product Designer',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1545418776-a37fba72a75d?w=500&auto=format&fit=crop&q=60',
      text: 'Visioncraft has been a game-changer for my career. The team is incredibly supportive and the work environment is fantastic.',
      author: 'Sarah Johnson',
      role: 'Software Engineer',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1543117976-792a2d6ddb1d?w=500&auto=format&fit=crop&q=60',
      text: 'Working at Visioncraft has been an amazing experience. The opportunities for growth and development are endless.',
      author: 'Michael Brown',
      role: 'Project Manager',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?w=500&auto=format&fit=crop&q=60',
      text: 'The culture at Visioncraft is second to none. I feel valued and appreciated every single day.',
      author: 'Emily Davis',
      role: 'UX Designer',
      link: '#'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?w=500&auto=format&fit=crop&q=60',
      text: 'Visioncraft is a place where you can truly thrive. The support and encouragement from the team are unparalleled.',
      author: 'David Wilson',
      role: 'Marketing Specialist',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1589304444311-44c26adfcfb8?w=500&auto=format&fit=crop&q=60',
      text: 'I am constantly inspired by the talented individuals I work with at Visioncraft. It’s a fantastic place to grow your career.',
      author: 'Jessica Lee',
      role: 'Data Analyst',
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
              <a id="testimonial-link" href={testimonials[currentIndex].link}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.75C1 1.67893 2.67893 0 4.75 0H21.25C23.3211 0 25 1.67893 25 3.75V20.25C25 22.3211 23.3211 24 21.25 24H4.75C2.67893 24 1 22.3211 1 20.25V3.75ZM7.15 9.975V18H9.7V9.975H7.15ZM7 7.425C7 8.25 7.6 8.85 8.425 8.85C9.25 8.85 9.85 8.25 9.85 7.425C9.85 6.6 9.25 6 8.425 6C7.675 6 7 6.6 7 7.425ZM16.45 18H18.85V13.05C18.85 10.575 17.35 9.75 15.925 9.75C14.65 9.75 13.75 10.575 13.525 11.1V9.975H11.125V18H13.675V13.725C13.675 12.6 14.425 12 15.175 12C15.925 12 16.45 12.375 16.45 13.65V18Z" fill="#0040D8"/>
              </svg>
               LinkedIn profile
              </a>
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
