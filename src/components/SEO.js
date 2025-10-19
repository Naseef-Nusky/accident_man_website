import React, { useEffect } from 'react';

export function SEO({ title, description, keywords, canonical, ogImage, ogType = 'website', structuredData }) {
  const defaultTitle = "Accident Man - Professional Accident Management Services";
  const defaultDescription = "Expert accident management services including vehicle recovery, replacement vehicles, and legal assistance. Trusted by thousands across the UK.";
  const defaultKeywords = "accident management, vehicle recovery, replacement vehicles, car accident, motorcycle accident, legal assistance, UK";
  const siteUrl = "https://accidentman.co.uk"; // Replace with your actual domain
  
  const fullTitle = title ? `${title} | Accident Man` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/logo.png`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic meta
    setMeta('description', fullDescription);
    setMeta('keywords', fullKeywords);
    setMeta('author', 'Accident Man Limited');
    setMeta('robots', 'index, follow');

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullCanonical);

    // Open Graph
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', fullDescription, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:url', fullCanonical, 'property');
    setMeta('og:image', fullOgImage, 'property');
    setMeta('og:site_name', 'Accident Man', 'property');
    setMeta('og:locale', 'en_GB', 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDescription);
    setMeta('twitter:image', fullOgImage);

    // Structured Data
    const id = 'seo-structured-data';
    let json = document.getElementById(id);
    if (json) json.remove();
    if (structuredData) {
      json = document.createElement('script');
      json.type = 'application/ld+json';
      json.id = id;
      json.text = JSON.stringify(structuredData);
      document.head.appendChild(json);
    }
  }, [fullTitle, fullDescription, fullKeywords, fullCanonical, fullOgImage, ogType, structuredData]);

  return null;
}
