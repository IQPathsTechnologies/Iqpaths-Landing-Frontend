import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Error from './pages/Error/error';
import ContactUs from './pages/ContactUs/ContactUs';
import MyLearning from './pages/MyLearning/MyLearning';
import ViewLectures from './pages/ViewLectures/ViewLectures';
import ProfilePage from './pages/ProfilePage/ProfilePage'
import LoginSignup from './Components/loginSignup/loginSignup';
import CartPage from './pages/CartPage/CartPage';
import AboutUs from './pages/AboutUs/AboutUs';
import { UserProvider } from './context/userContext';
import CoursesProvider from './context/coursesContext';
import { checkForLoginLoader, IsuserLogedinAndValid } from './utility/middleware/RedirectLoaders';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition/TermsCondition';
import CancellationRefund from './pages/CancellationRefund/CancellationRefund';
import Logout from './Components/LogOut/Logout';
import Placement from './pages/Placement/Placement';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Internship from './pages/Internship/Internship';
import Internship1 from './pages/Internship/Internship1';
import { ToastContainer } from 'react-toastify';
import IndustryProject from './pages/IndustryProjects/IndustryProject';
import InternshipForm from './pages/InternshipForm/InternshipForm';
import InternPage from './pages/Internship2/InternPage';
import { CartProvider } from './context/cartContext';
// import SignUpPopup from './Components/CourseSection/SignUpPopUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/course/:title/:id',
        element: <Course />,
      },
      {
        path: '/course',
        element: <Course />,
      },
      {
        path: '/Placement Preparation',
        element: <Placement />,
      },
      {
        path: '*',
        element: <Error />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/my-Learnings',
        element: <MyLearning />
      },
      {
        path: '/view-Lectures/:title',
        element: <ViewLectures />,
        loader:IsuserLogedinAndValid
      },
      {
        path: '/login',
        element: <LoginSignup />,
        loader: checkForLoginLoader
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/signup',
        element: <LoginSignup />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/internships',
        element: <InternPage/>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      },
      {
        path: '/terms',
        element: <TermsCondition />
      },
      {
        path: '/cancellation',
        element: <CancellationRefund />
      },
      {
        path:'/logout',
        element:<Logout/>
      },
      {
        path: '/Careers',
        element: <Internship1 />
      },
      {
        path: '/coming',
        element: <ComingSoon />
      },
      {
        path: 'Workshops & Webinars',
        element: <ComingSoon />
      },
      {
        path: 'Mock Technical Interviews',
        element: <ComingSoon />
      },
      {
        path: 'Industry Projects',
        element: < ComingSoon/>
      },
      {
        path: '/internship/:title',
        element: < InternshipForm />
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <>
  <CoursesProvider>
  <UserProvider>
  <CartProvider>
    <RouterProvider router = {router} />

  </CartProvider>
  </UserProvider>
  </CoursesProvider>

  <ToastContainer 
      className="customToastContainer"
      toastClassName="customToast"
    />
  </>
);