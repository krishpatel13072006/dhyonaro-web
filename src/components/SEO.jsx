import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, breadcrumbs, image }) => {
  const brandName = "Dhyanora Group";
  const siteUrl = "https://dhyanora.com"; 
  const defaultDesc = `Dhyanora Group is a leading diversified business group in Ahmedabad, Gujarat, specializing in metal trading, electronics, infrastructure, and construction.`;
  const defaultImage = `${siteUrl}/og-image.jpg`; // Ensure this exists in public folder
  
  // Smart Title Logic: Avoid redundancy if brandName is already in title
  let fullTitle = "";
  if (title) {
    if (title.includes(brandName)) {
      fullTitle = title;
    } else {
      fullTitle = `${title} | ${brandName}`;
    }
  } else {
    fullTitle = `${brandName} | Diversified Industrial Group Gujarat`;
  }

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
      { "@type": "Organization", "name": "Pramukh Techventure" },
      { "@type": "Organization", "name": "Shreeji Infra" },
      { "@type": "Organization", "name": "Brics Trading" }
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
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || "Dhyanora Group, Industrial Group Gujarat, Metal Scrap Trading India, Electronics Retail Ahmedabad, Mahantam Industrial Park, Construction Materials Supplier, Pramukh Import Export"} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl)} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={brandName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={typeof window !== 'undefined' ? window.location.href : siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />
      <meta property="twitter:image" content={image || defaultImage} />
      
      {/* Other Important Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={brandName} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchemaMarkup)}
      </script>
      {breadcrumbSchemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;


