import React from "react";
import { Hero } from "../components/Hero.js";
import { About } from "../components/About.js";
import { Services } from "../components/Services.js";
import { Reviews } from "../components/Reviews.js";
import { FAQ } from "../components/FAQ.js";
import { ContactForm } from "../components/ContactForm.js";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <FAQ />
      <ContactForm />
    </main>
  );
}


