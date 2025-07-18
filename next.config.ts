import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.codans.com.br',

      },
    ],
  },
};

export default nextConfig;
