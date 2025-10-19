import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ServiceShowcase } from "./components/ServiceShowcase";
import { ClaimsProcess } from "./components/ClaimsProcess";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

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
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
