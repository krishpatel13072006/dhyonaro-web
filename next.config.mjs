/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: '.',
  },

  // Compress all responses (HTML, JSON, CSS, JS) with gzip
  compress: true,

  images: {
    // Auto-convert images to modern formats (AVIF first, then WebP)
    // This turns your 5MB about-hero.png into ~150–200KB automatically!
    formats: ['image/avif', 'image/webp'],
    // Aggressive caching — images served from CDN will stay cached for 1 year
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    return [
      {
        // Cache videos and static assets for 1 year
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache all other static files (images, fonts)
        source: '/:path(.*\\.(?:png|jpg|jpeg|webp|avif|svg|woff2|woff))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/companies/brics',
        destination: '/companies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
