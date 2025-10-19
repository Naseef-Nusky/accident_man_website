import React from "react";
import { ContactForm } from "../components/ContactForm.js";
import { SEO } from "../components/SEO.js";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Accident Man | 24/7 claims helpline"
        description="Contact Accident Man for accident management, replacement vehicles, and repair services. 24/7 helpline available."
        canonical="/contact"
        keywords="contact accident man, claims helpline, accident management contact"
      />
      <main id="main-content">
        <h1 className="sr-only">Contact Accident Man</h1>
        <ContactForm />
      </main>
    </>
  );
}


