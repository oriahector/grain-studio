import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files: everything is prerendered at build time.
  output: 'export',
  // Emits /work/slug/index.html so Pages resolves clean URLs.
  trailingSlash: true,
  typedRoutes: true,
  images: {
    // No image optimizer at runtime on Pages; variants are generated at build time.
    unoptimized: true,
  },
};

export default nextConfig;
