import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Preconnect to font CDNs to speed up font loading */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon (ensures it is visible in browser tab) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* Preload the first hero video so it starts playing instantly */}
        <link rel="preload" href="/videos/company-1.mp4" as="video" type="video/mp4" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Dhyanora Group Headquarters",
                "image": "https://www.dhyanora.com/logo.png",
                "@id": "https://www.dhyanora.com",
                "url": "https://www.dhyanora.com",
                "telephone": "+919624614003",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ahmedabad",
                  "addressLocality": "Ahmedabad",
                  "addressRegion": "GJ",
                  "postalCode": "380001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 23.0225,
                  "longitude": 72.5714
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            ])
          }}
        />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
