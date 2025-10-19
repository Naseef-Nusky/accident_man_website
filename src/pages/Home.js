import React from "react";
import { Hero } from "../components/Hero.js";
import { About } from "../components/About.js";
import { Services } from "../components/Services.js";
import { Reviews } from "../components/Reviews.js";
import { FAQ } from "../components/FAQ.js";
import { ContactForm } from "../components/ContactForm.js";
import { SEO } from "../components/SEO.js";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Accident Man Limited",
    "url": "https://accidentman.co.uk",
    "logo": "https://accidentman.co.uk/logo.webp",
    "description": "Professional accident management services including vehicle recovery, replacement vehicles, and legal assistance across the UK.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7a Queens Parade Mansions, Brownlow Road, Bounds Green",
      "addressLocality": "London",
      "postalCode": "N11 2DN",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-843-289-1570",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Vehicle Recovery",
        "description": "Professional vehicle recovery services for accident-damaged vehicles"
      },
      {
        "@type": "Service", 
        "name": "Replacement Vehicles",
        "description": "Courtesy cars, vans, and motorcycles delivered within 10 hours"
      },
      {
        "@type": "Service",
        "name": "Legal Assistance", 
        "description": "Expert legal support for accident claims and compensation"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Professional Accident Management Services UK"
        description="Expert accident management services including vehicle recovery, replacement vehicles, and legal assistance. Trusted by thousands across the UK. Call 0843 289 1570."
        keywords="accident management UK, vehicle recovery, replacement vehicles, car accident, motorcycle accident, legal assistance, accident claims, courtesy car, van hire"
        canonical="/"
        structuredData={structuredData}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
    </>
  );
}


