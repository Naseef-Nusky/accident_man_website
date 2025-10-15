import React from "react";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { About } from "./components/About.js";
import { Services } from "./components/Services.js";
import { ServiceShowcase } from "./components/ServiceShowcase.js";
import { ClaimsProcess } from "./components/ClaimsProcess.js";
import { Reviews } from "./components/Reviews.js";
import { FAQ } from "./components/FAQ.js";
import { ContactForm } from "./components/ContactForm.js";
import { Footer } from "./components/Footer.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceShowcase />
        <ClaimsProcess />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
