import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 narrowed the default allowlist to [75]; OptimizedImage requests 85,
    // which otherwise makes every /_next/image request fail with a 400.
    qualities: [75, 85],
  },
};

export default nextConfig;
