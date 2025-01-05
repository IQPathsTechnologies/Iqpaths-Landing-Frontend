import React, { useContext, useEffect } from 'react'
import { AuthService } from '../../axios/User'
import UserContext from '../../context/userContext'
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const { setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const apiClass = new AuthService();
    const handleLogout = async () => {
        try {
          await apiClass.logout();
          setIsLoggedIn(false);
          navigate('/');
          // Redirect to the login page
        } catch (error) {
          // Log the error for debugging
           console.error("Logout failed", error);
          // Optionally provide feedback to the user
          alert("An error occurred while logging out. Please try again.");
        }
      };
    useEffect(()=>{
        handleLogout();
    },[])
  return (
    <div>Logging out ..... </div>
  )
}
