import React from "react";
import { Header } from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home.js";
import AboutPage from "./pages/About.js";
import Accident from "./pages/Accident.js";
import ReplacementVehicles from "./pages/ReplacementVehicles.js";
import BodyshopRepairs from "./pages/BodyshopRepairs.js";
import Contact from "./pages/Contact.js";
import CreditHire from "./pages/CreditHire.js";
import Blogs from "./pages/Blogs.js";
import BlogPostRoute from "./pages/BlogPostRoute.js";
import { Terms } from "./pages/Terms.js";
import { Complaints } from "./pages/Complaints.js";
import { PrivacyPolicy } from "./pages/PrivacyPolicy.js";
import { ScrollToTop } from "./components/ScrollToTop.js";
import { PerformanceTracking } from "./components/PerformanceTracking.js";
import { Footer } from "./components/Footer.js";

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <PerformanceTracking />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accident" element={<Accident />} />
          <Route path="/replacement-vehicles" element={<ReplacementVehicles />} />
          <Route path="/bodyshop-repairs" element={<BodyshopRepairs />} />
          <Route path="/credit-hire" element={<CreditHire />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPostRoute />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}
