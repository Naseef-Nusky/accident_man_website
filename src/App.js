import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ScrollToTop } from "./components/ScrollToTop.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
