import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  structuredData 
}) {
  const defaultTitle = "Accident Man - Professional Accident Management Services";
  const defaultDescription = "Expert accident management services including vehicle recovery, replacement vehicles, and legal assistance. Trusted by thousands across the UK.";
  const defaultKeywords = "accident management, vehicle recovery, replacement vehicles, car accident, motorcycle accident, legal assistance, UK";
  const siteUrl = "https://accidentman.co.uk"; // Replace with your actual domain
  
  const fullTitle = title ? `${title} | Accident Man` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/logo.png`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="Accident Man Limited" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Accident Man" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.country" content="United Kingdom" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
