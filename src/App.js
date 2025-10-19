import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
