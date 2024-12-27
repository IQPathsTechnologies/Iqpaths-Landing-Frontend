import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';


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
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/course',
        element: <Course />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router = {router} />
  </>
);