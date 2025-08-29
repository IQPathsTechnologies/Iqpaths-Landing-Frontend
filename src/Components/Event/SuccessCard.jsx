import React, { useState } from "react";
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
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Team meeting",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Office workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Technology dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Business presentation",
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Team celebration",
    },
    {
      src: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Innovation lab",
    },
  ];

  return (
    <div className="success-card-container">
      <div className="success-card">
        {/* ... content-section same as before ... */}

        <div className="image-section">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Team collaboration"
              className="main-image"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
