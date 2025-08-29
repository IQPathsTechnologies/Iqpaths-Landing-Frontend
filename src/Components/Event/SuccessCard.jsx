import React from 'react';
import './SuccessCard.css';

function SuccessCard() {
  return (
    <div className="success-card">
      <div className="content-section">
        <div className="badge">Success Story</div>
        <h2 className="title">Revolutionary AI Platform Launch</h2>
        <p className="description">
          Our groundbreaking AI platform has transformed how businesses approach automation and intelligence.
          With cutting-edge machine learning algorithms and intuitive user interfaces, we've empowered over
          10,000 companies to streamline their operations and boost productivity by an average of 40%.
        </p>

        <div className="metrics">
          <div className="metric">
            <span className="metric-value">10K+</span>
            <div className="metric-label">Active Users</div>
          </div>
          <div className="metric">
            <span className="metric-value">40%</span>
            <div className="metric-label">Efficiency Boost</div>
          </div>
          <div className="metric">
            <span className="metric-value">98%</span>
            <div className="metric-label">Satisfaction</div>
          </div>
        </div>

        <div className="date">Achievement Date: March 2024</div>
      </div>

      <div className="image-section">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="main-image"
          />
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Technology innovation"
            className="hover-image"
          />
          <div className="image-overlay">
            <div className="overlay-text">Our Success Gallery</div>
            <div className="thumbnail-grid">
              {[
                {
                  src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Team meeting'
                },
                {
                  src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Office workspace'
                },
                {
                  src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Technology dashboard'
                },
                {
                  src: 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Business presentation'
                },
                {
                  src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Team celebration'
                },
                {
                  src: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  alt: 'Innovation lab'
                }
              ].map((thumb, index) => (
                <div className="thumbnail" key={index}>
                  <img src={thumb.src} alt={thumb.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessCard;
