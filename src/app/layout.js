import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  metadataBase: new URL('https://dhyanora.com'),
  title: "Dhyanora Group | Industrial Group in Ahmedabad",
  description: "Dhyanora Group is a leading industrial group in Ahmedabad, Gujarat. Specialists in metal scrap trading, electronics retail, and industrial infrastructure.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dhyanora Group",
              "url": "https://www.dhyanora.com",
              "logo": "https://www.dhyanora.com/logo.png",
              "description": "Leading industrial group based in Ahmedabad, Gujarat",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "IN"
              }
            })
          }}
        />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
