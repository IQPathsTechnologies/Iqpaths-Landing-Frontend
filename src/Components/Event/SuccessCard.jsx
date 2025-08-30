import React, { useState } from "react";

import Bootcamp from "../../assets/successStroy/Bootcamp.png";
import Certificate from "../../assets/successStroy/certifacate.png";
import lacture from "../../assets/successStroy/lacture.png";
import lacture1 from "../../assets/successStroy/lacture1.png";
import lacture2 from "../../assets/successStroy/lacture2.png";
import AIML from "../../assets/successStroy/AIML.jpeg";
import "./SuccessCard.css";

const SuccessCard = () => {
  const [selectedImage, setSelectedImage] = useState(null); // For modal image

  const openImageModal = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const thumbnails = [
    {
      src: Bootcamp,
      alt: "Team meeting",
    },
    {
      src: Certificate,
      alt: "Office workspace",
    },
    {
      src: lacture,
      alt: "Technology dashboard",
    },
    {
      src: lacture1,
      alt: "Business presentation",
    },
    {
      src: lacture2,
      alt: "Team celebration",
    },
    {
      src: AIML,
      alt: "Innovation lab",
    },
  ];

  return (
    <div className="success-card-container">
      <div className="success-card">
        <div className="content-section">
          <div className="badge">Success Story</div>
          <h2 className="title">AI/ML Bootcamp Completion</h2>
          <p className="description">
            Our 2-day free AI/ML Bootcamp successfully introduced aspiring
            learners to the foundations of Machine Learning and Artificial
            Intelligence. Through interactive sessions, hands-on practice, and
            real-world insights, participants gained clarity on core ML concepts
            and their applications. The program created an engaging environment
            where beginners could confidently take their first step toward
            AI-driven careers.
          </p>

          <div className="metrics">
            <div className="metric">
              <span className="metric-value">500+</span>
              <div className="metric-label">Participants Joined</div>
            </div>
            <div className="metric">
              <span className="metric-value">85%</span>
              <div className="metric-label">Found It Highly Valuable</div>
            </div>
            <div className="metric">
              <span className="metric-value">90%</span>
              <div className="metric-label">Interested in Advanced Courses</div>
            </div>
          </div>

          <div className="date">Achievement Date: August 2025</div>
          <div className="date">
            Location: Online
            <button
              className="youtube-button"
              onClick={() =>
                window.open("https://www.youtube.com/@IQPaths", "_blank")
              }
            >
              Visit YouTube
            </button>
          </div>
        </div>

        <div className="image-section">
          <div className="image-container">
            <img
              src={Bootcamp}
              alt="Team collaboration"
              className="main-image"
            />
            <img
              src={Certificate}
              alt="Technology innovation"
              className="hover-image"
            />

            <div className="image-overlay">
              <div className="overlay-text">Our Success Gallery</div>
              <div className="thumbnail-grid">
                {thumbnails.map((thumb, index) => (
                  <div
                    className="thumbnail"
                    key={index}
                    onClick={() => openImageModal(thumb.src)}
                  >
                    <img src={thumb.src} alt={thumb.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <img src={selectedImage} alt="Full Preview" />
          <span className="close-button" onClick={closeImageModal}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default SuccessCard;
