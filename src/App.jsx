import './App.css';
import Header from './Components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import Popup from './Components/MainPopup/MainPopup'; // Import Popup Component

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      setShowPopup(true);
      sessionStorage.setItem("visited", "true"); // Set flag only for the current session
    }

    // Handle Google OAuth Redirect
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("accessToken", token); // Save token in localStorage
      navigate("/home"); // Redirect to home
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
