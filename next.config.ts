import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files: everything is prerendered at build time.
  output: 'export',
  // Emits /work/slug/index.html so Pages resolves clean URLs.
  trailingSlash: true,
  typedRoutes: true,
  images: {
    // No image optimizer at runtime on Pages: scripts/images.mjs pre-generates
    // AVIF variants and this loader points srcset at them.
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    // Must match WIDTHS in scripts/images.mjs
    deviceSizes: [640, 1080, 1920],
    imageSizes: [],
  },
};

export default nextConfig;
