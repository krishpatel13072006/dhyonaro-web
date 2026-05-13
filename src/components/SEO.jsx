import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, breadcrumbs }) => {
  const brandName = "Dhyanora Group";
  const siteTitle = `${brandName} | Building Businesses That Last`;
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
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9999999999",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/dhyanora",
      "https://twitter.com/dhyanora"
    ]
  };

  // JSON-LD Schema for WebSite Sitelinks Search Box
  const websiteSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": brandName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
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
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || `Dhyanora Group, Diversified Business Conglomerate Gujarat, Metal Scrap Trading India, Premium Electronics Retail Ahmedabad, Mahantam Industrial Park, Construction Materials Supplier Gujarat, Pramukh Import Export, Shreeji Infra`} />
      
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


