import { useEffect, useState } from "react";
import "./RedirectPopup.css";

export default function RedirectPopup({ redirectUrl }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleRedirect = () => {
    window.location.href = redirectUrl;
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        {/* Header Section */}
        <div className="popup-header">
          <button className="popup-close" onClick={handleClose}>✕</button>
          <span className="popup-badge">🚀 NEW LAUNCH</span>
          <h2 className="popup-title">IQPathsTech</h2>
          <p className="popup-subtitle">Our new software & tech solutions platform</p>
        </div>

        {/* Body Section */}
        <div className="popup-body">
          <p className="popup-text">
            We now offer software development, web solutions and tech consulting services.
            Come explore what we've built!
          </p>

          <div className="popup-buttons">
            <button onClick={handleRedirect} className="explore-btn">
              Explore IQPathsTech →
            </button>
            <button onClick={handleClose} className="stay-btn">
              Continue on IQPaths
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
