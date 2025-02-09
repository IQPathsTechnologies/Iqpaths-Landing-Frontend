import './App.css';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import Popup from './Components/MainPopup/MainPopup'; // Import Popup Component

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      setShowPopup(true);
      sessionStorage.setItem("visited", "true"); // Set flag only for the current session
    }
  }, []);

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
