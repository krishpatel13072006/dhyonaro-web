import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical }) => {
  const brandName = "Dhyanora Group";
  const siteTitle = `${brandName} | Clarity. Direction. Growth.`;
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = `Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction under one focused vision.`;
  const siteUrl = "https://Dhyanora.com"; 

  // JSON-LD Schema for Parent-Child Relationship
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "subOrganization": [
      {
        "@type": "Organization",
        "name": "Pramukh Import Export"
      },
      {
        "@type": "Organization",
        "name": "Pramukh Techventures"
      },
      {
        "@type": "Organization",
        "name": "Shreeji Infra (Mahantam Industrial Park)"
      },
      {
        "@type": "Organization",
        "name": "Bricks Trading Division"
      }
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || `Dhyanora Group, Ahmedabad Business, Metal Scrap Trading Gujarat, Electronics Retail Ahmedabad, Mahantam Industrial Park, Bricks Trading, Shreeji Infra, Pramukh Import Export`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl)} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;


