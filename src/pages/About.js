import React from "react";
import { About as AboutSection } from "../components/About.js";
import { SEO } from "../components/SEO.js";

export default function About() {
  return (
    <>
      <SEO
        title="About Accident Man - Expert Accident Management"
        description="Learn about Accident Man's expert accident management services, trusted since 2011 across the UK."
        canonical="/about"
        keywords="about accident man, accident management company, vehicle recovery UK"
      />
      <main>
        <AboutSection />
      </main>
    </>
  );
}


