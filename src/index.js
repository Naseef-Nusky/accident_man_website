import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Accident from './pages/Accident';
import ReplacementVehicles from './pages/ReplacementVehicles';
import BodyshopRepairs from './pages/BodyshopRepairs';
import Contact from './pages/Contact';
import CreditHire from './pages/CreditHire';
import Blogs from './pages/Blogs';
import BlogPostRoute from './pages/BlogPostRoute';
import { Terms } from './pages/Terms';
import { Complaints } from './pages/Complaints';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    future: { v7_startTransition: true, v7_relativeSplatPath: true },
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'accident', element: <Accident /> },
      { path: 'replacement-vehicles', element: <ReplacementVehicles /> },
      { path: 'credit-hire', element: <CreditHire /> },
      { path: 'bodyshop-repairs', element: <BodyshopRepairs /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'blogs/:slug', element: <BlogPostRoute /> },
      { path: 'contact', element: <Contact /> },
      { path: 'terms', element: <Terms /> },
      { path: 'complaints', element: <Complaints /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
