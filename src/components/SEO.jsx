'use client';
import React from 'react';
import Script from 'next/script';

const SEO = ({ title, description, keywords, breadcrumbs }) => {
  const brandName = "Dhyanora Group";
  const siteUrl = "https://dhyanora.com"; 
  const defaultDesc = `Dhyanora Group is a leading diversified business group in Ahmedabad, Gujarat, specializing in metal trading, electronics, infrastructure, and construction.`;
  
  // JSON-LD Schema for Organization
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandName,
    "alternateName": "Dhyanora",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": defaultDesc,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "subOrganization": [
      { "@type": "Organization", "name": "Pramukh Import Export" },
      { "@type": "Organization", "name": "Pramukh Techventures" },
      { "@type": "Organization", "name": "Shreeji Infra" },
      { "@type": "Organization", "name": "Bricks Trading Division" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/dhyanora",
      "https://twitter.com/dhyanora",
      "https://facebook.com/dhyanora"
    ]
  };

  // JSON-LD Schema for WebSite
  const websiteSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brandName,
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": brandName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    }
  };

  // JSON-LD Schema for Breadcrumbs
  const breadcrumbSchemaMarkup = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.path}`
    }))
  } : null;

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaMarkup) }}
      />
      {breadcrumbSchemaMarkup && (
        <Script
          id="schema-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaMarkup) }}
        />
      )}
    </>
  );
};

export default SEO;
