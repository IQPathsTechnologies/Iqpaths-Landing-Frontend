import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Courses from './pages/Courses';


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
        path: '/',
        element: <Home />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router = {router} />
  </>
);