import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Error from './pages/Error/error';
import ContactUs from './pages/ContactUs/ContactUs';
import MyLearning from './pages/MyLearning/MyLearning';
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
        path: '*',
        element: <Error />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/myLearning',
        element: <MyLearning />
      },
      // {
      //   path: '/login',
      //   element: <SignUpPopup />
      // },
      // {
      //   path: '/singup',
      //   element: <SignUpPopup />
      // }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router = {router} />
  </>
);